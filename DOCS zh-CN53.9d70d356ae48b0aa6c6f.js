(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=template&id=22f91387

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_1 = {
  class: "content element-doc"
};

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcprimitivemodel"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcprimitivemodel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPrimitiveModel")], -1);

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载模型图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.Model"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例。")], -1);

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "模型图元组件的基础用法。", -1);

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-primitive-model"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加模型并改变它的光照。")])], -1);

var vc_primitive_modelvue_type_template_id_22f91387_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive-model\n      ref=\"primitive\"\n      :url=\"url\"\n      @readyPromise=\"onReadyPromise\"\n      :modelMatrix=\"modelMatrix\"\n      :scale=\"10000\"\n      :minimumPixelSize=\"128\"\n      :maximumScale=\"200000\"\n      @click=\"onClicked\"\n      :luminanceAtZenith=\"luminanceAtZenith\"\n      :specularEnvironmentMaps=\"specularEnvironmentMaps\"\n      :sphericalHarmonicCoefficients=\"sphericalHarmonicCoefficients\"\n    >\n    </vc-primitive-model>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">顶点亮度</span>\n          <el-slider v-model=\"luminanceAtZenith\" :min=\"0\" :max=\"2\" :step=\"0.01\"></el-slider>\n          <el-checkbox v-model=\"proceduralEnvironmentLighting\" :min=\"0\" :max=\"5\" :step=\"0.01\">使用程序内置的环境光照</el-checkbox>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  const coefficients = [\n    [-0.066550267689383, -0.022088055746048, 0.078835009246127],\n    [0.038364097478591, 0.045714300098753, 0.063498904606215],\n    [-0.01436536331281, -0.026490613715151, -0.05018940406602],\n    [-0.05153278691789, -0.050777795729986, -0.056449044453032],\n    [0.043454596136534, 0.046672590104157, 0.05753010764661],\n    [-0.00164046627411, 0.001286638231156, 0.007228908989616],\n    [-0.042260855700641, -0.046394335094707, -0.057562936365585],\n    [-0.004953478914091, -0.000479681664876, 0.008508150106928]\n  ]\n  const environmentMapURL = './SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'\n  export default {\n    data() {\n      return {\n        url: './SampleData/models/Pawns/Pawns.glb',\n        modelMatrix: {},\n        proceduralEnvironmentLighting: false,\n        luminanceAtZenith: 0.2,\n        specularEnvironmentMaps: environmentMapURL,\n        sphericalHarmonicCoefficients: coefficients\n      }\n    },\n    watch: {\n      proceduralEnvironmentLighting(val) {\n        if (val) {\n          this.specularEnvironmentMaps = undefined\n          this.sphericalHarmonicCoefficients = undefined\n        } else {\n          this.specularEnvironmentMaps = environmentMapURL\n          this.sphericalHarmonicCoefficients = coefficients\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n      },\n      onReadyPromise(model, viewer) {\n        const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)\n        viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>url</td><td>String</td><td></td><td><code>required</code> 指定 gltf 文件的 url 地址。</td><td></td></tr><tr><td>basePath</td><td>String</td><td></td><td><code>optional</code> 指定 glTF JSON 中 url 的相对路径。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 model 图元是否显示。</td><td></td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定将模型从模型坐标转换为世界坐标的 4x4 矩阵。</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 model 缩放比例。</td><td></td></tr><tr><td>minimumPixelSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 的最小像素。</td><td></td></tr><tr><td>maximumScale</td><td>Number</td><td></td><td><code>optional</code> 指定 model 最大像素。</td><td></td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 model 关联的信息，拾取时将返回该属性。</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定与 model 是否可以被拾取。</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定在加载模型后纹理是否可以继续加载。</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成。</td><td></td></tr><tr><td>clampAnimations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定动画在没有帧动画的时候保持最后一个姿势。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 model 是否投射或接收每个光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 可选的仅用于调试。 为模型中的每个 DrawCommand 绘制边界球。</td><td></td></tr><tr><td>debugWireframe</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 可选的仅用于调试。 仅用于调试。 在线框中绘制模型。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 model 的高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>scene</td><td>Object</td><td><code>false</code></td><td><code>optional</code> 指定model的scene参数，使用 heightReference 属性的模型必须传递。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 model 随相机改变的显示条件。</td><td></td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 model 渲染混合的颜色。</td><td></td></tr><tr><td>colorBlendMode</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 model 与颜色混合模式。 <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td></td></tr><tr><td>colorBlendAmount</td><td>Number</td><td><code>0.5</code></td><td><code>optional</code> 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。</td><td></td></tr><tr><td>silhouetteColor</td><td>Object|String|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> 指定 model 轮廓线颜色。</td><td></td></tr><tr><td>silhouetteSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 轮廓线像素尺寸。</td><td></td></tr><tr><td>clippingPlanes</td><td>Object</td><td></td><td><code>optional</code> 指定 model 屏幕裁剪参数。</td><td></td></tr><tr><td>dequantizeInShader</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 确定是否在 GPU 上对 Draco 编码的模型进行了反量化。 这减少了编码模型的总内存使用量。</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>Array|Object</td><td></td><td><code>optional</code> 缩放来自地球，天空，大气层和星空盒的基于漫反射和镜面反射图像的照明。</td><td></td></tr><tr><td>lightColor</td><td>Array|Object</td><td></td><td><code>optional</code> 为模型着色时的浅色。 未定义时，将使用场景的灯光颜色。</td><td></td></tr><tr><td>luminanceAtZenith</td><td>Number</td><td><code>0.2</code></td><td><code>optional</code> 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>Array|Object</td><td></td><td><code>optional</code> 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>String</td><td></td><td><code>optional</code> KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap。</td><td></td></tr><tr><td>credit</td><td>Object|String</td><td></td><td><code>optional</code> 指定 model 的描述信息。</td><td></td></tr><tr><td>backFaceCulling</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 是否剔除背面几何。 如果为 true，则背面剔除取决于材质的 doubleSided 属性； 如果为假，则禁用背面剔除。 如果 Model#color 是半透明的或 Model#silhouetteSize 大于 0.0，则不会剔除背面</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>readyPromise</td><td></td><td>模型对象可用时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Model.html\">Model</a></strong></li></ul>", 6);

function vc_primitive_modelvue_type_template_id_22f91387_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_primitive_modelvue_type_template_id_22f91387_hoisted_1, [vc_primitive_modelvue_type_template_id_22f91387_hoisted_2, vc_primitive_modelvue_type_template_id_22f91387_hoisted_3, vc_primitive_modelvue_type_template_id_22f91387_hoisted_4, vc_primitive_modelvue_type_template_id_22f91387_hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_primitive_modelvue_type_template_id_22f91387_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_primitive_modelvue_type_template_id_22f91387_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=template&id=22f91387

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=script&lang=ts


/* harmony default export */ var vc_primitive_modelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-toolbar"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "顶点亮度", -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("使用程序内置的环境光照");

      function render(_ctx, _cache) {
        var _component_vc_primitive_model = _resolveComponent("vc-primitive-model");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_el_slider = _resolveComponent("el-slider");

        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_col = _resolveComponent("el-col");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_primitive_model, {
                  ref: "primitive",
                  url: _ctx.url,
                  onReadyPromise: _ctx.onReadyPromise,
                  modelMatrix: _ctx.modelMatrix,
                  scale: 10000,
                  minimumPixelSize: 128,
                  maximumScale: 200000,
                  onClick: _ctx.onClicked,
                  luminanceAtZenith: _ctx.luminanceAtZenith,
                  specularEnvironmentMaps: _ctx.specularEnvironmentMaps,
                  sphericalHarmonicCoefficients: _ctx.sphericalHarmonicCoefficients
                }, null, 8, ["url", "onReadyPromise", "modelMatrix", "onClick", "luminanceAtZenith", "specularEnvironmentMaps", "sphericalHarmonicCoefficients"])];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_col, null, {
                  default: _withCtx(function () {
                    return [_createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                      modelValue: _ctx.luminanceAtZenith,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                        return _ctx.luminanceAtZenith = $event;
                      }),
                      min: 0,
                      max: 2,
                      step: 0.01
                    }, null, 8, ["modelValue", "step"]), _createVNode(_component_el_checkbox, {
                      modelValue: _ctx.proceduralEnvironmentLighting,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                        return _ctx.proceduralEnvironmentLighting = $event;
                      }),
                      min: 0,
                      max: 5,
                      step: 0.01
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }, 8, ["modelValue", "step"])])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 512)]);
      }

      var coefficients = [[-0.066550267689383, -0.022088055746048, 0.078835009246127], [0.038364097478591, 0.045714300098753, 0.063498904606215], [-0.01436536331281, -0.026490613715151, -0.05018940406602], [-0.05153278691789, -0.050777795729986, -0.056449044453032], [0.043454596136534, 0.046672590104157, 0.05753010764661], [-0.00164046627411, 0.001286638231156, 0.007228908989616], [-0.042260855700641, -0.046394335094707, -0.057562936365585], [-0.004953478914091, -0.000479681664876, 0.008508150106928]];
      var environmentMapURL = './SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx';
      var democomponentExport = {
        data: function data() {
          return {
            url: './SampleData/models/Pawns/Pawns.glb',
            modelMatrix: {},
            proceduralEnvironmentLighting: false,
            luminanceAtZenith: 0.2,
            specularEnvironmentMaps: environmentMapURL,
            sphericalHarmonicCoefficients: coefficients
          };
        },
        watch: {
          proceduralEnvironmentLighting: function proceduralEnvironmentLighting(val) {
            if (val) {
              this.specularEnvironmentMaps = undefined;
              this.sphericalHarmonicCoefficients = undefined;
            } else {
              this.specularEnvironmentMaps = environmentMapURL;
              this.sphericalHarmonicCoefficients = coefficients;
            }
          }
        },
        methods: {
          onViewerReady: function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000));
          },
          onReadyPromise: function onReadyPromise(model, viewer) {
            var boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix);
            viewer.scene.camera.flyToBoundingSphere(boundingSphere);
          },
          onClicked: function onClicked(e) {
            console.log(e);
          },
          unload: function unload() {
            this.$refs.primitive.unload();
          },
          load: function load() {
            this.$refs.primitive.load();
          },
          reload: function reload() {
            this.$refs.primitive.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md



vc_primitive_modelvue_type_script_lang_ts.render = vc_primitive_modelvue_type_template_id_22f91387_render

/* harmony default export */ var vc_primitive_model = __webpack_exports__["default"] = (vc_primitive_modelvue_type_script_lang_ts);

/***/ })

}]);