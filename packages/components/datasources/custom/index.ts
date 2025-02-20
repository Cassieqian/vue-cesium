/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-23 23:21:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\custom\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcDatasourceCustom',
  props: {
    ...show,
    ...enableMouseEvent,
    entities: {
      type: Array,
      default: () => []
    },
    name: String,
    destroy: {
      type: Boolean,
      default: false
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged', 'changedEvent', 'errorEvent', 'loadingEvent'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CustomDataSource'
    useDatasources(props, ctx, instance)

    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name)
    }

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
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
