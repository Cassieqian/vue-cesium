(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-cylinder.md?vue&type=template&id=2ea4559a

const vc_geometry_cylindervue_type_template_id_2ea4559a_hoisted_1 = {
  class: "content element-doc"
};

const vc_geometry_cylindervue_type_template_id_2ea4559a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgeometrycylinder\"><a class=\"header-anchor\" href=\"#vcgeometrycylinder\">¶</a> VcGeometryCylinder</h2><p>Loading a cylinder geometry. It is equivalent to initializing a <code>Cesium.CylinderGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcGeometryCylinder component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-cylinder"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-cylinder-outline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tags to add a cylinder (cone) to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry :attributes=\"attributes\" :modelMatrix=\"modelMatrix\">\n        <vc-geometry-cylinder\n          ref=\"geometryRef\"\n          :length=\"400000.0\"\n          :topRadius=\"200000.0\"\n          :bottomRadius=\"200000.0\"\n          :slices=\"128\"\n          :vertexFormat=\"vertexFormat\"\n        ></vc-geometry-cylinder>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\" :modelMatrix=\"modelMatrix\">\n        <vc-geometry-cylinder-outline\n          ref=\"geometryOutlineRef\"\n          :length=\"400000.0\"\n          :topRadius=\"200000.0\"\n          :bottomRadius=\"200000.0\"\n          :slices=\"128\"\n          :numberOfVerticalLines=\"16\"\n        ></vc-geometry-cylinder-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"Show border\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const attributes = ref(null)\n      const modelMatrix = ref(null)\n      const attributesOutline = ref(null)\n      const outline = ref(true)\n      const vertexFormat = ref(null)\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium\n        attributes.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)\n        }\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())\n        }\n        appearance.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n\n        modelMatrix.value = Matrix4.multiplyByTranslation(\n          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),\n          new Cartesian3(0, 0, 0),\n          new Matrix4()\n        )\n        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        attributes,\n        attributesOutline,\n        outline,\n        modelMatrix,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>length</td><td>Array</td><td></td><td><code>required</code> A numeric Property specifying the length of the cylinder.</td></tr><tr><td>topRadius</td><td>Number</td><td></td><td><code>required</code> A numeric Property specifying the radius of the top of the cylinder.</td></tr><tr><td>bottomRadius</td><td>Number</td><td></td><td><code>required</code> A numeric Property specifying the radius of the bottom of the cylinder.</td></tr><tr><td>slices</td><td>Number</td><td><code>128</code></td><td><code>optional</code> The number of edges around the perimeter of the cylinder.</td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> The vertex attributes to be computed.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcgeometrycylinderoutline\"><a class=\"header-anchor\" href=\"#vcgeometrycylinderoutline\">¶</a> VcGeometryCylinderOutline</h3><p>Loading a cylinder geometry outline. It is equivalent to initializing a <code>Cesium.CylinderOutlineGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally.</p><h3 id=\"vcgeometrycylinderoutline-props\"><a class=\"header-anchor\" href=\"#vcgeometrycylinderoutline-props\">¶</a> VcGeometryCylinderOutline Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>length</td><td>Array</td><td></td><td><code>required</code> A numeric Property specifying the length of the cylinder.</td></tr><tr><td>topRadius</td><td>Number</td><td></td><td><code>required</code> A numeric Property specifying the radius of the top of the cylinder.</td></tr><tr><td>bottomRadius</td><td>Number</td><td></td><td><code>required</code> A numeric Property specifying the radius of the bottom of the cylinder.</td></tr><tr><td>slices</td><td>Number</td><td><code>128</code></td><td><code>optional</code> The number of edges around the perimeter of the cylinder.</td></tr><tr><td>numberOfVerticalLines</td><td>Number</td><td><code>16</code></td><td><code>optional</code> Number of lines to draw between the top and bottom surfaces of the cylinder.</td></tr></tbody></table><h3 id=\"vcgeometrycylinderoutline-events\"><a class=\"header-anchor\" href=\"#vcgeometrycylinderoutline-events\">¶</a> VcGeometryCylinderOutline Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html\">CylinderGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html\">CylinderOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_cylindervue_type_template_id_2ea4559a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_geometry_cylindervue_type_template_id_2ea4559a_hoisted_1, [vc_geometry_cylindervue_type_template_id_2ea4559a_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-cylinder.md?vue&type=template&id=2ea4559a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-cylinder.md?vue&type=script&lang=ts

/* harmony default export */ var vc_geometry_cylindervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createTextVNode: _createTextVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_geometry_cylinder = _resolveComponent("vc-geometry-cylinder");

        const _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        const _component_vc_primitive = _resolveComponent("vc-primitive");

        const _component_vc_geometry_cylinder_outline = _resolveComponent("vc-geometry-cylinder-outline");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive, {
              appearance: _ctx.appearance,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, {
                attributes: _ctx.attributes,
                modelMatrix: _ctx.modelMatrix
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_cylinder, {
                  ref: "geometryRef",
                  length: 400000.0,
                  topRadius: 200000.0,
                  bottomRadius: 200000.0,
                  slices: 128,
                  vertexFormat: _ctx.vertexFormat
                }, null, 8, ["length", "topRadius", "bottomRadius", "vertexFormat"])]),
                _: 1
              }, 8, ["attributes", "modelMatrix"])]),
              _: 1
            }, 8, ["appearance", "onClick"]), _ctx.outline ? (_openBlock(), _createBlock(_component_vc_primitive, {
              key: 0,
              appearance: _ctx.appearance,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, {
                attributes: _ctx.attributesOutline,
                modelMatrix: _ctx.modelMatrix
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_cylinder_outline, {
                  ref: "geometryOutlineRef",
                  length: 400000.0,
                  topRadius: 200000.0,
                  bottomRadius: 200000.0,
                  slices: 128,
                  numberOfVerticalLines: 16
                }, null, 8, ["length", "topRadius", "bottomRadius"])]),
                _: 1
              }, 8, ["attributes", "modelMatrix"])]),
              _: 1
            }, 8, ["appearance", "onClick"])) : _createCommentVNode("", true)]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.outline,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.outline = $event),
              "active-color": "#13ce66",
              "inactive-text": "Show border"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const geometryRef = ref(null);
          const geometryOutlineRef = ref(null);
          const appearance = ref(null);
          const attributes = ref(null);
          const modelMatrix = ref(null);
          const attributesOutline = ref(null);
          const outline = ref(true);
          const vertexFormat = ref(null); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            geometryRef.value.unload();
            geometryOutlineRef.value.unload();
          };

          const reload = () => {
            geometryRef.value.reload();
            geometryOutlineRef.value.reload();
          };

          const load = () => {
            geometryRef.value.load();
            geometryOutlineRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            console.log('onViewerReady');
            const {
              ColorGeometryInstanceAttribute,
              PerInstanceColorAppearance,
              Matrix4,
              Cartesian3,
              Transforms
            } = Cesium;
            attributes.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
            };
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
            };
            appearance.value = new PerInstanceColorAppearance({
              flat: true
            });
            modelMatrix.value = Matrix4.multiplyByTranslation(Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)), new Cartesian3(0, 0, 0), new Matrix4());
            vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT;
          }; // lifecycle


          onMounted(() => {
            Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {
              const {
                BoundingSphere
              } = Cesium;
              const boundingSphereUnion = geometries.reduce((prev, cur) => {
                const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject);
                const boundingSphere = cur.vm.$parent.modelMatrix ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix) : geometry.boundingSphere;
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere);
              }, null);
              geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion);
              console.log('All geometries are loaded.');
            });
          });
          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            geometryRef,
            geometryOutlineRef,
            appearance,
            attributes,
            attributesOutline,
            outline,
            modelMatrix,
            vertexFormat
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-cylinder.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-cylinder.md



vc_geometry_cylindervue_type_script_lang_ts.render = vc_geometry_cylindervue_type_template_id_2ea4559a_render

/* harmony default export */ var vc_geometry_cylinder = __webpack_exports__["default"] = (vc_geometry_cylindervue_type_script_lang_ts);

/***/ })

}]);