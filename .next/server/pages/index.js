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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Index/ProductList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.mediaUrl,\n      color: 'teal',\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`,\n      meta: `$${product.price}`\n    }));\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Group, {\n    stackable: true,\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProductsToItems(products),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzPzY1ZDciXSwibmFtZXMiOlsiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsIm1hcFByb2R1Y3RzVG9JdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJoZWFkZXIiLCJuYW1lIiwiaW1hZ2UiLCJtZWRpYVVybCIsImNvbG9yIiwiZmx1aWQiLCJjaGlsZEtleSIsIl9pZCIsImhyZWYiLCJtZXRhIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFDQztBQUFELENBQXJCLEVBQWlDO0FBQy9CLFdBQVNDLGtCQUFULENBQTRCRCxRQUE1QixFQUFzQztBQUNwQyxXQUFPQSxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsT0FBTyxLQUFLO0FBQzlCQyxZQUFNLEVBQUVELE9BQU8sQ0FBQ0UsSUFEYztBQUU5QkMsV0FBSyxFQUFFSCxPQUFPLENBQUNJLFFBRmU7QUFHOUJDLFdBQUssRUFBRSxNQUh1QjtBQUk5QkMsV0FBSyxFQUFFLElBSnVCO0FBSzlCQyxjQUFRLEVBQUVQLE9BQU8sQ0FBQ1EsR0FMWTtBQU05QkMsVUFBSSxFQUFHLGdCQUFlVCxPQUFPLENBQUNRLEdBQUksRUFOSjtBQU85QkUsVUFBSSxFQUFHLElBQUdWLE9BQU8sQ0FBQ1csS0FBTTtBQVBNLEtBQUwsQ0FBcEIsQ0FBUDtBQVNEOztBQUVELFNBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLE1BQXJCO0FBQXNCLGVBQVcsRUFBQyxHQUFsQztBQUFzQyxZQUFRLE1BQTlDO0FBQStDLFNBQUssRUFBRWIsa0JBQWtCLENBQUNELFFBQUQsQ0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0Q7O0FBRWNELDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZHVjdExpc3Qoe3Byb2R1Y3RzfSkge1xuICBmdW5jdGlvbiBtYXBQcm9kdWN0c1RvSXRlbXMocHJvZHVjdHMpIHtcbiAgICByZXR1cm4gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgIGhlYWRlcjogcHJvZHVjdC5uYW1lLFxuICAgICAgaW1hZ2U6IHByb2R1Y3QubWVkaWFVcmwsXG4gICAgICBjb2xvcjogJ3RlYWwnLFxuICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICBjaGlsZEtleTogcHJvZHVjdC5faWQsXG4gICAgICBocmVmOiBgL3Byb2R1Y3Q/X2lkPSR7cHJvZHVjdC5faWR9YCxcbiAgICAgIG1ldGE6IGAkJHtwcm9kdWN0LnByaWNlfWBcbiAgICB9KSlcbiAgfVxuXG4gIHJldHVybiA8Q2FyZC5Hcm91cCBzdGFja2FibGUgaXRlbXNQZXJSb3c9XCIzXCIgY2VudGVyZWQgaXRlbXM9e21hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cyl9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./components/Index/ProductPagination.js":
/*!***********************************************!*\
  !*** ./components/Index/ProductPagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/components/Index/ProductPagination.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction ProductPagination({\n  totalPages\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    textAlign: \"center\",\n    style: {\n      margin: \"2rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    defaultActivePage: 1,\n    totalPages: totalPages,\n    onPageChange: (event, data) => {\n      data.activePage == 1 ? router.push('/') : router.push(`/?page=${data.activePage}`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPagination);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RQYWdpbmF0aW9uLmpzP2VmMTAiXSwibmFtZXMiOlsiUHJvZHVjdFBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFyZ2luIiwiZXZlbnQiLCJkYXRhIiwiYWN0aXZlUGFnZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCO0FBQUNDO0FBQUQsQ0FBM0IsRUFBeUM7QUFDdkMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQU8sbUVBQ0wsTUFBQywyREFBRDtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUE4QixTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxxQkFBaUIsRUFBRSxDQURyQjtBQUVFLGNBQVUsRUFBRUgsVUFGZDtBQUdFLGdCQUFZLEVBQUUsQ0FBQ0ksS0FBRCxFQUFRQyxJQUFSLEtBQWlCO0FBQzdCQSxVQUFJLENBQUNDLFVBQUwsSUFBbUIsQ0FBbkIsR0FBdUJMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVosQ0FBdkIsR0FBMENOLE1BQU0sQ0FBQ00sSUFBUCxDQUFhLFVBQVNGLElBQUksQ0FBQ0MsVUFBVyxFQUF0QyxDQUExQztBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREssQ0FBUDtBQVdEOztBQUVjUCxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdFBhZ2luYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZnVuY3Rpb24gUHJvZHVjdFBhZ2luYXRpb24oe3RvdGFsUGFnZXN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyBcblxuICByZXR1cm4gPD5cbiAgICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7bWFyZ2luOiBcIjJyZW1cIn19PlxuICAgICAgPFBhZ2luYXRpb24gIFxuICAgICAgICBkZWZhdWx0QWN0aXZlUGFnZT17MX1cbiAgICAgICAgdG90YWxQYWdlcz17dG90YWxQYWdlc31cbiAgICAgICAgb25QYWdlQ2hhbmdlPXsoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICBkYXRhLmFjdGl2ZVBhZ2UgPT0gMSA/IHJvdXRlci5wdXNoKCcvJykgOiByb3V0ZXIucHVzaChgLz9wYWdlPSR7ZGF0YS5hY3RpdmVQYWdlfWApXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2luYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Index/ProductPagination.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\n/* harmony import */ var _components_Index_ProductPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/ProductPagination */ \"./components/Index/ProductPagination.js\");\nvar _jsxFileName = \"/Users/renanyudi/Sites/estudos/react-app/react-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n //Com useEffect() buscamos dados no client side, \n//mas com getStaticProps fazemos um pre-carregamento,\n//deixando mais rapido, use issae é so exportar a funcao que ja funciona.\n\n\n\n\nfunction Home(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    products: props.products,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }), __jsx(_components_Index_ProductPagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    totalPages: props.totalPages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }));\n}\n\nHome.getInitialProps = async ctx => {\n  const page = ctx.query.page ? ctx.query.page : \"1\";\n  const size = 9;\n  const payload = {\n    params: {\n      page: page,\n      size: size\n    }\n  };\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}/api/products`; // fetch data on server\n\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, payload); // return response data as an object\n\n  return {\n    products: response.data.products,\n    totalPages: response.data.totalPages\n  }; // note: this object will be merged with existing props\n};\n/* export async function getServerSideProps(context) {\n  const url = `${baseUrl}/api/products`;\n  let data = {};\n  // fetch data on server\n  const response = await axios.get(url);\n  if (response.data.success) {\n    return {\n      props: {\n        products: response.data.products\n      } // will be passed to the page component as props\n    }\n  } else {\n    return {\n      props: {}\n    }\n  }\n} */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInByb2R1Y3RzIiwidG90YWxQYWdlcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhZ2UiLCJxdWVyeSIsInNpemUiLCJwYXlsb2FkIiwicGFyYW1zIiwidXJsIiwiYmFzZVVybCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFNBQU8sbUVBQ0wsTUFBQyxxRUFBRDtBQUFhLFlBQVEsRUFBRUEsS0FBSyxDQUFDQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFFTCxNQUFDLDJFQUFEO0FBQW1CLGNBQVUsRUFBRUQsS0FBSyxDQUFDRSxVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssQ0FBUDtBQUlEOztBQUVESCxJQUFJLENBQUNJLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ3BDLFFBQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELElBQVYsR0FBaUJELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxJQUEzQixHQUFrQyxHQUEvQztBQUNBLFFBQU1FLElBQUksR0FBRyxDQUFiO0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFVBQU0sRUFBRTtBQUNOSixVQUFJLEVBQUVBLElBREE7QUFFTkUsVUFBSSxFQUFFQTtBQUZBO0FBRE0sR0FBaEI7QUFNQSxRQUFNRyxHQUFHLEdBQUksR0FBRUMsc0RBQVEsZUFBdkIsQ0FUb0MsQ0FVcEM7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUosR0FBVixFQUFlRixPQUFmLENBQXZCLENBWG9DLENBWXBDOztBQUNBLFNBQU87QUFBRVAsWUFBUSxFQUFFVyxRQUFRLENBQUNHLElBQVQsQ0FBY2QsUUFBMUI7QUFBb0NDLGNBQVUsRUFBRVUsUUFBUSxDQUFDRyxJQUFULENBQWNiO0FBQTlELEdBQVAsQ0Fib0MsQ0FjcEM7QUFDRCxDQWZEO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlSCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcblxuLy9Db20gdXNlRWZmZWN0KCkgYnVzY2Ftb3MgZGFkb3Mgbm8gY2xpZW50IHNpZGUsIFxuLy9tYXMgY29tIGdldFN0YXRpY1Byb3BzIGZhemVtb3MgdW0gcHJlLWNhcnJlZ2FtZW50byxcbi8vZGVpeGFuZG8gbWFpcyByYXBpZG8sIHVzZSBpc3NhZSDDqSBzbyBleHBvcnRhciBhIGZ1bmNhbyBxdWUgamEgZnVuY2lvbmEuXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdExpc3RcIjtcbmltcG9ydCBQcm9kdWN0UGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0UGFnaW5hdGlvblwiXG5cbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgcmV0dXJuIDw+XG4gICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9wcy5wcm9kdWN0c30gLz5cbiAgICA8UHJvZHVjdFBhZ2luYXRpb24gdG90YWxQYWdlcz17cHJvcHMudG90YWxQYWdlc30gLz5cbiAgPC8+XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBwYWdlID0gY3R4LnF1ZXJ5LnBhZ2UgPyBjdHgucXVlcnkucGFnZSA6IFwiMVwiO1xuICBjb25zdCBzaXplID0gOVxuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIHBhcmFtczoge1xuICAgICAgcGFnZTogcGFnZSxcbiAgICAgIHNpemU6IHNpemUsXG4gICAgfVxuICB9XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9wcm9kdWN0c2A7XG4gIC8vIGZldGNoIGRhdGEgb24gc2VydmVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZCk7XG4gIC8vIHJldHVybiByZXNwb25zZSBkYXRhIGFzIGFuIG9iamVjdFxuICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YS5wcm9kdWN0cywgdG90YWxQYWdlczogcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzfTtcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBwcm9wc1xufTtcbiBcblxuLyogZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9wcm9kdWN0c2A7XG4gIGxldCBkYXRhID0ge307XG4gIC8vIGZldGNoIGRhdGEgb24gc2VydmVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGEucHJvZHVjdHNcbiAgICAgIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge31cbiAgICB9XG4gIH1cbn0gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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