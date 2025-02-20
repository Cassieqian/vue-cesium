/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-27 10:51:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\imagery-layer\src\index.ts
 */
import { createCommentVNode, defineComponent, ExtractPropTypes, getCurrentInstance, h, provide } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { hSlot } from '@vue-cesium/utils/private/render'
import { useCommon } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { isUndefined, kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcLayerImagery',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'update:imageryProvider'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ImageryLayer'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    // methods
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props)
      const imageryProvider = (props.imageryProvider || {}) as Cesium.ImageryProvider
      return new Cesium.ImageryLayer(imageryProvider, options)
    }
    instance.mount = async () => {
      const { viewer } = $services
      const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
      imageryLayer.sortOrder = props.sortOrder
      viewer.imageryLayers.add(imageryLayer)
      return !viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer)
    }
    instance.unmount = async () => {
      const { viewer } = $services
      const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer)
    }

    const updateProvider = provider => {
      if (isUndefined(provider)) {
        return instance.unmount?.()
      } else {
        const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
        ;(imageryLayer as any)._imageryProvider = provider
        const listener = getInstanceListener(instance, 'update:imageryProvider')
        if (listener) emit('update:imageryProvider', provider)
      }

      return true
    }

    // expose public methods
    Object.assign(instance.proxy, {
      // private but needed by VcProviderXXX
      __updateProvider: updateProvider
    })

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})
