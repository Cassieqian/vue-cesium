/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-01 23:19:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\ui\fab\fab-action.ts
 */
import { h, defineComponent, computed, inject, getCurrentInstance, VNode } from 'vue'
import { fabKey } from '@vue-cesium/utils/config'
import { hMergeSlot } from '@vue-cesium/utils/private/render'

import VcBtn from '../btn'
import VcIcon from '../icon'
import useFab from './use-fab'
import defaultPropsAction, { anchorMap } from './defaultPropsAction'

interface FabData {
  showing?: {
    value: boolean
  }
  onChildClick?(...args: any[]): any
}

export default defineComponent({
  name: 'VcFabAction',

  props: defaultPropsAction,

  emits: ['click'],

  setup(props, { slots, emit }) {
    const $fab = inject<FabData>(fabKey)

    const { formClass, labelProps } = useFab(props, $fab?.showing)

    const classes = computed(() => {
      let align = undefined
      if (props.anchor) {
        align = anchorMap[props.anchor]
      }
      return formClass.value + (align !== void 0 ? ` ${align}` : '')
    })

    const isDisabled = computed(() => props.disable === true || $fab?.showing?.value !== true)

    function click(e) {
      $fab?.onChildClick?.(e)
      emit('click', e)
    }

    function getContent() {
      const child: Array<VNode> = []

      props.icon !== '' && child.push(h(VcIcon, { name: props.icon }))

      props.label !== '' && child[labelProps.value.action](h('div', labelProps.value.data, [props.label]))

      return hMergeSlot(slots.default, child)
    }

    // expose public methods
    const vm = getCurrentInstance()
    Object.assign(vm?.proxy, { click })

    return () =>
      h(
        VcBtn,
        {
          class: classes.value,
          ...props,
          noWrap: true,
          stack: props.stacked,
          icon: void 0,
          label: void 0,
          noCaps: true,
          fabMini: true,
          disable: isDisabled.value,
          size: props.size,
          onClick: click
        },
        getContent
      )
  }
})
