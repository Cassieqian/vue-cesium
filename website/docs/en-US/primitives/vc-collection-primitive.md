## VcCollectionPrimitive

Loading a collection of primitives. It is equivalent to initializing a `Cesium.PrimitiveCollection` instance.

:::tip
A member attribute `Scene.primitives(PrimitiveCollection)` of the `Viewer` instance that is initialized by `vc-viewer`. It is also a primitive itself so collections can be added to collections forming a hierarchy.
:::

### Basic usage

Basic usage of VcCollectionPrimitive component.

:::demo Use the `vc-collection-primitive` tag to add a collection of billboard primitives and model primitives to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-primitive @click="onClicked" :show="show" ref="collectionRef">
      <vc-collection-billboard :billboards="billboards1"></vc-collection-billboard>
      <vc-collection-primitive>
        <vc-collection-billboard :billboards="billboards2"></vc-collection-billboard>
      </vc-collection-primitive>
    </vc-collection-primitive>
    <vc-collection-primitive>
      <vc-primitive-model
        @click="onClicked"
        url="https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
      >
      </vc-primitive-model>
    </vc-collection-primitive>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide"> </el-switch>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const collectionRef = ref(null)
      const billboards1 = ref([])
      const billboards2 = ref([])
      const modelMatrix = ref(null)
      const show = ref(true)
      const instance = getCurrentInstance()
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        collectionRef.value.unload()
      }
      const reload = () => {
        collectionRef.value.reload()
      }
      const load = () => {
        collectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        for (var i = 0; i < 100; i++) {
          let billboard1 = {}
          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard1.scale = 0.1
          billboards1.value.push(billboard1)

          let billboard2 = {}
          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard2.scale = 0.15
          billboards2.value.push(billboard2)
        }

        modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        billboards1,
        billboards2,
        modelMatrix,
        show
      }
    }
  }
</script>
```

:::

### Props

| Name              | Type    | Default | Description                                                                                |
| ----------------- | ------- | ------- | ------------------------------------------------------------------------------------------ |
| show              | Boolean | `true`  | `optional` Determines if the primitives in the collection will be shown.                   |
| destroyPrimitives | Boolean | `true`  | `optional` Determines if primitives in the collection are destroyed when they are removed. |
| enableMouseEvent  | Boolean | `true`  | `optional` Specify whether the mouse event takes effect.                                   |

### Events

| Name       | Parameters                                                 | Description                                                      |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | Vue Instance                                               | Triggers before the cesiumObject is loaded.                      |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | Vue Instance                                               | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on this primitive.            |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the primitive.                 |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on this primitive.                 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to this primitive.                 |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**
