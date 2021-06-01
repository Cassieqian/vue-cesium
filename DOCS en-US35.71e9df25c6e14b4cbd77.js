(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=template&id=5c88d8ec

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsplane\"><a class=\"header-anchor\" href=\"#vcgraphicsplane\">¶</a> VcGraphicsPlane</h2><p>Loading a plane graphic. It is equivalent to initializing a <code>Cesium.PlaneGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsPlane component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-plane"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add plane to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane1\"\n        :plane=\"{normal: { x: 1, y: 0, z: 0 }, distance: 0.0}\"\n        :dimensions=\"[400000, 300000]\"\n        material=\"blue\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[107,40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane2\"\n        :plane=\"[{ x: 0, y: 1, z: 0 }, 0]\"\n        :dimensions=\"[400000, 300000]\"\n        :material=\"[255, 0, 0, 125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[100, 40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane3\"\n        :plane=\"{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }\"\n        :dimensions=\"{ x: 400000.0, y: 300000.0 }\"\n        :fill=\"false\"\n        :outline=\"true\"\n        outlineColor=\"yellow\"\n      ></vc-graphics-plane>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const plane1 = ref(null)\n      const plane2 = ref(null)\n      const plane3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        plane1,\n        plane2,\n        plane3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the plane.</td><td></td></tr><tr><td>plane</td><td>Object|Array</td><td></td><td><code>optional</code> A Plane Property specifying the normal and distance for the plane.</td><td></td></tr><tr><td>dimensions</td><td>Object|Array</td><td></td><td><code>optional</code> A Cartesian2 Property specifying the width and height of the plane.</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the plane is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the plane.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the plane is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the plane casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this plane will be displayed.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html\">PlaneGraphics</a></strong></li></ul>", 6);

function vc_graphics_planevue_type_template_id_5c88d8ec_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=template&id=5c88d8ec

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_planevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_plane = _resolveComponent("vc-graphics-plane");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  position: [114, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane1",
                      plane: {
                        normal: {
                          x: 1,
                          y: 0,
                          z: 0
                        },
                        distance: 0.0
                      },
                      dimensions: [400000, 300000],
                      material: "blue"
                    }, null, 8, ["plane"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  position: [107, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane2",
                      plane: [{
                        x: 0,
                        y: 1,
                        z: 0
                      }, 0],
                      dimensions: [400000, 300000],
                      material: [255, 0, 0, 125],
                      outline: true,
                      outlineColor: "black"
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  position: [100, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane3",
                      plane: {
                        normal: {
                          x: 0,
                          y: 0,
                          z: 1
                        },
                        distance: 0.0
                      },
                      dimensions: {
                        x: 400000.0,
                        y: 300000.0
                      },
                      fill: false,
                      outline: true,
                      outlineColor: "yellow"
                    }, null, 8, ["plane", "dimensions"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var plane1 = ref(null);
          var plane2 = ref(null);
          var plane3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          }; // life cycle


          onMounted(function () {
            Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            plane1: plane1,
            plane2: plane2,
            plane3: plane3,
            onViewerReady: onViewerReady
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md



vc_graphics_planevue_type_script_lang_ts.render = vc_graphics_planevue_type_template_id_5c88d8ec_render

/* harmony default export */ var vc_graphics_plane = __webpack_exports__["default"] = (vc_graphics_planevue_type_script_lang_ts);

/***/ })

}]);