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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/cart.js");
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

/***/ "./pages/api/cart.js":
/*!***************************!*\
  !*** ./pages/api/cart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Cart */ \"./models/Cart.js\");\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n\n\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst {\n  ObjectId\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types;\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      handleGetRequest(req, res);\n      break;\n\n    case \"PUT\":\n      handlePutRequest(req, res);\n      break;\n\n    case \"DELETE\":\n      handleDeleteRequest(req, res);\n      break;\n\n    default:\n      res.status(405).send(`Method ${req.method} not allowed`);\n      break;\n  }\n});\n\nasync function handleDeleteRequest(req, res) {\n  if (!(\"authorization\" in req.headers)) {\n    return res.status(401).json({\n      success: false,\n      msg: \"No authorization token\"\n    });\n  }\n\n  try {\n    const {\n      productId\n    } = req.query;\n    const {\n      userId\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(req.headers.authorization, \"asd234flapj234ksdh1flçka234jsd\");\n    const filter = {\n      user: userId\n    };\n    const update = {\n      $pull: {\n        products: {\n          product: productId\n        }\n      }\n    };\n    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate(filter, update, {\n      new: true\n    }).populate({\n      path: \"products.product\",\n      model: \"Product\"\n    });\n    res.status(200).json({\n      success: true,\n      products: cart.products\n    });\n  } catch (error) {\n    console.log(\"error delete\", error);\n    res.status(403).send(\"Please, login again.\");\n  }\n}\n\nasync function handlePutRequest(req, res) {\n  if (!(\"authorization\" in req.headers)) {\n    return res.status(401).json({\n      success: false,\n      msg: \"No authorization token\"\n    });\n  }\n\n  try {\n    const {\n      quantity,\n      productId\n    } = req.body;\n    const {\n      userId\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(req.headers.authorization, \"asd234flapj234ksdh1flçka234jsd\"); //get user cart based on userId\n\n    const filer = {\n      user: userId\n    };\n    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne(filer); //check if product already exist\n\n    const productExist = cart.products.some(doc => ObjectId(productId).equals(doc.product)); //verifica se pelo menos 1 existe e retorna true\n    //if so, increment quantity,\n\n    if (productExist) {\n      const filter = {\n        _id: cart._id,\n        \"products.product\": productId\n      };\n      const update = {\n        $inc: {\n          \"products.$.quantity\": quantity\n        }\n      };\n      const response = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate(filter, update);\n\n      if (response) {\n        res.status(200).json({\n          success: true,\n          msg: \"Product updated successfully\"\n        });\n      } else {\n        res.status(403).send(\"Add product fail\");\n      } //if not, add new product with quantity\n\n    } else {\n      const newProduct = {\n        quantity,\n        product: productId\n      };\n      const filter = {\n        _id: cart._id\n      };\n      const update = {\n        $addToSet: {\n          products: newProduct\n        }\n      };\n      const response = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate(filter, update);\n\n      if (response) {\n        res.status(200).json({\n          success: true,\n          msg: \"Product updated successfully\"\n        });\n      } else {\n        res.status(403).send(\"Add product fail\");\n      }\n    }\n  } catch (error) {\n    console.log(\"error put\", error);\n    res.status(403).send(\"Please, login again.\");\n  }\n}\n\nasync function handleGetRequest(req, res) {\n  if (!(\"authorization\" in req.headers)) {\n    return res.status(401).json({\n      success: false,\n      msg: \"No authorization token\"\n    });\n  }\n\n  try {\n    const {\n      userId\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(req.headers.authorization, \"asd234flapj234ksdh1flçka234jsd\");\n    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      user: userId\n    }).populate({\n      path: \"products.product\",\n      model: \"Product\"\n    });\n\n    if (res.statusCode == 200) {\n      res.status(200).json({\n        success: true,\n        cart: cart.products\n      });\n    } else {\n      res.status(403).json({\n        success: false,\n        msg: \"Something went wrong.\"\n      });\n    }\n  } catch (error) {\n    console.log(\"error get\", error);\n    res.status(403).json({\n      success: false,\n      msg: \"Please, login again.\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FydC5qcz9iMjdkIl0sIm5hbWVzIjpbImNvbm5lY3REYiIsIk9iamVjdElkIiwibW9uZ29vc2UiLCJUeXBlcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhhbmRsZUdldFJlcXVlc3QiLCJoYW5kbGVQdXRSZXF1ZXN0IiwiaGFuZGxlRGVsZXRlUmVxdWVzdCIsInN0YXR1cyIsInNlbmQiLCJoZWFkZXJzIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJwcm9kdWN0SWQiLCJxdWVyeSIsInVzZXJJZCIsImp3dCIsInZlcmlmeSIsImF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZmlsdGVyIiwidXNlciIsInVwZGF0ZSIsIiRwdWxsIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiY2FydCIsIkNhcnQiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3IiwicG9wdWxhdGUiLCJwYXRoIiwibW9kZWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJxdWFudGl0eSIsImJvZHkiLCJmaWxlciIsImZpbmRPbmUiLCJwcm9kdWN0RXhpc3QiLCJzb21lIiwiZG9jIiwiZXF1YWxzIiwiX2lkIiwiJGluYyIsInJlc3BvbnNlIiwibmV3UHJvZHVjdCIsIiRhZGRUb1NldCIsInN0YXR1c0NvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0VBQVM7QUFDVCxNQUFNO0FBQUVDO0FBQUYsSUFBZUMsK0NBQVEsQ0FBQ0MsS0FBOUI7QUFFZSxzRUFBTUMsR0FBTixFQUFXQyxHQUFYLEtBQW1CO0FBRWhDLFVBQU9ELEdBQUcsQ0FBQ0UsTUFBWDtBQUNFLFNBQUssS0FBTDtBQUNFQyxzQkFBZ0IsQ0FBQ0gsR0FBRCxFQUFNQyxHQUFOLENBQWhCO0FBQ0E7O0FBRUYsU0FBSyxLQUFMO0FBQ0VHLHNCQUFnQixDQUFDSixHQUFELEVBQU1DLEdBQU4sQ0FBaEI7QUFD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Q0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JHLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxXQUFHLEVBQUU7QUFBdkIsT0FBckI7QUFDRDtBQUVGLEdBYkQsQ0FhRSxPQUFNcUIsS0FBTixFQUFhO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLEtBQXpCO0FBQ0EvQixPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCRyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCLEtBQXJCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vLi4vbW9kZWxzL0NhcnRcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL3V0aWxzL2Nvbm5lY3REYlwiO1xuXG5jb25uZWN0RGIoKTtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG5cbiAgc3dpdGNoKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICBoYW5kbGVHZXRSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIlBVVFwiOlxuICAgICAgaGFuZGxlUHV0UmVxdWVzdChyZXEsIHJlcyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIGhhbmRsZURlbGV0ZVJlcXVlc3QocmVxLCByZXMpXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKVxuICAgICAgYnJlYWtcblxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVJlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKCEoXCJhdXRob3JpemF0aW9uXCIgaW4gcmVxLmhlYWRlcnMpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJObyBhdXRob3JpemF0aW9uIHRva2VuXCIgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5xdWVyeTtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gand0LnZlcmlmeShyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgIGNvbnN0IGZpbHRlciA9IHsgdXNlcjogdXNlcklkIH1cbiAgICBjb25zdCB1cGRhdGUgPSB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2R1Y3Q6IHByb2R1Y3RJZCB9fX1cbiAgICBjb25zdCBjYXJ0ID0gYXdhaXQgQ2FydC5maW5kT25lQW5kVXBkYXRlKGZpbHRlciwgdXBkYXRlLCB7IG5ldzogdHJ1ZSB9KS5wb3B1bGF0ZSh7XG4gICAgICBwYXRoOiBcInByb2R1Y3RzLnByb2R1Y3RcIixcbiAgICAgIG1vZGVsOiBcIlByb2R1Y3RcIixcbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0czogY2FydC5wcm9kdWN0c30pXG5cbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZGVsZXRlXCIsIGVycm9yKVxuICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKFwiUGxlYXNlLCBsb2dpbiBhZ2Fpbi5cIilcblxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVB1dFJlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKCEoXCJhdXRob3JpemF0aW9uXCIgaW4gcmVxLmhlYWRlcnMpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJObyBhdXRob3JpemF0aW9uIHRva2VuXCIgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBxdWFudGl0eSwgcHJvZHVjdElkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gand0LnZlcmlmeShyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuXG4gICAgLy9nZXQgdXNlciBjYXJ0IGJhc2VkIG9uIHVzZXJJZFxuICAgIGNvbnN0IGZpbGVyID0geyB1c2VyOiB1c2VySWQgfVxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBDYXJ0LmZpbmRPbmUoZmlsZXIpXG4gICAgLy9jaGVjayBpZiBwcm9kdWN0IGFscmVhZHkgZXhpc3RcbiAgICBjb25zdCBwcm9kdWN0RXhpc3QgPSBjYXJ0LnByb2R1Y3RzLnNvbWUoZG9jID0+IE9iamVjdElkKHByb2R1Y3RJZCkuZXF1YWxzKGRvYy5wcm9kdWN0KSkgLy92ZXJpZmljYSBzZSBwZWxvIG1lbm9zIDEgZXhpc3RlIGUgcmV0b3JuYSB0cnVlXG4gICAgLy9pZiBzbywgaW5jcmVtZW50IHF1YW50aXR5LFxuICAgIGlmIChwcm9kdWN0RXhpc3QpIHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHsgX2lkOiBjYXJ0Ll9pZCwgXCJwcm9kdWN0cy5wcm9kdWN0XCI6IHByb2R1Y3RJZCB9XG4gICAgICBjb25zdCB1cGRhdGUgPSB7ICRpbmM6IHsgXCJwcm9kdWN0cy4kLnF1YW50aXR5XCI6IHF1YW50aXR5IH19XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENhcnQuZmluZE9uZUFuZFVwZGF0ZShmaWx0ZXIsdXBkYXRlKVxuXG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtc2c6IFwiUHJvZHVjdCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMykuc2VuZChcIkFkZCBwcm9kdWN0IGZhaWxcIilcbiAgICAgIH1cblxuICAgIC8vaWYgbm90LCBhZGQgbmV3IHByb2R1Y3Qgd2l0aCBxdWFudGl0eVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdQcm9kdWN0ID0geyBxdWFudGl0eSwgcHJvZHVjdDogcHJvZHVjdElkIH1cbiAgICAgIGNvbnN0IGZpbHRlciA9IHsgX2lkOiBjYXJ0Ll9pZCB9XG4gICAgICBjb25zdCB1cGRhdGUgPSB7ICRhZGRUb1NldDogeyBwcm9kdWN0czogbmV3UHJvZHVjdCB9fVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDYXJ0LmZpbmRPbmVBbmRVcGRhdGUoZmlsdGVyLHVwZGF0ZSlcblxuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlByb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJBZGQgcHJvZHVjdCBmYWlsXCIpXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciBwdXRcIiwgZXJyb3IpXG4gICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJQbGVhc2UsIGxvZ2luIGFnYWluLlwiKVxuICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0UmVxdWVzdChyZXEsIHJlcykge1xuXG4gIGlmICghKFwiYXV0aG9yaXphdGlvblwiIGluIHJlcS5oZWFkZXJzKSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiTm8gYXV0aG9yaXphdGlvbiB0b2tlblwiIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBqd3QudmVyaWZ5KHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IENhcnQuZmluZE9uZSh7IHVzZXI6IHVzZXJJZCB9KS5wb3B1bGF0ZSh7XG4gICAgICBwYXRoOiBcInByb2R1Y3RzLnByb2R1Y3RcIixcbiAgICAgIG1vZGVsOiBcIlByb2R1Y3RcIlxuICAgIH0pXG5cbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgY2FydDogY2FydC5wcm9kdWN0c30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIn0pXG4gICAgfVxuXG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldFwiLCBlcnJvcilcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiUGxlYXNlLCBsb2dpbiBhZ2Fpbi5cIn0pXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/cart.js\n");

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function connectDb() {\n  // Use existing database connection\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState) {\n    return console.log(\"utilizando conexao existente\");\n  } // Use new database connection\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://renanyudi:dlNOe1g6caj42oPo@cluster0.aq1np.mongodb.net/Estudos?retryWrites=true&w=majority\", {\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  }).then(() => {\n    console.log(\"success\");\n  }).catch(error => console.log(error));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDb);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0RGIuanM/YWU3ZCJdLCJuYW1lcyI6WyJjb25uZWN0RGIiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsU0FBZixHQUEyQjtBQUN6QjtBQUNBLE1BQUlDLCtDQUFRLENBQUNDLFVBQVQsQ0FBb0JDLFVBQXhCLEVBQW9DO0FBQ2xDLFdBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLENBQVA7QUFDRCxHQUp3QixDQU16Qjs7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHLE1BQU1MLCtDQUFRLENBQUNNLE9BQVQsQ0FDZkMseUdBRGUsRUFFZjtBQUNFQyxrQkFBYyxFQUFFLElBRGxCO0FBRUVDLG9CQUFnQixFQUFFLEtBRnBCO0FBR0VDLG1CQUFlLEVBQUUsSUFIbkI7QUFJRUMsc0JBQWtCLEVBQUU7QUFKdEIsR0FGZSxFQVNoQkMsSUFUZ0IsQ0FTWCxNQUFNO0FBQ1ZULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRCxHQVhnQixFQVloQlMsS0FaZ0IsQ0FZVkMsS0FBSyxJQUFJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsS0FBWixDQVpDLENBQWpCO0FBY0Q7O0FBRWNmLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY29ubmVjdERiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0RGIoKSB7XG4gIC8vIFVzZSBleGlzdGluZyBkYXRhYmFzZSBjb25uZWN0aW9uXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJ1dGlsaXphbmRvIGNvbmV4YW8gZXhpc3RlbnRlXCIpXG4gIH1cblxuICAvLyBVc2UgbmV3IGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxuICAgIHByb2Nlc3MuZW52Lk1PTkdPX1NSViwgXG4gICAge1xuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsIFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9XG4gIClcbiAgLnRoZW4oKCkgPT4geyBcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIilcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/connectDb.js\n");

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

/***/ })

/******/ });