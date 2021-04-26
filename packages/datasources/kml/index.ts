import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources, useVueCesium } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, options, data } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcDatasourceKml',
  props: {
    ...show,
    ...enableMouseEvent,
    entities: {
      type: Array,
      default: () => []
    },
    ...data,
    ...options
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged',
    'changedEvent', 'errorEvent', 'loadingEvent', 'refreshEvent', 'unsupportedNodeEvent'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'KmlDataSource'
    useDatasources(props, ctx, instance)
    const vc = useVueCesium()

    instance.createCesiumObject = async () => {
      const options = (props.options || {}) as Cesium.KmlDataSource.LoadOptions
      if (!options.camera) {
        options.camera = vc.viewer.camera
      }
      if (!options.canvas) {
        options.canvas = vc.viewer.canvas
      }
      return Cesium.KmlDataSource.load(props.data, options)
    }

    return () => ctx.slots.default ? (
      h('i', {
        class: kebabCase(instance.proxy.$options.name),
        style: { display: 'none !important' }
      }, hSlot(ctx.slots.default))
    ) : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})