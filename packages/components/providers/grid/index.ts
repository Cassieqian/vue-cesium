/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-30 22:55:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\grid\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { tilingScheme, ellipsoid, tileWidth, tileHeight, glowColor } from '@vue-cesium/utils/cesium-props'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImageryGrid',
  props: {
    ...tilingScheme,
    ...ellipsoid,
    cells: {
      type: Number,
      default: 8
    },
    color: {
      type: [String, Object, Array],
      default: () => [1.0, 1.0, 1.0, 0.4],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    ...glowColor,
    glowWidth: {
      type: Number,
      default: 6
    },
    backgroundColor: {
      type: [String, Array, Object],
      default: () => [0.0, 0.5, 0.0, 0.2],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    ...tileWidth,
    ...tileHeight,
    canvasSize: {
      type: Number,
      default: 256
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GridImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
