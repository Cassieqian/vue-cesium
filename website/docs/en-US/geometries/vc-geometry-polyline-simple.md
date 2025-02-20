## VcGeometryPolylineSimple

Loading a polyline geometry modeled as a line strip. It is equivalent to initializing a `Cesium.SimplePolylineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### Basic usage

Basic usage of VcGeometryPolylineSimple component.

:::demo Use the `vc-geometry-polyline-simple` tag to add line strips on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-polyline-simple
          ref="geometryRef"
          :positions="[
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ]"
        ></vc-geometry-polyline-simple>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const geometryRef = ref(null)
      const appearance = ref(null)
      const attributes = ref(null)
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        geometryRef.value.unload()
      }
      const reload = () => {
        geometryRef.value.reload()
      }
      const load = () => {
        geometryRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        console.log('onViewerReady')
        appearance.value = new Cesium.PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new Cesium.ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
      }
      // lifecycle
      onMounted(() => {
        geometryRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
          console.log('All geometries are loaded.')
        })
      })
      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        geometryRef,
        appearance,
        attributes
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| positions | Array | | `required` An array of Cartesian3 defining the positions in the polyline as a line strip. |
| colors | Array | | `optional` An Array of Color defining the per vertex or per segment colors. |
| colorsPerVertex | Boolean | `false` | `optional` A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[SimplePolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SimplePolylineGeometry.html)**
