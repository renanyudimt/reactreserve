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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/CartItemList.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartItemList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Cart/CartItemList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CartItemList({\n  products = [],\n  user,\n  handleRemoveFromCart,\n  success\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  function mapProductsToItem(products) {\n    return products.map(item => ({\n      childkey: item.product._id,\n      header: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Item\"].Header, {\n        as: \"a\"\n        /** as anchor tag */\n        ,\n        onClick: () => {\n          router.push(`/product?_id=${item.product._id}`);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 9\n        }\n      }, item.product.name),\n      image: item.product.mediaUrl,\n      meta: `${item.quantity} x $${item.product.price}`,\n      fluid: \"true\",\n      extra: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        basic: true,\n        icon: \"remove\",\n        floated: \"right\",\n        onClick: () => {\n          handleRemoveFromCart(item.product._id);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      })\n    }));\n  }\n\n  if (success) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Message\"], {\n      success: true,\n      header: \"Success!\",\n      content: \"Your order and payment has been accepted\",\n      icon: \"star outline\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }\n    });\n  }\n\n  if (products.length == 0) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n      secondary: true,\n      color: \"teal\",\n      inverted: true,\n      textAlign: \"center\",\n      placeholder: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n      icon: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      name: \"shopping basket\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }), \"No products in your cart. Add some!\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }\n    }, user ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      color: \"orange\",\n      content: \"View products\",\n      onClick: () => {\n        router.push(\"/\");\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      color: \"blue\",\n      content: \"Login and add products\",\n      onClick: () => {\n        router.push(\"/login\");\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }\n    })));\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Item\"].Group, {\n    divided: true,\n    items: mapProductsToItem(products),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItemList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydEl0ZW1MaXN0LmpzP2RlNzYiXSwibmFtZXMiOlsiQ2FydEl0ZW1MaXN0IiwicHJvZHVjdHMiLCJ1c2VyIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJzdWNjZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwUHJvZHVjdHNUb0l0ZW0iLCJtYXAiLCJpdGVtIiwiY2hpbGRrZXkiLCJwcm9kdWN0IiwiX2lkIiwiaGVhZGVyIiwicHVzaCIsIm5hbWUiLCJpbWFnZSIsIm1lZGlhVXJsIiwibWV0YSIsInF1YW50aXR5IiwicHJpY2UiLCJmbHVpZCIsImV4dHJhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDLFVBQVEsR0FBRyxFQUFiO0FBQWlCQyxNQUFqQjtBQUF1QkMsc0JBQXZCO0FBQTZDQztBQUE3QyxDQUF0QixFQUE4RTtBQUM1RSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLGlCQUFULENBQTJCTixRQUEzQixFQUFxQztBQUNuQyxXQUFPQSxRQUFRLENBQUNPLEdBQVQsQ0FBY0MsSUFBSSxLQUFLO0FBQzVCQyxjQUFRLEVBQUVELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxHQURLO0FBRTVCQyxZQUFNLEVBQ0osTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxVQUFFLEVBQUM7QUFBRztBQUFuQjtBQUF3QyxlQUFPLEVBQUUsTUFBTTtBQUNyRFIsZ0JBQU0sQ0FBQ1MsSUFBUCxDQUFhLGdCQUFlTCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsR0FBSSxFQUE3QztBQUNELFNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdJSCxJQUFJLENBQUNFLE9BQUwsQ0FBYUksSUFIakIsQ0FIMEI7QUFTNUJDLFdBQUssRUFBRVAsSUFBSSxDQUFDRSxPQUFMLENBQWFNLFFBVFE7QUFVNUJDLFVBQUksRUFBRyxHQUFFVCxJQUFJLENBQUNVLFFBQVMsT0FBTVYsSUFBSSxDQUFDRSxPQUFMLENBQWFTLEtBQU0sRUFWcEI7QUFXNUJDLFdBQUssRUFBRSxNQVhxQjtBQVk1QkMsV0FBSyxFQUNILE1BQUMsd0RBQUQ7QUFDRSxhQUFLLE1BRFA7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGVBQU8sRUFBQyxPQUhWO0FBSUUsZUFBTyxFQUFFLE1BQU07QUFBRW5CLDhCQUFvQixDQUFDTSxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsR0FBZCxDQUFwQjtBQUF3QyxTQUozRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYjBCLEtBQUwsQ0FBbEIsQ0FBUDtBQXFCRDs7QUFFRCxNQUFJUixPQUFKLEVBQWE7QUFDWCxXQUNFLE1BQUMseURBQUQ7QUFDRSxhQUFPLE1BRFQ7QUFFRSxZQUFNLEVBQUMsVUFGVDtBQUdFLGFBQU8sRUFBQywwQ0FIVjtBQUlFLFVBQUksRUFBQyxjQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVFEOztBQUVELE1BQUlILFFBQVEsQ0FBQ3NCLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsV0FDRSxNQUFDLHlEQUFEO0FBQVMsZUFBUyxNQUFsQjtBQUFtQixXQUFLLEVBQUMsTUFBekI7QUFBZ0MsY0FBUSxNQUF4QztBQUF5QyxlQUFTLEVBQUMsUUFBbkQ7QUFBNEQsaUJBQVcsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBUSxVQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsc0RBQUQ7QUFBTSxVQUFJLEVBQUMsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLHdDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLckIsSUFBSSxHQUNILE1BQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUF1QixhQUFPLEVBQUMsZUFBL0I7QUFBK0MsYUFBTyxFQUFHLE1BQU07QUFBQ0csY0FBTSxDQUFDUyxJQUFQLENBQVksR0FBWjtBQUFpQixPQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREcsR0FHSCxNQUFDLHdEQUFEO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFBcUIsYUFBTyxFQUFDLHdCQUE3QjtBQUFzRCxhQUFPLEVBQUUsTUFBTTtBQUFFVCxjQUFNLENBQUNTLElBQVAsQ0FBWSxRQUFaO0FBQXVCLE9BQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKTixDQUxGLENBREY7QUFnQkQ7O0FBQ0QsU0FDRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLFdBQU8sTUFBbkI7QUFBb0IsU0FBSyxFQUFFUCxpQkFBaUIsQ0FBQ04sUUFBRCxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRDs7QUFFY0QsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQvQ2FydEl0ZW1MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyLCBTZWdtZW50LCBCdXR0b24sIEljb24sIEl0ZW0sIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZnVuY3Rpb24gQ2FydEl0ZW1MaXN0KHsgcHJvZHVjdHMgPSBbXSwgdXNlciwgaGFuZGxlUmVtb3ZlRnJvbUNhcnQsIHN1Y2Nlc3MgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBtYXBQcm9kdWN0c1RvSXRlbShwcm9kdWN0cykge1xuICAgIHJldHVybiBwcm9kdWN0cy5tYXAoIGl0ZW0gPT4gKHtcbiAgICAgIGNoaWxka2V5OiBpdGVtLnByb2R1Y3QuX2lkLFxuICAgICAgaGVhZGVyOiAoXG4gICAgICAgIDxJdGVtLkhlYWRlciBhcz1cImFcIi8qKiBhcyBhbmNob3IgdGFnICovIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3Q/X2lkPSR7aXRlbS5wcm9kdWN0Ll9pZH1gKVxuICAgICAgICB9fT4gXG4gICAgICAgICAgeyBpdGVtLnByb2R1Y3QubmFtZSB9IFxuICAgICAgICA8L0l0ZW0uSGVhZGVyPlxuICAgICAgKSxcbiAgICAgIGltYWdlOiBpdGVtLnByb2R1Y3QubWVkaWFVcmwsXG4gICAgICBtZXRhOiBgJHtpdGVtLnF1YW50aXR5fSB4ICQke2l0ZW0ucHJvZHVjdC5wcmljZX1gLFxuICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxuICAgICAgZXh0cmE6IChcbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICBiYXNpY1xuICAgICAgICAgIGljb249XCJyZW1vdmVcIlxuICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBoYW5kbGVSZW1vdmVGcm9tQ2FydChpdGVtLnByb2R1Y3QuX2lkKSB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pKVxuICB9XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lc3NhZ2UgXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgaGVhZGVyPVwiU3VjY2VzcyFcIlxuICAgICAgICBjb250ZW50PVwiWW91ciBvcmRlciBhbmQgcGF5bWVudCBoYXMgYmVlbiBhY2NlcHRlZFwiXG4gICAgICAgIGljb249XCJzdGFyIG91dGxpbmVcIlxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAocHJvZHVjdHMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGludmVydGVkIHRleHRBbGlnbj1cImNlbnRlclwiIHBsYWNlaG9sZGVyPlxuICAgICAgICA8SGVhZGVyIGljb24+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNob3BwaW5nIGJhc2tldFwiIC8+XG4gICAgICAgICAgTm8gcHJvZHVjdHMgaW4geW91ciBjYXJ0LiBBZGQgc29tZSFcbiAgICAgICAgPC9IZWFkZXI+IFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgIHVzZXIgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJvcmFuZ2VcIiBjb250ZW50PVwiVmlldyBwcm9kdWN0c1wiIG9uQ2xpY2s9eyAoKSA9PiB7cm91dGVyLnB1c2goXCIvXCIpfSB9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIGNvbnRlbnQ9XCJMb2dpbiBhbmQgYWRkIHByb2R1Y3RzXCIgb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaChcIi9sb2dpblwiKSB9fSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPEl0ZW0uR3JvdXAgZGl2aWRlZCBpdGVtcz17bWFwUHJvZHVjdHNUb0l0ZW0ocHJvZHVjdHMpfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart/CartItemList.js\n");

/***/ }),

/***/ "./components/Cart/CartSummary.js":
/*!****************************************!*\
  !*** ./components/Cart/CartSummary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateCartTotal */ \"./utils/calculateCartTotal.js\");\n/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stripe-checkout */ \"react-stripe-checkout\");\n/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Cart/CartSummary.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction CartSummary({\n  products,\n  handleCheckout,\n  success\n}) {\n  const {\n    0: cartAmount,\n    1: setCartAmount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: stripeAmount,\n    1: setStripeAmount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: isCartEmpty,\n    1: setCartEmpty\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  console.log(products);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    const {\n      cartTotal,\n      stripeTotal\n    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(products);\n    setCartEmpty(products.length == 0);\n    setCartAmount(cartTotal);\n    setStripeAmount(stripeTotal);\n  }, [products]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"Divider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"Segment\"], {\n    clearing: true,\n    size: \"large\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Sub total: \"), \" $\", cartAmount, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    name: \"React Reserve\",\n    amount: stripeAmount,\n    image: products.length > 0 ? products[0].product.mediaUrl : \"\",\n    currency: \"USD\",\n    shippingAddress: true,\n    zipCode: true,\n    token: handleCheckout,\n    triggerEvent: \"onClick\",\n    stripeKey: \"pk_test_51Hy6iuKI6qQv71tkbUEjLkkX9eY8H29vB3GSRn2Vd1Pv6j22NJUwQ1bTN1qHMLbfi4WDGwYEP55DfBa6rAXax3od00ga8x4JWU\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    disabled: isCartEmpty || success,\n    icon: \"cart\",\n    color: \"teal\",\n    floated: \"right\",\n    content: \"Checkout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFN1bW1hcnkuanM/NDk3ZiJdLCJuYW1lcyI6WyJDYXJ0U3VtbWFyeSIsInByb2R1Y3RzIiwiaGFuZGxlQ2hlY2tvdXQiLCJzdWNjZXNzIiwiY2FydEFtb3VudCIsInNldENhcnRBbW91bnQiLCJ1c2VTdGF0ZSIsInN0cmlwZUFtb3VudCIsInNldFN0cmlwZUFtb3VudCIsImlzQ2FydEVtcHR5Iiwic2V0Q2FydEVtcHR5IiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiY2FydFRvdGFsIiwic3RyaXBlVG90YWwiLCJjYWxjdWxhdGVDYXJ0VG90YWwiLCJsZW5ndGgiLCJwcm9kdWN0IiwibWVkaWFVcmwiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQyxVQUFGO0FBQVlDLGdCQUFaO0FBQTRCQztBQUE1QixDQUFyQixFQUE0RDtBQUMxRCxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQThCSixzREFBUSxDQUFDLElBQUQsQ0FBNUM7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVo7QUFFQVksOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ3BCLFVBQU07QUFBRUMsZUFBRjtBQUFhQztBQUFiLFFBQTZCQyx5RUFBa0IsQ0FBQ2hCLFFBQUQsQ0FBckQ7QUFDQVMsZ0JBQVksQ0FBQ1QsUUFBUSxDQUFDaUIsTUFBVCxJQUFtQixDQUFwQixDQUFaO0FBQ0FiLGlCQUFhLENBQUNVLFNBQUQsQ0FBYjtBQUNBUCxtQkFBZSxDQUFDUSxXQUFELENBQWY7QUFFRCxHQU5ELEVBTUcsQ0FBQ2YsUUFBRCxDQU5IO0FBUUEsU0FDQSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMseURBQUQ7QUFBUyxZQUFRLE1BQWpCO0FBQWtCLFFBQUksRUFBQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixRQUNrQ0csVUFEbEMsRUFFRSxNQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFDLGVBRFA7QUFFRSxVQUFNLEVBQUVHLFlBRlY7QUFHRSxTQUFLLEVBQUVOLFFBQVEsQ0FBQ2lCLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0JqQixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlrQixPQUFaLENBQW9CQyxRQUExQyxHQUFxRCxFQUg5RDtBQUlFLFlBQVEsRUFBQyxLQUpYO0FBS0UsbUJBQWUsRUFBRSxJQUxuQjtBQU1FLFdBQU8sRUFBRSxJQU5YO0FBT0UsU0FBSyxFQUFFbEIsY0FQVDtBQVFFLGdCQUFZLEVBQUMsU0FSZjtBQVNFLGFBQVMsRUFBRW1CLDZHQVRiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFWixXQUFXLElBQUlOLE9BQWpDO0FBQTJDLFFBQUksRUFBQyxNQUFoRDtBQUF1RCxTQUFLLEVBQUMsTUFBN0Q7QUFBb0UsV0FBTyxFQUFDLE9BQTVFO0FBQW9GLFdBQU8sRUFBQyxVQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FGRixDQUZGLENBREE7QUFxQkQ7O0FBRWNILDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0L0NhcnRTdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNhbGN1bGF0ZUNhcnRUb3RhbCBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlQ2FydFRvdGFsXCI7XG5pbXBvcnQgU3RyaXBlQ2hlY2tvdXQgZnJvbSBcInJlYWN0LXN0cmlwZS1jaGVja291dFwiXG5cbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KHsgcHJvZHVjdHMsIGhhbmRsZUNoZWNrb3V0LCBzdWNjZXNzIH0pIHtcbiAgY29uc3QgW2NhcnRBbW91bnQsIHNldENhcnRBbW91bnRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3N0cmlwZUFtb3VudCwgc2V0U3RyaXBlQW1vdW50XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc0NhcnRFbXB0eSwgc2V0Q2FydEVtcHR5XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjYXJ0VG90YWwsIHN0cmlwZVRvdGFsIH0gPSBjYWxjdWxhdGVDYXJ0VG90YWwocHJvZHVjdHMpXG4gICAgc2V0Q2FydEVtcHR5KHByb2R1Y3RzLmxlbmd0aCA9PSAwKVxuICAgIHNldENhcnRBbW91bnQoY2FydFRvdGFsKVxuICAgIHNldFN0cmlwZUFtb3VudChzdHJpcGVUb3RhbClcblxuICB9LCBbcHJvZHVjdHNdKVxuICBcbiAgcmV0dXJuIChcbiAgPD4gXG4gICAgPERpdmlkZXIgLz5cbiAgICA8U2VnbWVudCBjbGVhcmluZyBzaXplPVwibGFyZ2VcIj5cbiAgICAgIDxzdHJvbmc+U3ViIHRvdGFsOiA8L3N0cm9uZz4gJHsgY2FydEFtb3VudCB9XG4gICAgICA8U3RyaXBlQ2hlY2tvdXQgXG4gICAgICAgIG5hbWU9XCJSZWFjdCBSZXNlcnZlXCJcbiAgICAgICAgYW1vdW50PXtzdHJpcGVBbW91bnR9XG4gICAgICAgIGltYWdlPXtwcm9kdWN0cy5sZW5ndGggPiAwID8gcHJvZHVjdHNbMF0ucHJvZHVjdC5tZWRpYVVybCA6IFwiXCJ9XG4gICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgc2hpcHBpbmdBZGRyZXNzPXt0cnVlfVxuICAgICAgICB6aXBDb2RlPXt0cnVlfVxuICAgICAgICB0b2tlbj17aGFuZGxlQ2hlY2tvdXR9XG4gICAgICAgIHRyaWdnZXJFdmVudD1cIm9uQ2xpY2tcIlxuICAgICAgICBzdHJpcGVLZXk9e3Byb2Nlc3MuZW52LlNUUklQRV9QVUJMSVNIX0tFWX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNDYXJ0RW1wdHkgfHwgc3VjY2Vzc30gIGljb249XCJjYXJ0XCIgY29sb3I9XCJ0ZWFsXCIgZmxvYXRlZD1cInJpZ2h0XCIgY29udGVudD1cIkNoZWNrb3V0XCIgLz5cbiAgICAgIDwvU3RyaXBlQ2hlY2tvdXQ+XG4gICAgPC9TZWdtZW50PlxuICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U3VtbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart/CartSummary.js\n");

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart/CartItemList */ \"./components/Cart/CartItemList.js\");\n/* harmony import */ var _components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart/CartSummary */ \"./components/Cart/CartSummary.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/catchErrors */ \"./utils/catchErrors.js\");\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/pages/cart.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Cart({\n  products,\n  user\n}) {\n  const {\n    0: cartProducts,\n    1: setCartProducts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(products.cart || []);\n  const {\n    0: success,\n    1: setSuccess\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  async function handleRemoveFromCart(productId) {\n    try {\n      setLoading(true);\n      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}/api/cart`;\n      const reactreserve_token = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"reactreserve_token\");\n      const payload = {\n        params: {\n          productId\n        },\n        headers: {\n          Authorization: reactreserve_token\n        }\n      };\n      await axios__WEBPACK_IMPORTED_MODULE_6___default.a.delete(url, payload) //delete e diferente de put os parametros\n      .then(response => setCartProducts(response.data.products));\n    } catch (error) {\n      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(error, window.alert);\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  async function handleCheckout(paymentData) {\n    console.log(paymentData);\n\n    try {\n      setLoading(true);\n      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}/api/checkout`;\n      const reactreserve_token = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"reactreserve_token\");\n      const payload = {\n        paymentData: paymentData\n      };\n      const headers = {\n        headers: {\n          Authorization: reactreserve_token\n        }\n      };\n      await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, payload, headers);\n      setSuccess(true);\n    } catch (error) {\n      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(error, window.alert);\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n    loading: loading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    handleRemoveFromCart: handleRemoveFromCart,\n    user: user,\n    products: cartProducts,\n    success: success,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    handleCheckout: handleCheckout,\n    products: cartProducts,\n    success: success,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }));\n}\n\nCart.getInitialProps = async ctx => {\n  const {\n    reactreserve_token\n  } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__[\"parseCookies\"])(ctx);\n\n  if (!reactreserve_token) {\n    return {\n      products: []\n    };\n  } else {\n    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}/api/cart`;\n    const payload = {\n      headers: {\n        Authorization: reactreserve_token\n      }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url, payload);\n    return {\n      products: response.data\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0LmpzPzYxMDMiXSwibmFtZXMiOlsiQ2FydCIsInByb2R1Y3RzIiwidXNlciIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsInVzZVN0YXRlIiwiY2FydCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsInByb2R1Y3RJZCIsInVybCIsImJhc2VVcmwiLCJyZWFjdHJlc2VydmVfdG9rZW4iLCJjb29raWUiLCJnZXQiLCJwYXlsb2FkIiwicGFyYW1zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJheGlvcyIsImRlbGV0ZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNhdGNoRXJyb3JzIiwid2luZG93IiwiYWxlcnQiLCJoYW5kbGVDaGVja291dCIsInBheW1lbnREYXRhIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQWQsRUFBa0M7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxDQUFDSixRQUFRLENBQUNLLElBQVQsSUFBaUIsRUFBbEIsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JILHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkwsc0RBQVEsQ0FBQyxLQUFELENBQXRDOztBQUVBLGlCQUFlTSxvQkFBZixDQUFvQ0MsU0FBcEMsRUFB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QUF2QjtBQUNBLFdBQU87QUFDTGpCLGNBQVEsRUFBRXdCLFFBQVEsQ0FBQ0M7QUFEZCxLQUFQO0FBR0Q7QUFDRixDQWREOztBQWdCZTFCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IENhcnRJdGVtTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0L0NhcnRJdGVtTGlzdFwiXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0U3VtbWFyeVwiXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuLi91dGlscy9jYXRjaEVycm9yc1wiO1xuXG5cbmZ1bmN0aW9uIENhcnQoeyBwcm9kdWN0cywgdXNlciB9KSB7ICBcbiAgY29uc3QgW2NhcnRQcm9kdWN0cywgc2V0Q2FydFByb2R1Y3RzXSA9IHVzZVN0YXRlKHByb2R1Y3RzLmNhcnQgfHwgW10pXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlRnJvbUNhcnQocHJvZHVjdElkKSB7XG4gICAgdHJ5IHsgXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gICAgICBjb25zdCByZWFjdHJlc2VydmVfdG9rZW4gPSBjb29raWUuZ2V0KFwicmVhY3RyZXNlcnZlX3Rva2VuXCIpXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBwYXJhbXM6IHsgcHJvZHVjdElkIH0sXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogcmVhY3RyZXNlcnZlX3Rva2VuIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIHBheWxvYWQpIC8vZGVsZXRlIGUgZGlmZXJlbnRlIGRlIHB1dCBvcyBwYXJhbWV0cm9zXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldENhcnRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKSlcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBjYXRjaEVycm9ycyhlcnJvciwgd2luZG93LmFsZXJ0KVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrb3V0KHBheW1lbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2cocGF5bWVudERhdGEpXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9jaGVja291dGBcbiAgICAgIGNvbnN0IHJlYWN0cmVzZXJ2ZV90b2tlbiA9IGNvb2tpZS5nZXQoXCJyZWFjdHJlc2VydmVfdG9rZW5cIilcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7IHBheW1lbnREYXRhOiBwYXltZW50RGF0YSB9XG4gICAgICBjb25zdCBoZWFkZXJzID0geyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHJlYWN0cmVzZXJ2ZV90b2tlbiB9fVxuICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQsIGhlYWRlcnMpXG4gICAgICBzZXRTdWNjZXNzKHRydWUpXG4gICAgICBcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBjYXRjaEVycm9ycyhlcnJvciwgd2luZG93LmFsZXJ0KVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnQgbG9hZGluZz17bG9hZGluZ30+XG4gICAgICA8Q2FydEl0ZW1MaXN0IFxuICAgICAgICBoYW5kbGVSZW1vdmVGcm9tQ2FydD17aGFuZGxlUmVtb3ZlRnJvbUNhcnR9IFxuICAgICAgICB1c2VyPXsgdXNlciB9IFxuICAgICAgICBwcm9kdWN0cz17IGNhcnRQcm9kdWN0cyB9XG4gICAgICAgIHN1Y2Nlc3M9e3N1Y2Nlc3N9XG4gICAgICAvPlxuICAgICAgPENhcnRTdW1tYXJ5IFxuICAgICAgICBoYW5kbGVDaGVja291dD17aGFuZGxlQ2hlY2tvdXR9IFxuICAgICAgICBwcm9kdWN0cz17IGNhcnRQcm9kdWN0cyB9IFxuICAgICAgICBzdWNjZXNzPXtzdWNjZXNzfVxuICAgICAgLz5cbiAgICA8L1NlZ21lbnQ+XG4gIClcbn1cblxuQ2FydC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgcmVhY3RyZXNlcnZlX3Rva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcbiAgaWYgKCFyZWFjdHJlc2VydmVfdG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdHM6IFtdXG4gICAgfVxuICB9IGVsc2UgeyBcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiByZWFjdHJlc2VydmVfdG9rZW4gfX1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHBheWxvYWQpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3RzOiByZXNwb25zZS5kYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

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

/***/ "./utils/calculateCartTotal.js":
/*!*************************************!*\
  !*** ./utils/calculateCartTotal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction calculateCartTotal(products) {\n  const total = products.reduce((accumulator, element) => {\n    accumulator += element.product.price * element.quantity;\n    return accumulator;\n  }, 0); //default value do acumulador, 0.\n\n  const cartTotal = (total * 100 / 100).toFixed(2);\n  const stripeTotal = Number((total * 100).toFixed(2)); //em cents\n\n  return {\n    cartTotal,\n    stripeTotal\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateCartTotal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYWxjdWxhdGVDYXJ0VG90YWwuanM/ZGY3YiJdLCJuYW1lcyI6WyJjYWxjdWxhdGVDYXJ0VG90YWwiLCJwcm9kdWN0cyIsInRvdGFsIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJlbGVtZW50IiwicHJvZHVjdCIsInByaWNlIiwicXVhbnRpdHkiLCJjYXJ0VG90YWwiLCJ0b0ZpeGVkIiwic3RyaXBlVG90YWwiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsU0FBU0Esa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFFBQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxNQUFULENBQWdCLENBQUNDLFdBQUQsRUFBY0MsT0FBZCxLQUEwQjtBQUN0REQsZUFBVyxJQUFJQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCRixPQUFPLENBQUNHLFFBQS9DO0FBQ0EsV0FBT0osV0FBUDtBQUNELEdBSGEsRUFHWCxDQUhXLENBQWQsQ0FEb0MsQ0FJOUI7O0FBRU4sUUFBTUssU0FBUyxHQUFHLENBQUVQLEtBQUssR0FBRyxHQUFULEdBQWdCLEdBQWpCLEVBQXNCUSxPQUF0QixDQUE4QixDQUE5QixDQUFsQjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDLENBQUNWLEtBQUssR0FBRyxHQUFULEVBQWNRLE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUExQixDQVBvQyxDQU9pQjs7QUFFckQsU0FBTztBQUNMRCxhQURLO0FBRUxFO0FBRkssR0FBUDtBQUlEOztBQUVjWCxpRkFBZiIsImZpbGUiOiIuL3V0aWxzL2NhbGN1bGF0ZUNhcnRUb3RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNhbGN1bGF0ZUNhcnRUb3RhbChwcm9kdWN0cykge1xuICBjb25zdCB0b3RhbCA9IHByb2R1Y3RzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGVsZW1lbnQpID0+IHtcbiAgICBhY2N1bXVsYXRvciArPSBlbGVtZW50LnByb2R1Y3QucHJpY2UgKiBlbGVtZW50LnF1YW50aXR5XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yXG4gIH0sIDApIC8vZGVmYXVsdCB2YWx1ZSBkbyBhY3VtdWxhZG9yLCAwLlxuXG4gIGNvbnN0IGNhcnRUb3RhbCA9ICgodG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpXG4gIGNvbnN0IHN0cmlwZVRvdGFsID0gTnVtYmVyKCh0b3RhbCAqIDEwMCkudG9GaXhlZCgyKSkgLy9lbSBjZW50c1xuXG4gIHJldHVybiB7IFxuICAgIGNhcnRUb3RhbCxcbiAgICBzdHJpcGVUb3RhbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZUNhcnRUb3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/calculateCartTotal.js\n");

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

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-stripe-checkout\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdHJpcGUtY2hlY2tvdXRcIj9iMTllIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN0cmlwZS1jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0cmlwZS1jaGVja291dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-stripe-checkout\n");

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