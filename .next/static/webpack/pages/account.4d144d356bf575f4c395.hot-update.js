webpackHotUpdate_N_E("pages/account",{

/***/ "./components/Account/AccountOrders.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountOrders.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Account/AccountOrders.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction AccountOrders(_ref) {\n  _s();\n\n  var orders = _ref.orders;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  function mapOrdersToPanels(orders) {\n    var _this = this;\n\n    console.log(orders);\n    return orders.map(function (order) {\n      return {\n        key: order._id,\n        title: {\n          content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n            color: \"blue\",\n            content: order.createdAt,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 18\n            }\n          })\n        },\n        content: {\n          content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Header, {\n            as: \"h3\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 11\n            }\n          }, \"Total: $\", order.total, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n            content: order.email,\n            icon: \"mail\",\n            basic: true,\n            horizontal: true,\n            style: {\n              marginLeft: '1rem'\n            },\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 11\n            }\n          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 11\n            }\n          }, order.products.map(function (item) {\n            {\n              console.log(item);\n            }\n\n            __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 13\n              }\n            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n              avatar: true,\n              src: item.product.mediaUrl,\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 15\n              }\n            }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Content, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 15\n              }\n            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Header, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }\n            }, item.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Description, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }\n            }, item.product.quantity, \" . $\", item.product.price)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Content, {\n              floated: \"right\",\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 15\n              }\n            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n              tag: true,\n              color: \"red\",\n              size: \"tiny\",\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }\n            }, item.product.sku)));\n          })))\n        }\n      };\n    });\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    as: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"folder open\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), \"Order History\"), orders.length == 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n    inverted: true,\n    tertiary: true,\n    color: \"grey\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    icon: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"copy outline \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }), \"No past orders.\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"orange\",\n    onClick: function onClick() {\n      router.push('/');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"View Products\"))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    fluid: true,\n    styled: true,\n    exclusive: false,\n    panels: mapOrdersToPanels(orders),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(AccountOrders, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AccountOrders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountOrders);\n\nvar _c;\n\n$RefreshReg$(_c, \"AccountOrders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50L0FjY291bnRPcmRlcnMuanM/MDQwYyJdLCJuYW1lcyI6WyJBY2NvdW50T3JkZXJzIiwib3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwT3JkZXJzVG9QYW5lbHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwib3JkZXIiLCJrZXkiLCJfaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJ0b3RhbCIsImVtYWlsIiwibWFyZ2luTGVmdCIsInByb2R1Y3RzIiwiaXRlbSIsInByb2R1Y3QiLCJtZWRpYVVybCIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwic2t1IiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkgsTUFBM0IsRUFBbUM7QUFBQTs7QUFDakNJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaO0FBRUEsV0FBT0EsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLGFBQUk7QUFDekJDLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQURjO0FBRXpCQyxhQUFLLEVBQUU7QUFDTEMsaUJBQU8sRUFBRSxNQUFDLHVEQUFEO0FBQU8saUJBQUssRUFBQyxNQUFiO0FBQW9CLG1CQUFPLEVBQUVKLEtBQUssQ0FBQ0ssU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBRmtCO0FBS3pCRCxlQUFPLEVBQUU7QUFDUEEsaUJBQU8sRUFDUCxtRUFDRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGNBQUUsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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RixDQURELEdBZUMsTUFBQywyREFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFVBQU0sTUFGUjtBQUdFLGFBQVMsRUFBRSxLQUhiO0FBSUUsVUFBTSxFQUFFdEIsaUJBQWlCLENBQUNILE1BQUQsQ0FKM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRyxDQUFQO0FBOEJEOztHQS9FUUQsYTtVQUNRRyxxRDs7O0tBRFJILGE7QUFpRk1BLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY2NvdW50L0FjY291bnRPcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIsIEFjY29yZGlvbiwgTGFiZWwsIFNlZ21lbnQsIEljb24sIEJ1dHRvbiwgTGlzdCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBBY2NvdW50T3JkZXJzKHtvcmRlcnN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIG1hcE9yZGVyc1RvUGFuZWxzKG9yZGVycykge1xuICAgIGNvbnNvbGUubG9nKG9yZGVycylcblxuICAgIHJldHVybiBvcmRlcnMubWFwKG9yZGVyPT4gKHtcbiAgICAgIGtleTogb3JkZXIuX2lkLFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgY29udGVudDogPExhYmVsIGNvbG9yPVwiYmx1ZVwiIGNvbnRlbnQ9e29yZGVyLmNyZWF0ZWRBdH0gLz5cbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGlzdC5IZWFkZXIgYXM9XCJoM1wiPlxuICAgICAgICAgIFRvdGFsOiAke29yZGVyLnRvdGFsfVxuICAgICAgICAgIDxMYWJlbCBcbiAgICAgICAgICAgIGNvbnRlbnQ9e29yZGVyLmVtYWlsfSBcbiAgICAgICAgICAgIGljb249XCJtYWlsXCJcbiAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxcmVtJ319ICBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGlzdC5IZWFkZXI+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAge29yZGVyLnByb2R1Y3RzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhpdGVtKX1cbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtpdGVtLnByb2R1Y3QubWVkaWFVcmx9IC8+XG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyPntpdGVtLm5hbWV9PC9MaXN0LkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TGlzdC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3QucXVhbnRpdHl9IC4gJHtpdGVtLnByb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgPC9MaXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD4gXG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRhZyBjb2xvcj1cInJlZFwiIHNpemU9XCJ0aW55XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0LnNrdX1cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSkpXG4gIH1cblxuICByZXR1cm4gPD5cbiAgICA8SGVhZGVyIGFzPVwiaDJcIj5cbiAgICAgIDxJY29uIG5hbWU9XCJmb2xkZXIgb3BlblwiIC8+XG4gICAgICBPcmRlciBIaXN0b3J5XG4gICAgPC9IZWFkZXI+XG4gICAge29yZGVycy5sZW5ndGggPT0gMCA/KFxuICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdGVydGlhcnkgY29sb3I9XCJncmV5XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkZXIgaWNvbj5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiY29weSBvdXRsaW5lIFwiIC8+XG4gICAgICAgICAgTm8gcGFzdCBvcmRlcnMuXG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJvcmFuZ2VcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICBWaWV3IFByb2R1Y3RzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWdtZW50PlxuICAgICkgOiAoXG4gICAgICA8QWNjb3JkaW9uIFxuICAgICAgICBmbHVpZCBcbiAgICAgICAgc3R5bGVkIFxuICAgICAgICBleGNsdXNpdmU9e2ZhbHNlfVxuICAgICAgICBwYW5lbHM9e21hcE9yZGVyc1RvUGFuZWxzKG9yZGVycyl9XG4gICAgICA+XG5cbiAgICAgIDwvQWNjb3JkaW9uPlxuICAgICl9XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50T3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Account/AccountOrders.js\n");

/***/ })

})