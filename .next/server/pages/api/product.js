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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"shortid\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  String,\n  Number\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  sku: {\n    type: String,\n    unique: true,\n    default: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),\n    required: false\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  mediaUrl: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Product\", ProductSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvUHJvZHVjdC5qcz8xMDEyIl0sIm5hbWVzIjpbIlN0cmluZyIsIk51bWJlciIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHlwZXMiLCJQcm9kdWN0U2NoZW1hIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInByaWNlIiwic2t1IiwidW5pcXVlIiwiZGVmYXVsdCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImRlc2NyaXB0aW9uIiwibWVkaWFVcmwiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTtBQUFFQSxRQUFGO0FBQVVDO0FBQVYsSUFBcUJDLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQTNDO0FBRUEsTUFBTUMsYUFBYSxHQUFHLElBQUlILCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDeENHLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUVQLE1BREY7QUFFSlEsWUFBUSxFQUFFO0FBRk4sR0FEa0M7QUFLeENDLE9BQUssRUFBRTtBQUNMRixRQUFJLEVBQUVOLE1BREQ7QUFFTE8sWUFBUSxFQUFFO0FBRkwsR0FMaUM7QUFTeENFLEtBQUcsRUFBRTtBQUNISCxRQUFJLEVBQUVQLE1BREg7QUFFSFcsVUFBTSxFQUFFLElBRkw7QUFHSEMsV0FBTyxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBSE47QUFJSE4sWUFBUSxFQUFFO0FBSlAsR0FUbUM7QUFleENPLGFBQVcsRUFBRTtBQUNYUixRQUFJLEVBQUVQLE1BREs7QUFFWFEsWUFBUSxFQUFFO0FBRkMsR0FmMkI7QUFtQnhDUSxVQUFRLEVBQUU7QUFDUlQsUUFBSSxFQUFFUCxNQURFO0FBRVJRLFlBQVEsRUFBRTtBQUZGO0FBbkI4QixDQUFwQixDQUF0QjtBQXlCZU4sOEdBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsT0FBaEIsSUFBMkJoQiwrQ0FBUSxDQUFDaUIsS0FBVCxDQUFlLFNBQWYsRUFBMEJkLGFBQTFCLENBQTFDIiwiZmlsZSI6Ii4vbW9kZWxzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xuXG5jb25zdCB7IFN0cmluZywgTnVtYmVyIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNrdToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgZGVmYXVsdDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIG1lZGlhVXJsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Product.js\n");

/***/ }),

/***/ "./pages/api/product.js":
/*!******************************!*\
  !*** ./pages/api/product.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ \"./models/Product.js\");\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      await handleGetRequest(req, res);\n      break;\n\n    case \"POST\":\n      await handlePostRequest(req, res);\n      break;\n\n    case \"DELETE\":\n      await handleDeleteRequest(req, res);\n      break;\n\n    case \"PUT\":\n      await handlePutRequest(req, res);\n      break;\n\n    default:\n      res.status(405).send(`Method ${req.method} not allowed`);\n      break;\n  }\n});\n\nasync function handleGetRequest(req, res) {\n  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    _id: req.query.id\n  });\n\n  if (res.status(200)) {\n    res.json({\n      success: true,\n      product: product\n    });\n  } else {\n    res.json({\n      success: false,\n      msg: \"Product loading error\",\n      code: res.statusCode\n    });\n  }\n}\n\nasync function handlePostRequest(req, res) {\n  try {\n    const {\n      name,\n      price,\n      description,\n      mediaUrl\n    } = req.body;\n\n    if (!name || !price || !description || !mediaUrl) {\n      return res.status(422).json({\n        success: false,\n        msg: \"Product missing one or more fields\"\n      });\n    }\n\n    await new _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      name,\n      price,\n      description,\n      mediaUrl\n    }).save();\n\n    if (res.statusCode == 200) {\n      res.send(201).json({\n        success: true\n      });\n    } else {\n      res.send(res.statusCode).json({\n        success: false,\n        err_code: res.statusCode\n      });\n    }\n  } catch (error) {\n    res.status(500).send(\"Server error in creating\");\n  }\n}\n\nasync function handleDeleteRequest(req, res) {\n  await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: req.query.id\n  });\n\n  if (res.status(204)) {\n    res.json({});\n  }\n}\n\nasync function handlePutRequest(req, res) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC5qcz8yOGQxIl0sIm5hbWVzIjpbImNvbm5lY3REYiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhhbmRsZUdldFJlcXVlc3QiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImhhbmRsZURlbGV0ZVJlcXVlc3QiLCJoYW5kbGVQdXRSZXF1ZXN0Iiwic3RhdHVzIiwic2VuZCIsInByb2R1Y3QiLCJQcm9kdWN0IiwiZmluZE9uZSIsIl9pZCIsInF1ZXJ5IiwiaWQiLCJqc29uIiwic3VjY2VzcyIsIm1zZyIsImNvZGUiLCJzdGF0dXNDb2RlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJtZWRpYVVybCIsImJvZHkiLCJzYXZlIiwiZXJyX2NvZGUiLCJlcnJvciIsImZpbmRPbmVBbmREZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsZ0VBQVM7QUFFTSxzRUFBTUMsR0FBTixFQUFXQyxHQUFYLEtBQW1CO0FBQ2hDLFVBQU9ELEdBQUcsQ0FBQ0UsTUFBWDtBQUNFLFNBQUssS0FBTDtBQUNFLFlBQU1DLGdCQUFnQixDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBdEI7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRSxZQUFNRyxpQkFBaUIsQ0FBQ0osR0FBRCxFQUFNQyxHQUFOLENBQXZCO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsWUFBTUksbUJBQW1CLENBQUNMLEdBQUQsRUFBTUMsR0FBTixDQUF6QjtBQUNBOztBQUNGLFNBQUssS0FBTDtBQUNFLFlBQU1LLGdCQUFnQixDQUFDTixHQUFELEVBQU1DLEdBQU4sQ0FBdEI7QUFDQTs7QUFDRjtBQUNFQSxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixVQUFTUixHQUFHLENBQUNFLE1BQU8sY0FBMUM7QUFDQTtBQWZKO0FBaUJELENBbEJEOztBQW9CQSxlQUFlQyxnQkFBZixDQUFnQ0gsR0FBaEMsRUFBcUNDLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQU1RLE9BQU8sR0FBRyxNQUFNQyx1REFBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVDLE9BQUcsRUFBRVosR0FBRyxDQUFDYSxLQUFKLENBQVVDO0FBQWpCLEdBQWhCLENBQXRCOztBQUNBLE1BQUliLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsQ0FBSixFQUFxQjtBQUNuQk4sT0FBRyxDQUFDYyxJQUFKLENBQVM7QUFBRUMsYUFBTyxFQUFFLElBQVg7QUFBaUJQLGFBQU8sRUFBRUE7QUFBMUIsS0FBVDtBQUNELEdBRkQsTUFFTztBQUNMUixPQUFHLENBQUNjLElBQUosQ0FBUztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsU0FBRyxFQUFFLHVCQUF2QjtBQUFnREMsVUFBSSxFQUFFakIsR0FBRyxDQUFDa0I7QUFBMUQsS0FBVDtBQUNEO0FBQ0Y7O0FBRUQsZUFBZWYsaUJBQWYsQ0FBaUNKLEdBQWpDLEVBQXNDQyxHQUF0QyxFQUEyQztBQUN6QyxNQUFJO0FBQ0YsVUFBTTtBQUFFbUIsVUFBRjtBQUFRQyxXQUFSO0FBQWVDLGlCQUFmO0FBQTRCQztBQUE1QixRQUF5Q3ZCLEdBQUcsQ0FBQ3dCLElBQW5EOztBQUNBLFFBQUksQ0FBQ0osSUFBRCxJQUFTLENBQUNDLEtBQVYsSUFBbUIsQ0FBQ0MsV0FBcEIsSUFBbUMsQ0FBQ0MsUUFBeEMsRUFBa0Q7QUFDaEQsYUFBT3RCLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JRLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxXQUFHLEVBQUU7QUFBdkIsT0FBckIsQ0FBUDtBQUNEOztBQUVELFVBQU0sSUFBSVAsdURBQUosQ0FBWTtBQUNoQlUsVUFEZ0I7QUFFaEJDLFdBRmdCO0FBR2hCQyxpQkFIZ0I7QUFJaEJDO0FBSmdCLEtBQVosRUFLSEUsSUFMRyxFQUFOOztBQU9BLFFBQUl4QixHQUFHLENBQUNrQixVQUFKLElBQWtCLEdBQXRCLEVBQTJCO0FBQ3pCbEIsU0FBRyxDQUFDTyxJQUFKLENBQVMsR0FBVCxFQUFjTyxJQUFkLENBQW1CO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xmLFNBQUcsQ0FBQ08sSUFBSixDQUFTUCxHQUFHLENBQUNrQixVQUFiLEVBQXlCSixJQUF6QixDQUE4QjtBQUFFQyxlQUFPLEVBQUUsS0FBWDtBQUFrQlUsZ0JBQVEsRUFBRXpCLEdBQUcsQ0FBQ2tCO0FBQWhDLE9BQTlCO0FBQ0Q7QUFFRixHQW5CRCxDQW1CRSxPQUFNUSxLQUFOLEVBQWE7QUFDYjFCLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDBCQUFyQjtBQUNEO0FBRUY7O0FBRUQsZUFBZUgsbUJBQWYsQ0FBbUNMLEdBQW5DLEVBQXdDQyxHQUF4QyxFQUE2QztBQUMzQyxRQUFNUyx1REFBTyxDQUFDa0IsZ0JBQVIsQ0FBeUI7QUFBRWhCLE9BQUcsRUFBRVosR0FBRyxDQUFDYSxLQUFKLENBQVVDO0FBQWpCLEdBQXpCLENBQU47O0FBQ0EsTUFBSWIsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxDQUFKLEVBQXFCO0FBQ25CTixPQUFHLENBQUNjLElBQUosQ0FBUyxFQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlVCxnQkFBZixDQUFnQ04sR0FBaEMsRUFBcUNDLEdBQXJDLEVBQTBDLENBRXpDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL3V0aWxzL2Nvbm5lY3REYlwiO1xuXG5jb25uZWN0RGIoKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gIHN3aXRjaChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgYXdhaXQgaGFuZGxlR2V0UmVxdWVzdChyZXEsIHJlcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgYXdhaXQgaGFuZGxlUG9zdFJlcXVlc3QocmVxLCByZXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkRFTEVURVwiOlxuICAgICAgYXdhaXQgaGFuZGxlRGVsZXRlUmVxdWVzdChyZXEsIHJlcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICBhd2FpdCBoYW5kbGVQdXRSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldFJlcXVlc3QocmVxLCByZXMpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZE9uZSh7IF9pZDogcmVxLnF1ZXJ5LmlkIH0pO1xuICBpZiAocmVzLnN0YXR1cygyMDApKSB7XG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0OiBwcm9kdWN0IH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJQcm9kdWN0IGxvYWRpbmcgZXJyb3JcIiwgY29kZTogcmVzLnN0YXR1c0NvZGUgfSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUG9zdFJlcXVlc3QocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgbWVkaWFVcmwgfSA9IHJlcS5ib2R5XG4gICAgaWYgKCFuYW1lIHx8ICFwcmljZSB8fCAhZGVzY3JpcHRpb24gfHwgIW1lZGlhVXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlByb2R1Y3QgbWlzc2luZyBvbmUgb3IgbW9yZSBmaWVsZHNcIiB9KTtcbiAgICB9XG4gIFxuICAgIGF3YWl0IG5ldyBQcm9kdWN0KHtcbiAgICAgIG5hbWUsIFxuICAgICAgcHJpY2UsIFxuICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgbWVkaWFVcmxcbiAgICB9KS5zYXZlKClcblxuICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgIHJlcy5zZW5kKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmQocmVzLnN0YXR1c0NvZGUpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyX2NvZGU6IHJlcy5zdGF0dXNDb2RlIH0pXG4gICAgfVxuICAgIFxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJTZXJ2ZXIgZXJyb3IgaW4gY3JlYXRpbmdcIik7XG4gIH1cbiBcbn0gXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVJlcXVlc3QocmVxLCByZXMpIHtcbiAgYXdhaXQgUHJvZHVjdC5maW5kT25lQW5kRGVsZXRlKHsgX2lkOiByZXEucXVlcnkuaWQgfSk7XG4gIGlmIChyZXMuc3RhdHVzKDIwNCkpIHtcbiAgICByZXMuanNvbih7fSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQdXRSZXF1ZXN0KHJlcSwgcmVzKSB7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/product.js\n");

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCI/YmVlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzaG9ydGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shortid\n");

/***/ })

/******/ });