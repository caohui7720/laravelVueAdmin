webpackJsonp([2],{

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(77)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(217)
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
Component.options.__file = "resources/assets/js/components/Demo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c85f51a", Component.options)
  } else {
    hotAPI.reload("data-v-1c85f51a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("5d1933c1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c85f51a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Demo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c85f51a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Demo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n.el-header {\n    background-color: #3c8dbc;\n    color: #333;\n    text-align: center;\n    line-height: 50px;\n}\n.el-footer {\n    background-color: #ffffff;\n    color: #444444;\n    line-height: 40px;\n    border-top: 1px solid #d2d6de;\n}\n.el-aside {\n    background-color: #222d32;\n    color: #333;\n    text-align: left;\n    height: 100%;\n}\nbody > .el-container {\n    margin-bottom: 40px;\n}\n.el-submenu__title{\n    height: 50px;\n    line-height: 50px;\n}\n.el-menu{\n    border-right: none;\n}\n.el-menu-item-group__title{\n    padding: 0;\n}\n.el-form-item{\n    margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 216:
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
    name: "demo",
    data: function data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            formInline: {
                user: '',
                region: ''
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    { staticStyle: { height: "100%", overflow: "hidden" } },
    [
      _c("el-header", { staticStyle: { height: "55px" } }, [_vm._v("Header")]),
      _vm._v(" "),
      _c(
        "el-container",
        { staticStyle: { height: "100%" } },
        [
          _c(
            "el-aside",
            { staticStyle: { height: "100%" }, attrs: { width: "200px" } },
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
                                    [
                                      _c("i", {
                                        staticClass: "el-icon-location"
                                      }),
                                      _vm._v("选项1")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-menu-item",
                                    { attrs: { index: "1-2" } },
                                    [
                                      _c("i", {
                                        staticClass: "el-icon-location"
                                      }),
                                      _vm._v("选项2")
                                    ]
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
                          _c("el-menu-item", { attrs: { index: "3" } }, [
                            _c("i", { staticClass: "el-icon-document" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [_vm._v("导航三")]
                            )
                          ]),
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
            "el-container",
            [
              _c(
                "el-main",
                [
                  _c(
                    "el-row",
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 24 } },
                        [
                          _c(
                            "el-card",
                            { attrs: { shadow: "always" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "clearfix",
                                  attrs: { slot: "header" },
                                  slot: "header"
                                },
                                [
                                  _c(
                                    "el-form",
                                    {
                                      staticClass: "demo-form-inline",
                                      attrs: {
                                        inline: true,
                                        model: _vm.formInline
                                      }
                                    },
                                    [
                                      _c(
                                        "el-form-item",
                                        { attrs: { label: "审批人" } },
                                        [
                                          _c("el-input", {
                                            attrs: { placeholder: "审批人" },
                                            model: {
                                              value: _vm.formInline.user,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.formInline,
                                                  "user",
                                                  $$v
                                                )
                                              },
                                              expression: "formInline.user"
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
                                              attrs: {
                                                placeholder: "活动区域"
                                              },
                                              model: {
                                                value: _vm.formInline.region,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formInline,
                                                    "region",
                                                    $$v
                                                  )
                                                },
                                                expression: "formInline.region"
                                              }
                                            },
                                            [
                                              _c("el-option", {
                                                attrs: {
                                                  label: "区域一",
                                                  value: "shanghai"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("el-option", {
                                                attrs: {
                                                  label: "区域二",
                                                  value: "beijing"
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
                                        [
                                          _c(
                                            "el-button",
                                            {
                                              attrs: { type: "primary" },
                                              on: { click: _vm.onSubmit }
                                            },
                                            [_vm._v("查询")]
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
                                "el-table",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    data: _vm.tableData,
                                    stripe: "",
                                    border: ""
                                  }
                                },
                                [
                                  _c("el-table-column", {
                                    attrs: {
                                      prop: "date",
                                      label: "日期",
                                      width: "180"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("el-table-column", {
                                    attrs: {
                                      prop: "name",
                                      label: "姓名",
                                      width: "180"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("el-table-column", {
                                    attrs: { prop: "address", label: "地址" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "block text-center",
                                  staticStyle: { "margin-top": "10px" }
                                },
                                [
                                  _c("el-pagination", {
                                    attrs: {
                                      background: "",
                                      "page-size": 20,
                                      "pager-count": 11,
                                      layout: "prev, pager, next",
                                      total: 1000
                                    }
                                  })
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
              ),
              _vm._v(" "),
              _c("el-footer", { staticStyle: { height: "40px" } }, [
                _c("div", { staticClass: "pull-right hidden-xs" }, [
                  _c("b", [_vm._v("Version")]),
                  _vm._v(" 2.3.8\n                ")
                ]),
                _vm._v(" "),
                _c("strong", [
                  _vm._v("Copyright © 2014-2016 "),
                  _c("a", { attrs: { href: "http://almsaeedstudio.com" } }, [
                    _vm._v("Almsaeed Studio")
                  ]),
                  _vm._v(".")
                ]),
                _vm._v(" All rights reserved.\n            ")
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c85f51a", module.exports)
  }
}

/***/ })

});