import { h, defineComponent, ref, computed, Transition, onBeforeUnmount, getCurrentInstance, VNode } from 'vue'
import VcIcon from '../icon'
import { Spinner as VcSpinner } from '../spinner'
import { Ripple } from '@vue-cesium/directives'
import useBtn, { useBtnProps } from './use-btn'
import { hMergeSlot, hDir } from '@vue-cesium/utils/private/render'
import { stop, prevent, stopAndPrevent, listenOpts } from '@vue-cesium/utils/private/event'
import { getTouchTarget } from '@vue-cesium/utils/private/touch'
import { isKeyCode } from '@vue-cesium/utils/private/key-composition'

const { passiveCapture } = listenOpts

let touchTarget: HTMLElement | null, keyboardTarget: HTMLElement | null, mouseTarget: HTMLElement | null

export default defineComponent({
  name: 'VcBtn',

  props: {
    ...useBtnProps,

    percentage: {
      type: Number,
      default: 0
    },
    darkPercentage: Boolean
  },

  emits: ['click', 'keydown', 'touchstart', 'mousedown', 'keyup'],

  setup(props, { slots, emit }) {
    const proxy = getCurrentInstance()?.proxy

    const { classes, style, innerClasses, attributes, isActionable } = useBtn(props)

    const rootRef = ref<HTMLElement | null>(null)
    const blurTargetRef = ref<HTMLElement | null>(null)

    let localTouchTargetEl: HTMLElement | null = null,
      avoidMouseRipple,
      mouseTimer

    const hasLabel = computed(() => props.label !== void 0 && props.label !== null && props.label !== '')

    const ripple = computed(() =>
      props.ripple === false
        ? false
        : {
            // keyCodes: isLink.value === true ? [ 13, 32 ] : [ 13 ],
            keyCodes: 13,
            ...(props.ripple === true ? {} : props.ripple)
          }
    )

    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage))
      return val > 0 ? { transition: 'transform 0.6s', transform: `translateX(${val - 100}%)` } : {}
    })

    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        }
      } else if (isActionable.value === true) {
        return {
          onClick,
          onKeydown,
          onMousedown,
          onTouchstart
        }
      }

      return {}
    })

    const directives = computed(() => {
      // if props.disable !== true && props.ripple !== false
      return [[Ripple, ripple.value, void 0, { center: props.round }]]
    })

    const nodeProps = computed(() => ({
      ref: rootRef,
      class: 'vc-btn vc-btn-item non-selectable no-outline ' + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }))

    function onClick(e) {
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return
        }

        const el = document.activeElement
        // focus button if it came from ENTER on form
        // prevent the new submit (already done)
        if (
          props.type === 'submit' &&
          el !== document.body &&
          rootRef.value?.contains(el) === false &&
          // required for iOS and desktop Safari
          el?.contains(rootRef.value) === false
        ) {
          rootRef.value.focus()

          const onClickCleanup = () => {
            document.removeEventListener('keydown', stopAndPrevent, true)
            document.removeEventListener('keyup', onClickCleanup, passiveCapture)
            rootRef.value !== null && rootRef.value.removeEventListener('blur', onClickCleanup, passiveCapture)
          }

          document.addEventListener('keydown', stopAndPrevent, true)
          document.addEventListener('keyup', onClickCleanup, passiveCapture)
          rootRef.value.addEventListener('blur', onClickCleanup, passiveCapture)
        }
      }

      const go = () => {
        // navigateToLink(e)
      }

      emit('click', e, go)
      // TODO vue3 - not accounting for e.navigate
      // hasLink.value === true && e.navigate !== false && go()
    }

    function onKeydown(e) {
      if (isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e)

        if (keyboardTarget !== rootRef.value) {
          keyboardTarget !== null && cleanup()

          // focus external button if the focus helper was focused before
          rootRef.value?.focus()

          keyboardTarget = rootRef.value
          rootRef.value?.classList.add('vc-btn--active')
          document.addEventListener('keyup', onPressEnd, true)
          rootRef.value?.addEventListener('blur', onPressEnd, passiveCapture)
        }
      }

      emit('keydown', e)
    }

    function onTouchstart(e) {
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup()
        touchTarget = rootRef.value

        localTouchTargetEl = getTouchTarget(e.target)
        localTouchTargetEl?.addEventListener('touchcancel', onPressEnd, passiveCapture)
        localTouchTargetEl?.addEventListener('touchend', onPressEnd, passiveCapture)
      }

      // avoid duplicated mousedown event
      // triggering another early ripple
      avoidMouseRipple = true
      clearTimeout(mouseTimer)
      mouseTimer = setTimeout(() => {
        avoidMouseRipple = false
      }, 200)

      emit('touchstart', e)
    }

    function onMousedown(e) {
      if (mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup()
        mouseTarget = rootRef.value
        rootRef.value?.classList.add('vc-btn--active')
        document.addEventListener('mouseup', onPressEnd, passiveCapture)
      }

      e.qSkipRipple = avoidMouseRipple === true
      emit('mousedown', e)
    }

    function onPressEnd(e) {
      // needed for IE (because it emits blur when focusing button from focus helper)
      if (e !== void 0 && e.type === 'blur' && document.activeElement === rootRef.value) {
        return
      }

      if (e !== void 0 && e.type === 'keyup') {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          // for click trigger
          const evt = new MouseEvent('click', e)
          ;(evt as any).qKeyEvent = true
          e.defaultPrevented === true && prevent(evt)
          e.cancelBubble === true && stop(evt)
          rootRef.value?.dispatchEvent(evt)

          stopAndPrevent(e)

          // for ripple
          e.qKeyEvent = true
        }

        emit('keyup', e)
      }

      cleanup()
    }

    function cleanup(destroying?) {
      const blurTarget = blurTargetRef.value

      if (
        destroying !== true &&
        (touchTarget === rootRef.value || mouseTarget === rootRef.value) &&
        blurTarget !== null &&
        blurTarget !== document.activeElement
      ) {
        blurTarget.setAttribute('tabindex', '-1')
        blurTarget.focus()
      }

      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener('touchcancel', onPressEnd, passiveCapture)
          localTouchTargetEl.removeEventListener('touchend', onPressEnd, passiveCapture)
        }
        touchTarget = localTouchTargetEl = null
      }

      if (mouseTarget === rootRef.value) {
        document.removeEventListener('mouseup', onPressEnd, passiveCapture)
        mouseTarget = null
      }

      if (keyboardTarget === rootRef.value) {
        document.removeEventListener('keyup', onPressEnd, true)
        rootRef.value !== null && rootRef.value.removeEventListener('blur', onPressEnd, passiveCapture)
        keyboardTarget = null
      }

      rootRef.value !== null && rootRef.value.classList.remove('vc-btn--active')
    }

    function onLoadingEvt(evt) {
      stopAndPrevent(evt)
      evt.qSkipRipple = true
    }

    onBeforeUnmount(() => {
      cleanup(true)
    })

    // expose public methods
    Object.assign(proxy, {
      click: onClick
    })

    return () => {
      let inner: Array<VNode> = []

      props.icon !== void 0 &&
        inner.push(
          h(VcIcon, {
            name: props.icon,
            left: props.stack === false && hasLabel.value === true,
            role: 'img',
            'aria-hidden': 'true'
          })
        )

      hasLabel.value === true && inner.push(h('span', { class: 'block' }, [props.label]))

      inner = hMergeSlot(slots.default, inner)

      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(VcIcon, {
            name: props.iconRight,
            right: props.stack === false && hasLabel.value === true,
            role: 'img',
            'aria-hidden': 'true'
          })
        )
      }

      const child = [
        h('span', {
          class: 'vc-focus-helper',
          ref: blurTargetRef
        })
      ]

      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h(
            'span',
            {
              class: 'vc-btn__progress absolute-full overflow-hidden'
            },
            [
              h('span', {
                class: 'vc-btn__progress-indicator fit block' + (props.darkPercentage === true ? ' vc-btn__progress--dark' : ''),
                style: percentageStyle.value
              })
            ]
          )
        )
      }

      child.push(
        h(
          'span',
          {
            class: 'vc-btn__content text-center col items-center vc-anchor--skip ' + innerClasses.value
          },
          inner
        )
      )

      props.loading !== null &&
        child.push(
          h(
            Transition,
            {
              name: 'vc-transition--fade'
            },
            () =>
              props.loading === true
                ? [
                    h(
                      'span',
                      {
                        key: 'loading',
                        class: 'absolute-full flex flex-center'
                      },
                      slots.loading !== void 0 ? slots.loading() : [h(VcSpinner)]
                    )
                  ]
                : null
          )
        )

      return hDir('button', nodeProps.value, child, 'ripple', props.disable !== true && props.ripple !== false, () => directives.value)
    }
  }
})
