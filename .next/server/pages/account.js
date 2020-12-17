module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account/AccountHeader.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Account/AccountHeader.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction AccountHeader({\n  role,\n  email,\n  createdAt,\n  name\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n    secondary: true,\n    inverted: true,\n    color: \"violet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n    color: \"teal\",\n    size: \"large\",\n    ribbon: true,\n    icon: \"privacy\",\n    style: {\n      textTansformation: 'capitalize'\n    },\n    content: role,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    inverted: true,\n    textAlign: \"center\",\n    as: \"h1\",\n    icon: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"user\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), name, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"].Subheader, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"].Subheader, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"Joined at \", createdAt))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnQvQWNjb3VudEhlYWRlci5qcz82MWM1Il0sIm5hbWVzIjpbIkFjY291bnRIZWFkZXIiLCJyb2xlIiwiZW1haWwiLCJjcmVhdGVkQXQiLCJuYW1lIiwidGV4dFRhbnNmb3JtYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0EsU0FBU0EsYUFBVCxDQUF1QjtBQUFDQyxNQUFEO0FBQU9DLE9BQVA7QUFBY0MsV0FBZDtBQUF5QkM7QUFBekIsQ0FBdkIsRUFBdUQ7QUFDckQsU0FBTyxtRUFDTCxNQUFDLHlEQUFEO0FBQVMsYUFBUyxNQUFsQjtBQUFtQixZQUFRLE1BQTNCO0FBQTRCLFNBQUssRUFBQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxVQUFNLE1BSFI7QUFJRSxRQUFJLEVBQUMsU0FKUDtBQUtFLFNBQUssRUFBRTtBQUFFQyx1QkFBaUIsRUFBRTtBQUFyQixLQUxUO0FBTUUsV0FBTyxFQUFFSixJQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLE1BQWhCO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFvQyxNQUFFLEVBQUMsSUFBdkM7QUFBNEMsUUFBSSxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRyxJQUZILEVBR0UsTUFBQyx3REFBRCxDQUFRLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQkYsS0FBbkIsQ0FIRixFQUlFLE1BQUMsd0RBQUQsQ0FBUSxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTZCQyxTQUE3QixDQUpGLENBVEYsQ0FESyxDQUFQO0FBa0JEOztBQUVjSCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50SGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyLCBJY29uLCBTZWdtZW50LCBMYWJlbCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXG5mdW5jdGlvbiBBY2NvdW50SGVhZGVyKHtyb2xlLCBlbWFpbCwgY3JlYXRlZEF0LCBuYW1lfSkge1xuICByZXR1cm4gPD5cbiAgICA8U2VnbWVudCBzZWNvbmRhcnkgaW52ZXJ0ZWQgY29sb3I9XCJ2aW9sZXRcIj5cbiAgICAgIDxMYWJlbFxuICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICByaWJib25cbiAgICAgICAgaWNvbj1cInByaXZhY3lcIlxuICAgICAgICBzdHlsZT17eyB0ZXh0VGFuc2Zvcm1hdGlvbjogJ2NhcGl0YWxpemUnIH19XG4gICAgICAgIGNvbnRlbnQ9e3JvbGV9XG4gICAgICAvPlxuICAgICAgPEhlYWRlciBpbnZlcnRlZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBhcz1cImgxXCIgaWNvbj5cbiAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiAvPlxuICAgICAgICB7bmFtZX1cbiAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+e2VtYWlsfTwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+Sm9pbmVkIGF0IHtjcmVhdGVkQXR9PC9IZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgPC9IZWFkZXI+ICAgICAgXG4gICAgPC9TZWdtZW50PlxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account/AccountHeader.js\n");

/***/ }),

/***/ "./components/Account/AccountOrders.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountOrders.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Account/AccountOrders.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction AccountOrders({\n  orders\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  function mapOrdersToPanels(orders) {\n    console.log(orders);\n    return orders.map(order => ({\n      key: order.id,\n      title: {\n        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n          color: \"blue\",\n          content: order.createAt,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 18\n          }\n        })\n      },\n      content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Header, {\n        as: \"h3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }\n      }, \"Total: $\", order.total, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        content: order.email,\n        icon: \"mail\",\n        basic: true,\n        horizontal: true,\n        style: {\n          marginLeft: '1rem'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, order.products.map(item => {\n        __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          avatar: true,\n          src: item.mediaUrl,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }\n        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Content, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Header, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }\n        }, item.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Description, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }\n        }, item.quantity, \" . $\", item.product.price)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Content, {\n          floated: \"right\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n          tag: true,\n          color: \"red\",\n          size: \"tiny\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }\n        }, item.product.sku)));\n      })))\n    }));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    as: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"folder open\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), \"Order History\"), orders.length == 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n    inverted: true,\n    tertiary: true,\n    color: \"grey\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    icon: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"copy outline \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }), \"No past orders.\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"orange\",\n    onClick: () => {\n      router.push('/');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"View Products\"))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    fluid: true,\n    styled: true,\n    exclusive: false,\n    panels: mapOrdersToPanels(orders),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountOrders);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnQvQWNjb3VudE9yZGVycy5qcz8wNDBjIl0sIm5hbWVzIjpbIkFjY291bnRPcmRlcnMiLCJvcmRlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXBPcmRlcnNUb1BhbmVscyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlciIsImtleSIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiY3JlYXRlQXQiLCJ0b3RhbCIsImVtYWlsIiwibWFyZ2luTGVmdCIsInByb2R1Y3RzIiwiaXRlbSIsIm1lZGlhVXJsIiwibmFtZSIsInF1YW50aXR5IiwicHJvZHVjdCIsInByaWNlIiwic2t1IiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QjtBQUFDQztBQUFELENBQXZCLEVBQWlDO0FBQy9CLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsaUJBQVQsQ0FBMkJILE1BQTNCLEVBQW1DO0FBQ2pDSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBLFdBQU9BLE1BQU0sQ0FBQ00sR0FBUCxDQUFXQyxLQUFLLEtBQUk7QUFDekJDLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxFQURjO0FBRXpCQyxXQUFLLEVBQUU7QUFDTEMsZUFBTyxFQUFFLE1BQUMsdURBQUQ7QUFBTyxlQUFLLEVBQUMsTUFBYjtBQUFvQixpQkFBTyxFQUFFSixLQUFLLENBQUNLLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUZrQjtBQUt6QkQsYUFBTyxFQUFHLG1FQUNSLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsVUFBRSxFQUFDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1dKLEtBQUssQ0FBQ00sS0FEakIsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsZUFBTyxF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LElBcEJHLENBQVA7QUE4QkQ7O0FBRWNELDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY2NvdW50L0FjY291bnRPcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIsIEFjY29yZGlvbiwgTGFiZWwsIFNlZ21lbnQsIEljb24sIEJ1dHRvbiwgTGlzdCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBBY2NvdW50T3JkZXJzKHtvcmRlcnN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIG1hcE9yZGVyc1RvUGFuZWxzKG9yZGVycykge1xuICAgIGNvbnNvbGUubG9nKG9yZGVycylcbiAgICByZXR1cm4gb3JkZXJzLm1hcChvcmRlcj0+ICh7XG4gICAgICBrZXk6IG9yZGVyLmlkLFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgY29udGVudDogPExhYmVsIGNvbG9yPVwiYmx1ZVwiIGNvbnRlbnQ9e29yZGVyLmNyZWF0ZUF0fSAvPlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICg8PlxuICAgICAgICA8TGlzdC5IZWFkZXIgYXM9XCJoM1wiPlxuICAgICAgICAgIFRvdGFsOiAke29yZGVyLnRvdGFsfVxuICAgICAgICAgIDxMYWJlbCBcbiAgICAgICAgICAgIGNvbnRlbnQ9e29yZGVyLmVtYWlsfSBcbiAgICAgICAgICAgIGljb249XCJtYWlsXCJcbiAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxcmVtJ319ICBcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpc3QuSGVhZGVyPlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7b3JkZXIucHJvZHVjdHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e2l0ZW0ubWVkaWFVcmx9IC8+XG4gICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyPntpdGVtLm5hbWV9PC9MaXN0LkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TGlzdC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSAuICR7aXRlbS5wcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIDwvTGlzdC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+IFxuICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0YWcgY29sb3I9XCJyZWRcIiBzaXplPVwidGlueVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5za3V9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC8+KVxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIDw+XG4gICAgPEhlYWRlciBhcz1cImgyXCI+XG4gICAgICA8SWNvbiBuYW1lPVwiZm9sZGVyIG9wZW5cIiAvPlxuICAgICAgT3JkZXIgSGlzdG9yeVxuICAgIDwvSGVhZGVyPlxuICAgIHtvcmRlcnMubGVuZ3RoID09IDAgPyhcbiAgICAgIDxTZWdtZW50IGludmVydGVkIHRlcnRpYXJ5IGNvbG9yPVwiZ3JleVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGVyIGljb24+XG4gICAgICAgICAgPEljb24gbmFtZT1cImNvcHkgb3V0bGluZSBcIiAvPlxuICAgICAgICAgIE5vIHBhc3Qgb3JkZXJzLlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwib3JhbmdlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgVmlldyBQcm9kdWN0c1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VnbWVudD5cbiAgICApIDogKFxuICAgICAgPEFjY29yZGlvbiBcbiAgICAgICAgZmx1aWQgXG4gICAgICAgIHN0eWxlZCBcbiAgICAgICAgZXhjbHVzaXZlPXtmYWxzZX1cbiAgICAgICAgcGFuZWxzPXttYXBPcmRlcnNUb1BhbmVscyhvcmRlcnMpfVxuICAgICAgPlxuXG4gICAgICA8L0FjY29yZGlvbj5cbiAgICApfVxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudE9yZGVyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account/AccountOrders.js\n");

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Account/AccountHeader */ \"./components/Account/AccountHeader.js\");\n/* harmony import */ var _components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Account/AccountOrders */ \"./components/Account/AccountOrders.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/catchErrors */ \"./utils/catchErrors.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/pages/account.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nfunction Account({\n  user,\n  orders\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({}, user, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  })), __jsx(_components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    orders: orders,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }));\n}\n\nAccount.getInitialProps = async ctx => {\n  const {\n    reactreserve_token\n  } = Object(nookies__WEBPACK_IMPORTED_MODULE_3__[\"parseCookies\"])(ctx);\n\n  if (!reactreserve_token) {\n    return {\n      orders: []\n    };\n  }\n\n  try {\n    const payload = {\n      headers: {\n        Authorization: reactreserve_token\n      }\n    };\n    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}/api/orders`;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, payload);\n    return {\n      orders: response.data.orders\n    };\n  } catch (error) {\n    console.log(error);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2NvdW50LmpzPzcxZDYiXSwibmFtZXMiOlsiQWNjb3VudCIsInVzZXIiLCJvcmRlcnMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZWFjdHJlc2VydmVfdG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJwYXlsb2FkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJiYXNlVXJsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBakIsRUFBbUM7QUFDakMsU0FBTyxtRUFDTCxNQUFDLHlFQUFELGVBQW1CRCxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREssRUFFTCxNQUFDLHlFQUFEO0FBQWUsVUFBTSxFQUFFQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssQ0FBUDtBQUlEOztBQUVERixPQUFPLENBQUNHLGVBQVIsR0FBMEIsTUFBT0MsR0FBUCxJQUFlO0FBQ3ZDLFFBQU07QUFBRUM7QUFBRixNQUF5QkMsNERBQVksQ0FBQ0YsR0FBRCxDQUEzQzs7QUFDQSxNQUFJLENBQUNDLGtCQUFMLEVBQXlCO0FBQ3ZCLFdBQU87QUFDTEgsWUFBTSxFQUFFO0FBREgsS0FBUDtBQUdEOztBQUNELE1BQUk7QUFDRixVQUFNSyxPQUFPLEdBQUc7QUFBRUMsYUFBTyxFQUFFO0FBQUVDLHFCQUFhLEVBQUVKO0FBQWpCO0FBQVgsS0FBaEI7QUFDQSxVQUFNSyxHQUFHLEdBQUksR0FBRUMsc0RBQVEsYUFBdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVSixHQUFWLEVBQWVILE9BQWYsQ0FBdkI7QUFDQSxXQUFPO0FBQ0xMLFlBQU0sRUFBRVUsUUFBUSxDQUFDRyxJQUFULENBQWNiO0FBRGpCLEtBQVA7QUFHRCxHQVBELENBT0UsT0FBTWMsS0FBTixFQUFhO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixDQWpCRDs7QUFtQmVoQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FjY291bnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY2NvdW50SGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnQvQWNjb3VudEhlYWRlclwiO1xuaW1wb3J0IEFjY291bnRPcmRlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50T3JkZXJzXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICcuLi91dGlscy9jYXRjaEVycm9ycyc7XG5pbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCJcblxuZnVuY3Rpb24gQWNjb3VudCh7IHVzZXIsIG9yZGVycyB9KSB7XG4gIHJldHVybiA8PlxuICAgIDxBY2NvdW50SGVhZGVyIHsuLi51c2VyfSAvPlxuICAgIDxBY2NvdW50T3JkZXJzIG9yZGVycz17b3JkZXJzfSAvPlxuICA8Lz5cbn1cblxuQWNjb3VudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgcmVhY3RyZXNlcnZlX3Rva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KVxuICBpZiAoIXJlYWN0cmVzZXJ2ZV90b2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICBvcmRlcnM6IFtdXG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiByZWFjdHJlc2VydmVfdG9rZW4gfX1cbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvb3JkZXJzYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZClcbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJzOiByZXNwb25zZS5kYXRhLm9yZGVyc1xuICAgIH1cbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst baseUrl = false ? undefined : \"http://localhost:3000\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseUrl);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzP2FlMzMiXSwibmFtZXMiOlsiYmFzZVVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUcsUUFBd0MsU0FBeEMsR0FBNkMsdUJBQTdEO0FBQ2VBLHNFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvYmFzZVVybC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction catchErrors(error, callbackError) {\n  let errorMessage;\n\n  if (error.response) {\n    //the request was made and the server respond with a status code that is not in the range of 2XX\n    errorMessage = error.response.data;\n    console.error(\"Error request\", errorMessage);\n  } else if (error.request) {\n    //the request was made but no responde was receive \n    errorMessage = error.request;\n    console.error(\"Error request\", errorMessage);\n  } else {\n    //something else happend in making the request that triggered an error\n    errorMessage = error.message;\n    console.error(\"Error request\", errorMessage);\n  }\n\n  callbackError(errorMessage);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (catchErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYXRjaEVycm9ycy5qcz9jNTQ1Il0sIm5hbWVzIjpbImNhdGNoRXJyb3JzIiwiZXJyb3IiLCJjYWxsYmFja0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxhQUE1QixFQUEyQztBQUN6QyxNQUFJQyxZQUFKOztBQUNBLE1BQUlGLEtBQUssQ0FBQ0csUUFBVixFQUFvQjtBQUNsQjtBQUNBRCxnQkFBWSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUMsSUFBOUI7QUFDQUMsV0FBTyxDQUFDTCxLQUFSLENBQWMsZUFBZCxFQUErQkUsWUFBL0I7QUFDRCxHQUpELE1BSU8sSUFBSUYsS0FBSyxDQUFDTSxPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FKLGdCQUFZLEdBQUdGLEtBQUssQ0FBQ00sT0FBckI7QUFDQUQsV0FBTyxDQUFDTCxLQUFSLENBQWMsZUFBZCxFQUErQkUsWUFBL0I7QUFDRCxHQUpNLE1BSUE7QUFDTDtBQUNBQSxnQkFBWSxHQUFHRixLQUFLLENBQUNPLE9BQXJCO0FBQ0FGLFdBQU8sQ0FBQ0wsS0FBUixDQUFjLGVBQWQsRUFBK0JFLFlBQS9CO0FBQ0Q7O0FBRURELGVBQWEsQ0FBQ0MsWUFBRCxDQUFiO0FBQ0Q7O0FBRWNILDBFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY2F0Y2hFcnJvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNhdGNoRXJyb3JzKGVycm9yLCBjYWxsYmFja0Vycm9yKSB7XG4gIGxldCBlcnJvck1lc3NhZ2U7XG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgIC8vdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZCB3aXRoIGEgc3RhdHVzIGNvZGUgdGhhdCBpcyBub3QgaW4gdGhlIHJhbmdlIG9mIDJYWFxuICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RcIiwgZXJyb3JNZXNzYWdlKVxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAvL3RoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25kZSB3YXMgcmVjZWl2ZSBcbiAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXF1ZXN0O1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXF1ZXN0XCIsIGVycm9yTWVzc2FnZSlcbiAgfSBlbHNlIHtcbiAgICAvL3NvbWV0aGluZyBlbHNlIGhhcHBlbmQgaW4gbWFraW5nIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIGVycm9yXG4gICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdFwiLCBlcnJvck1lc3NhZ2UpXG4gIH1cblxuICBjYWxsYmFja0Vycm9yKGVycm9yTWVzc2FnZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/catchErrors.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });