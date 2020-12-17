module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Cart.js":
/*!************************!*\
  !*** ./models/Cart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  ObjectId,\n  String,\n  Number\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst CartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  user: {\n    type: ObjectId,\n    ref: \"User\" //model name que esta sendo referenciado, no caso, o User. Nota: é melhor referenciar do que criar tudo de novo ne ?\n\n  },\n  products: [{\n    quantity: {\n      default: 1,\n      type: Number\n    },\n    product: {\n      type: ObjectId,\n      ref: \"Product\"\n    }\n  }]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Cart\", CartSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvQ2FydC5qcz80NDhjIl0sIm5hbWVzIjpbIk9iamVjdElkIiwiU3RyaW5nIiwiTnVtYmVyIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJUeXBlcyIsIkNhcnRTY2hlbWEiLCJ1c2VyIiwidHlwZSIsInJlZiIsInByb2R1Y3RzIiwicXVhbnRpdHkiLCJkZWZhdWx0IiwicHJvZHVjdCIsIm1vZGVscyIsIkNhcnQiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNO0FBQUVBLFVBQUY7QUFBWUMsUUFBWjtBQUFvQkM7QUFBcEIsSUFBK0JDLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQXJEO0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlILCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDckNHLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUVSLFFBREY7QUFFSlMsT0FBRyxFQUFFLE1BRkQsQ0FFUzs7QUFGVCxHQUQrQjtBQUtyQ0MsVUFBUSxFQUFFLENBQ1I7QUFDRUMsWUFBUSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxDQUREO0FBRVJKLFVBQUksRUFBRU47QUFGRSxLQURaO0FBS0VXLFdBQU8sRUFBRTtBQUNQTCxVQUFJLEVBQUVSLFFBREM7QUFFUFMsU0FBRyxFQUFFO0FBRkU7QUFMWCxHQURRO0FBTDJCLENBQXBCLENBQW5CO0FBbUJlTiw4R0FBUSxDQUFDVyxNQUFULENBQWdCQyxJQUFoQixJQUF3QlosK0NBQVEsQ0FBQ2EsS0FBVCxDQUFlLE1BQWYsRUFBdUJWLFVBQXZCLENBQXZDIiwiZmlsZSI6Ii4vbW9kZWxzL0NhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgT2JqZWN0SWQsIFN0cmluZywgTnVtYmVyIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXNcblxuY29uc3QgQ2FydFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoeyBcbiAgdXNlcjoge1xuICAgIHR5cGU6IE9iamVjdElkLFxuICAgIHJlZjogXCJVc2VyXCIsIC8vbW9kZWwgbmFtZSBxdWUgZXN0YSBzZW5kbyByZWZlcmVuY2lhZG8sIG5vIGNhc28sIG8gVXNlci4gTm90YTogw6kgbWVsaG9yIHJlZmVyZW5jaWFyIGRvIHF1ZSBjcmlhciB0dWRvIGRlIG5vdm8gbmUgP1xuICB9LFxuICBwcm9kdWN0czogW1xuICAgIHtcbiAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJQcm9kdWN0XCIgXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuQ2FydCB8fCBtb25nb29zZS5tb2RlbChcIkNhcnRcIiwgQ2FydFNjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Cart.js\n");

/***/ }),

/***/ "./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  ObjectId,\n  Number,\n  String\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  userId: {\n    type: ObjectId,\n    ref: \"User\"\n  },\n  products: [{\n    quantity: {\n      type: Number,\n      default: 1\n    },\n    product: {\n      type: ObjectId,\n      ref: \"Product\"\n    }\n  }],\n  email: {\n    type: String,\n    required: true\n  },\n  total: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Order\", OrderSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvT3JkZXIuanM/ODIwOSJdLCJuYW1lcyI6WyJPYmplY3RJZCIsIk51bWJlciIsIlN0cmluZyIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHlwZXMiLCJPcmRlclNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJyZWYiLCJwcm9kdWN0cyIsInF1YW50aXR5IiwiZGVmYXVsdCIsInByb2R1Y3QiLCJlbWFpbCIsInJlcXVpcmVkIiwidG90YWwiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiT3JkZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNO0FBQUVBLFVBQUY7QUFBWUMsUUFBWjtBQUFvQkM7QUFBcEIsSUFBK0JDLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQXJEO0FBRUEsTUFBTUMsV0FBVyxHQUFHLElBQUlILCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDdENHLFFBQU0sRUFBQztBQUNMQyxRQUFJLEVBQUVSLFFBREQ7QUFFTFMsT0FBRyxFQUFFO0FBRkEsR0FEK0I7QUFLdENDLFVBQVEsRUFBRSxDQUNSO0FBQ0VDLFlBQVEsRUFBRTtBQUNSSCxVQUFJLEVBQUVQLE1BREU7QUFFUlcsYUFBTyxFQUFFO0FBRkQsS0FEWjtBQUtFQyxXQUFPLEVBQUU7QUFDUEwsVUFBSSxFQUFFUixRQURDO0FBRVBTLFNBQUcsRUFBRTtBQUZFO0FBTFgsR0FEUSxDQUw0QjtBQWlCdENLLE9BQUssRUFBQztBQUNKTixRQUFJLEVBQUVOLE1BREY7QUFFSmEsWUFBUSxFQUFFO0FBRk4sR0FqQmdDO0FBcUJ0Q0MsT0FBSyxFQUFFO0FBQ0xSLFFBQUksRUFBRVAsTUFERDtBQUVMYyxZQUFRLEVBQUU7QUFGTDtBQXJCK0IsQ0FBcEIsRUF5QmpCO0FBQ0RFLFlBQVUsRUFBRTtBQURYLENBekJpQixDQUFwQjtBQTZCZWQsOEdBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsS0FBaEIsSUFBeUJoQiwrQ0FBUSxDQUFDaUIsS0FBVCxDQUFlLE9BQWYsRUFBd0JkLFdBQXhCLENBQXhDIiwiZmlsZSI6Ii4vbW9kZWxzL09yZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IHsgT2JqZWN0SWQsIE51bWJlciwgU3RyaW5nIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XG5cbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJJZDp7XG4gICAgdHlwZTogT2JqZWN0SWQsXG4gICAgcmVmOiBcIlVzZXJcIlxuICB9LFxuICBwcm9kdWN0czogW1xuICAgIHtcbiAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMVxuICAgICAgfSxcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJQcm9kdWN0XCJcbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIGVtYWlsOntcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRvdGFsOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0gXG59LCB7XG4gIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIE9yZGVyU2NoZW1hKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Order.js\n");

/***/ }),

/***/ "./pages/api/checkout.js":
/*!*******************************!*\
  !*** ./pages/api/checkout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Cart */ \"./models/Cart.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Order */ \"./models/Order.js\");\n/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateCartTotal */ \"./utils/calculateCartTotal.js\");\n\n\n\n\n\n\nconst stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()(\"sk_test_51Hy6iuKI6qQv71tk2KmD4bqUeM0fP72ebstCAYw7ENIVXuiFQmywOv9U7yFC8Ujdam3vHA696ve2q57hNrpAPPOW00E1OgLzFg\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  const {\n    paymentData\n  } = req.body;\n\n  try {\n    //1) Verify and get user from token\n    const {\n      userId\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(req.headers.authorization, \"asd234flapj234ksdh1flçka234jsd\"); //2) Find Cart based on user id, populate it\n\n    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      user: userId\n    }).populate({\n      path: \"products.product\",\n      model: \"Product\"\n    }); //3) Calculate cart totals again from cart products\n\n    const {\n      cartTotal,\n      stripeTotal\n    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cart.products); //4) Get de email from payment data, see if email linked with existing stripe customer \n\n    const previousCustomer = await stripe.customers.list({\n      email: paymentData.email,\n      limit: 1\n    });\n    const isExistingPreviousCustomer = previousCustomer.data.length > 0; //5) if not, create them based on their email\n\n    let newCustomer;\n\n    if (!isExistingPreviousCustomer) {\n      newCustomer = await stripe.customers.create({\n        email: paymentData.eamil,\n        source: paymentData.id\n      });\n    }\n\n    const customer = isExistingPreviousCustomer && previousCustomer.data[0].id || newCustomer.id; //6) Create charge with total, send receipt Email\n\n    await stripe.charges.create({\n      currency: \"USD\",\n      amount: stripeTotal,\n      receipt_email: paymentData.email,\n      customer,\n      description: `Checkout | ${paymentData.email} | ${paymentData.id}`\n    }, {\n      //necessario para verificar se a folha de pagamento,\n      //por qualquer que seja o motivo, nao foi executada mais de 1x, para evitar isso, se colocar uma unique string\n      idempotencyKey: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])()\n    }); //7) Add order data to database \n\n    const order = await new _models_Order__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      userId: userId,\n      email: paymentData.email,\n      total: cartTotal,\n      products: cart.products\n    }).save(); //8) Clear products in cart\n\n    await _models_Cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndUpdate({\n      _id: cart._id\n    }, {\n      $set: {\n        products: []\n      }\n    }); //9) Send back success (200) response\n\n    res.status(200).json({\n      success: true,\n      msg: \"Checkout successful\"\n    });\n  } catch (error) {\n    console.log(\"error\", error);\n    res.status(500).send(\"Error processing charge\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2tvdXQuanM/ZGJmZiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwicmVxIiwicmVzIiwicGF5bWVudERhdGEiLCJib2R5IiwidXNlcklkIiwiand0IiwidmVyaWZ5IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjYXJ0IiwiQ2FydCIsImZpbmRPbmUiLCJ1c2VyIiwicG9wdWxhdGUiLCJwYXRoIiwibW9kZWwiLCJjYXJ0VG90YWwiLCJzdHJpcGVUb3RhbCIsImNhbGN1bGF0ZUNhcnRUb3RhbCIsInByb2R1Y3RzIiwicHJldmlvdXNDdXN0b21lciIsImN1c3RvbWVycyIsImxpc3QiLCJlbWFpbCIsImxpbWl0IiwiaXNFeGlzdGluZ1ByZXZpb3VzQ3VzdG9tZXIiLCJkYXRhIiwibGVuZ3RoIiwibmV3Q3VzdG9tZXIiLCJjcmVhdGUiLCJlYW1pbCIsInNvdXJjZSIsImlkIiwiY3VzdG9tZXIiLCJjaGFyZ2VzIiwiY3VycmVuY3kiLCJhbW91bnQiLCJyZWNlaXB0X2VtYWlsIiwiZGVzY3JpcHRpb24iLCJpZGVtcG90ZW5jeUtleSIsInV1aWR2NCIsIm9yZGVyIiwiT3JkZXIiLCJ0b3RhbCIsInNhdmUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLDZDQUFNLENBQUNDLDZHQUFELENBQXJCO0FBRWUsK0VBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQ3RDLFFBQU07QUFBRUM7QUFBRixNQUFrQkYsR0FBRyxDQUFDRyxJQUE1Qjs7QUFDQSxNQUFJ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Ii4vcGFnZXMvYXBpL2NoZWNrb3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi8uLi9tb2RlbHMvQ2FydFwiXG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4uLy4uL21vZGVscy9PcmRlclwiXG5pbXBvcnQgY2FsY3VsYXRlQ2FydFRvdGFsIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVDYXJ0VG90YWxcIlxuXG5jb25zdCBzdHJpcGUgPSBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgcGF5bWVudERhdGEgfSA9IHJlcS5ib2R5O1xuICB0cnkge1xuICAgIC8vMSkgVmVyaWZ5IGFuZCBnZXQgdXNlciBmcm9tIHRva2VuXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGp3dC52ZXJpZnkocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgICAvLzIpIEZpbmQgQ2FydCBiYXNlZCBvbiB1c2VyIGlkLCBwb3B1bGF0ZSBpdFxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBDYXJ0LmZpbmRPbmUoeyB1c2VyOiB1c2VySWQgfSkucG9wdWxhdGUoe1xuICAgICAgcGF0aDogXCJwcm9kdWN0cy5wcm9kdWN0XCIsXG4gICAgICBtb2RlbDogXCJQcm9kdWN0XCJcbiAgICB9KVxuICAgIC8vMykgQ2FsY3VsYXRlIGNhcnQgdG90YWxzIGFnYWluIGZyb20gY2FydCBwcm9kdWN0c1xuICAgIGNvbnN0IHsgY2FydFRvdGFsLCBzdHJpcGVUb3RhbCB9ID0gY2FsY3VsYXRlQ2FydFRvdGFsKGNhcnQucHJvZHVjdHMpIFxuICAgIC8vNCkgR2V0IGRlIGVtYWlsIGZyb20gcGF5bWVudCBkYXRhLCBzZWUgaWYgZW1haWwgbGlua2VkIHdpdGggZXhpc3Rpbmcgc3RyaXBlIGN1c3RvbWVyIFxuICAgIGNvbnN0IHByZXZpb3VzQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmxpc3Qoe1xuICAgICAgZW1haWw6IHBheW1lbnREYXRhLmVtYWlsLFxuICAgICAgbGltaXQ6IDFcbiAgICB9KVxuICAgIGNvbnN0IGlzRXhpc3RpbmdQcmV2aW91c0N1c3RvbWVyID0gcHJldmlvdXNDdXN0b21lci5kYXRhLmxlbmd0aCA+IDBcbiAgICAvLzUpIGlmIG5vdCwgY3JlYXRlIHRoZW0gYmFzZWQgb24gdGhlaXIgZW1haWxcbiAgICBsZXQgbmV3Q3VzdG9tZXI7XG5cbiAgICBpZiAoIWlzRXhpc3RpbmdQcmV2aW91c0N1c3RvbWVyKSB7XG4gICAgICBuZXdDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgICAgZW1haWw6IHBheW1lbnREYXRhLmVhbWlsLFxuICAgICAgICBzb3VyY2U6IHBheW1lbnREYXRhLmlkXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbWVyID0gKGlzRXhpc3RpbmdQcmV2aW91c0N1c3RvbWVyICYmIHByZXZpb3VzQ3VzdG9tZXIuZGF0YVswXS5pZCkgfHwgbmV3Q3VzdG9tZXIuaWQ7IFxuICAgIFxuICAgIC8vNikgQ3JlYXRlIGNoYXJnZSB3aXRoIHRvdGFsLCBzZW5kIHJlY2VpcHQgRW1haWxcbiAgICBhd2FpdCBzdHJpcGUuY2hhcmdlcy5jcmVhdGUoe1xuICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgICBhbW91bnQ6IHN0cmlwZVRvdGFsLFxuICAgICAgcmVjZWlwdF9lbWFpbDogcGF5bWVudERhdGEuZW1haWwsXG4gICAgICBjdXN0b21lcixcbiAgICAgIGRlc2NyaXB0aW9uOiBgQ2hlY2tvdXQgfCAke3BheW1lbnREYXRhLmVtYWlsfSB8ICR7cGF5bWVudERhdGEuaWR9YCBcbiAgICB9LCB7XG4gICAgICAvL25lY2Vzc2FyaW8gcGFyYSB2ZXJpZmljYXIgc2UgYSBmb2xoYSBkZSBwYWdhbWVudG8sXG4gICAgICAvL3BvciBxdWFscXVlciBxdWUgc2VqYSBvIG1vdGl2bywgbmFvIGZvaSBleGVjdXRhZGEgbWFpcyBkZSAxeCwgcGFyYSBldml0YXIgaXNzbywgc2UgY29sb2NhciB1bWEgdW5pcXVlIHN0cmluZ1xuICAgICAgaWRlbXBvdGVuY3lLZXk6IHV1aWR2NCgpIFxuICAgIH0pXG4gICAgLy83KSBBZGQgb3JkZXIgZGF0YSB0byBkYXRhYmFzZSBcbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IG5ldyBPcmRlcih7XG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIGVtYWlsOiBwYXltZW50RGF0YS5lbWFpbCxcbiAgICAgIHRvdGFsOiBjYXJ0VG90YWwsXG4gICAgICBwcm9kdWN0czogY2FydC5wcm9kdWN0c1xuICAgIH0pLnNhdmUoKVxuXG4gICAgLy84KSBDbGVhciBwcm9kdWN0cyBpbiBjYXJ0XG4gICAgYXdhaXQgQ2FydC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyBfaWQ6IGNhcnQuX2lkIH0sXG4gICAgICB7ICRzZXQ6IHsgcHJvZHVjdHM6IFtdIH19XG4gICAgKVxuICAgIC8vOSkgU2VuZCBiYWNrIHN1Y2Nlc3MgKDIwMCkgcmVzcG9uc2VcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1zZzogXCJDaGVja291dCBzdWNjZXNzZnVsXCJ9KVxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcilcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkVycm9yIHByb2Nlc3NpbmcgY2hhcmdlXCIpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/checkout.js\n");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });