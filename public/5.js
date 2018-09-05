webpackJsonp([5],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(225)
}
var normalizeComponent = __webpack_require__(77)
/* script */
var __vue_script__ = __webpack_require__(211)
/* template */
var __vue_template__ = __webpack_require__(227)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1742f82b", Component.options)
  } else {
    hotAPI.reload("data-v-1742f82b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "index",
    data: function data() {
        return {
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: '',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },

    methods: {
        handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        onSubmit: function onSubmit() {
            console.log('submit!');
        }
    }
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("0f8f8a86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1742f82b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1742f82b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n.el-header, .el-footer {\n    background-color: #3c8dbc;\n    color: #333;\n    text-align: center;\n    line-height: 50px;\n}\n.el-aside {\n    background-color: #222d32;\n    color: #333;\n    text-align: left;\n    height: 936px;\n}\nbody > .el-container {\n    margin-bottom: 40px;\n}\n.el-container:nth-child(5) .el-aside,\n.el-container:nth-child(6) .el-aside {\n    line-height: 260px;\n}\n.el-container:nth-child(7) .el-aside {\n    line-height: 320px;\n}\n.el-submenu__title{\n    height: 50px;\n    line-height: 50px;\n}\n.el-menu{\n    border-right: none;\n}\n.el-menu-item-group__title{\n    padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c("el-header", { staticStyle: { height: "55px" } }, [_vm._v("Header")]),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c(
            "el-aside",
            { attrs: { width: "200px" } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 24 } },
                    [
                      _c(
                        "el-menu",
                        {
                          staticClass: "el-menu-vertical-demo",
                          attrs: {
                            "default-active": "2",
                            "background-color": "#222d32",
                            "text-color": "#fff",
                            "active-text-color": "#ffd04b"
                          },
                          on: { open: _vm.handleOpen, close: _vm.handleClose }
                        },
                        [
                          _c(
                            "el-submenu",
                            { attrs: { index: "1" } },
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "el-icon-location" }),
                                _vm._v(" "),
                                _c("span", [_vm._v("导航一")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "el-menu-item-group",
                                [
                                  _c(
                                    "el-menu-item",
                                    { attrs: { index: "1-1" } },
                                    [_vm._v("选项1")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-menu-item",
                                    { attrs: { index: "1-2" } },
                                    [_vm._v("选项2")]
                                  )
                                ],
                                1
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2" } }, [
                            _c("i", { staticClass: "el-icon-menu" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [_vm._v("导航二")]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-menu-item",
                            { attrs: { index: "3", disabled: "" } },
                            [
                              _c("i", { staticClass: "el-icon-document" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [_vm._v("导航三")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "4" } }, [
                            _c("i", { staticClass: "el-icon-setting" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [_vm._v("导航四")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-main",
            [
              _c(
                "el-card",
                [
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form, "label-width": "80px" }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "活动名称" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "活动区域" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "请选择活动区域" },
                              model: {
                                value: _vm.form.region,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "region", $$v)
                                },
                                expression: "form.region"
                              }
                            },
                            [
                              _c("el-option", {
                                attrs: { label: "区域一", value: "shanghai" }
                              }),
                              _vm._v(" "),
                              _c("el-option", {
                                attrs: { label: "区域二", value: "beijing" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "活动时间" } },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c("el-date-picker", {
                                staticStyle: { width: "100%" },
                                attrs: {
                                  type: "date",
                                  placeholder: "选择日期"
                                },
                                model: {
                                  value: _vm.form.date1,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "date1", $$v)
                                  },
                                  expression: "form.date1"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { staticClass: "line", attrs: { span: 2 } },
                            [_vm._v("-")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c("el-time-picker", {
                                staticStyle: { width: "100%" },
                                attrs: {
                                  type: "fixed-time",
                                  placeholder: "选择时间"
                                },
                                model: {
                                  value: _vm.form.date2,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "date2", $$v)
                                  },
                                  expression: "form.date2"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "即时配送" } },
                        [
                          _c("el-switch", {
                            model: {
                              value: _vm.form.delivery,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "delivery", $$v)
                              },
                              expression: "form.delivery"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "活动性质" } },
                        [
                          _c(
                            "el-checkbox-group",
                            {
                              model: {
                                value: _vm.form.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "type", $$v)
                                },
                                expression: "form.type"
                              }
                            },
                            [
                              _c("el-checkbox", {
                                attrs: {
                                  label: "美食/餐厅线上活动",
                                  name: "type"
                                }
                              }),
                              _vm._v(" "),
                              _c("el-checkbox", {
                                attrs: { label: "地推活动", name: "type" }
                              }),
                              _vm._v(" "),
                              _c("el-checkbox", {
                                attrs: { label: "线下主题活动", name: "type" }
                              }),
                              _vm._v(" "),
                              _c("el-checkbox", {
                                attrs: { label: "单纯品牌曝光", name: "type" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "特殊资源" } },
                        [
                          _c(
                            "el-radio-group",
                            {
                              model: {
                                value: _vm.form.resource,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "resource", $$v)
                                },
                                expression: "form.resource"
                              }
                            },
                            [
                              _c("el-radio", {
                                attrs: { label: "线上品牌商赞助" }
                              }),
                              _vm._v(" "),
                              _c("el-radio", {
                                attrs: { label: "线下场地免费" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "活动形式" } },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea" },
                            model: {
                              value: _vm.form.desc,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "desc", $$v)
                              },
                              expression: "form.desc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: { click: _vm.onSubmit }
                            },
                            [_vm._v("立即创建")]
                          ),
                          _vm._v(" "),
                          _c("el-button", [_vm._v("取消")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1742f82b", module.exports)
  }
}

/***/ })

});