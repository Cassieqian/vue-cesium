/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-08 14:00:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage-scan\index.ts
 */
import { useCommon } from '@vue-cesium/composables'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { computed, defineComponent, getCurrentInstance, h, onUnmounted, ref, watch, WatchStopHandle } from 'vue'
import VcPostProcessStage from '../post-process-stage'
import useRadar from './use-radar-scan'
import useCircle from './use-circle-scan'
const defaultOptions = {
  position: [0, 0],
  radius: 1500,
  interval: 3500,
  color: [0, 0, 0, 255]
}
export default defineComponent({
  name: 'VcPostProcessStageScan',
  props: {
    type: {
      type: String,
      default: 'radar' // radar, circle
    },
    options: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPostProcessStageScan'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const fragmentShader = ref('')
    const uniforms = ref<any>(null)
    const { $services } = commonState
    const useRadarState = useRadar($services)
    const useCircleState = useCircle($services)
    let unwatchFns: Array<WatchStopHandle> = []
    // computed
    const options = computed(() => {
      return Object.assign({}, defaultOptions, props.options)
    })
    // watch
    unwatchFns.push(
      watch(
        () => options,
        val => {
          if (instance.mounted) {
            ;(instance.proxy as VcComponentPublicInstance).reload()
          }
        },
        { deep: true }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const opts = commonState.transformProps(options.value)
      let result
      if (props.type === 'radar') {
        result = useRadarState.webgl(opts)
      } else if (props.type === 'circle') {
        result = useCircleState.webgl(opts)
      }
      fragmentShader.value = result.shaderSource
      uniforms.value = result.uniforms
      return true
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => {
      return h(VcPostProcessStage, {
        fragmentShader: fragmentShader.value,
        uniforms: uniforms.value
      })
    }
  }
})
