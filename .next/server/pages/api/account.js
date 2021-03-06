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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  String\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true,\n    select: false //password will not be provided when we find for a user\n\n  },\n  role: {\n    type: String,\n    required: true,\n    default: 'user',\n    enum: [\"user\", \"admin\", \"root\"]\n  }\n}, {\n  timestamps: true //irá pegar o create date e update date de tudo\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema)); //usa um existe um cria outro//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvVXNlci5qcz8zYTIwIl0sIm5hbWVzIjpbIlN0cmluZyIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHlwZXMiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJzZWxlY3QiLCJyb2xlIiwiZGVmYXVsdCIsImVudW0iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFhQywrQ0FBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFuQztBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJSCwrQ0FBUSxDQUFDQyxNQUFiLENBQW9CO0FBQ3JDRyxNQUFJLEVBQUU7QUFDSkMsUUFBSSxFQUFFTixNQURGO0FBRUpPLFlBQVEsRUFBRTtBQUZOLEdBRCtCO0FBS3JDQyxPQUFLLEVBQUU7QUFDTEYsUUFBSSxFQUFFTixNQUREO0FBRUxPLFlBQVEsRUFBRSxJQUZMO0FBR0xFLFVBQU0sRUFBRTtBQUhILEdBTDhCO0FBVXJDQyxVQUFRLEVBQUU7QUFDUkosUUFBSSxFQUFFTixNQURFO0FBRVJPLFlBQVEsRUFBRSxJQUZGO0FBR1JJLFVBQU0sRUFBRSxLQUhBLENBR007O0FBSE4sR0FWMkI7QUFlckNDLE1BQUksRUFBRTtBQUNKTixRQUFJLEVBQUVOLE1BREY7QUFFSk8sWUFBUSxFQUFFLElBRk47QUFHSk0sV0FBTyxFQUFFLE1BSEw7QUFJSkMsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsTUFBbEI7QUFKRjtBQWYrQixDQUFwQixFQXFCaEI7QUFDREMsWUFBVSxFQUFFLElBRFgsQ0FDZ0I7O0FBRGhCLENBckJnQixDQUFuQjtBQXlCZWQsOEdBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsSUFBaEIsSUFBd0JoQiwrQ0FBUSxDQUFDaUIsS0FBVCxDQUFlLE1BQWYsRUFBdUJkLFVBQXZCLENBQXZDLEUsQ0FBMEUiLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBtb25nbyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB7IFN0cmluZyB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsIFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBzZWxlY3Q6IGZhbHNlIC8vcGFzc3dvcmQgd2lsbCBub3QgYmUgcHJvdmlkZWQgd2hlbiB3ZSBmaW5kIGZvciBhIHVzZXJcbiAgfSxcbiAgcm9sZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiAndXNlcicsXG4gICAgZW51bTogW1widXNlclwiLCBcImFkbWluXCIsIFwicm9vdFwiXVxuICB9XG59LCB7XG4gIHRpbWVzdGFtcHM6IHRydWUgLy9pcsOhIHBlZ2FyIG8gY3JlYXRlIGRhdGUgZSB1cGRhdGUgZGF0ZSBkZSB0dWRvXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSkgLy91c2EgdW0gZXhpc3RlIHVtIGNyaWEgb3V0cm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/account.js":
/*!******************************!*\
  !*** ./pages/api/account.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/User */ \"./models/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nasync function handlePutRequest(req, res) {\n  const {\n    _id,\n    role\n  } = req.body;\n  const filter = {\n    _id\n  };\n  const udpate = {\n    role\n  };\n  await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate(filter, udpate);\n  res.status(203).json({\n    success: \"true\",\n    msg: \"User updated\"\n  });\n}\n\nasync function handleGetRequest(req, res) {\n  if (!(\"authorization\" in req.headers)) {\n    return res.status(401).send(\"No authorization token\");\n  }\n\n  try {\n    const {\n      userId\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(req.headers.authorization, \"asd234flapj234ksdh1flçka234jsd\");\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      _id: userId\n    });\n\n    if (user) {\n      res.status(200).json({\n        success: true,\n        user: user\n      });\n    } else {\n      res.status(404).json({\n        success: false,\n        msg: \"User not found\"\n      });\n    }\n  } catch (error) {\n    res.status(403).json({\n      success: false,\n      msg: \"Invalid token\"\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      await handleGetRequest(req, res);\n      break;\n\n    case \"PUT\":\n      await handlePutRequest(req, res);\n      break;\n\n    default:\n      res.status(405).send(`Method ${req.method} not allowed`);\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWNjb3VudC5qcz9kM2Q3Il0sIm5hbWVzIjpbImNvbm5lY3REYiIsImhhbmRsZVB1dFJlcXVlc3QiLCJyZXEiLCJyZXMiLCJfaWQiLCJyb2xlIiwiYm9keSIsImZpbHRlciIsInVkcGF0ZSIsIlVzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJoYW5kbGVHZXRSZXF1ZXN0IiwiaGVhZGVycyIsInNlbmQiLCJ1c2VySWQiLCJqd3QiLCJ2ZXJpZnkiLCJhdXRob3JpemF0aW9uIiwicHJvY2VzcyIsInVzZXIiLCJmaW5kT25lIiwiZXJyb3IiLCJtZXRob2QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0VBQVM7O0FBRVQsZUFBZUMsZ0JBQWYsQ0FBZ0NDLEdBQWhDLEVBQXFDQyxHQUFyQyxFQUEwQztBQUN4QyxRQUFNO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxNQUFpQkgsR0FBRyxDQUFDSSxJQUEzQjtBQUNBLFFBQU1DLE1BQU0sR0FBRztBQUFFSDtBQUFGLEdBQWY7QUFDQSxRQUFNSSxNQUFNLEdBQUc7QUFBRUg7QUFBRixHQUFmO0FBQ0EsUUFBTUksb0RBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0JILE1BQXRCLEVBQThCQyxNQUE5QixDQUFOO0FBQ0FMLEtBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRSxNQUFYO0FBQW1CQyxPQUFHLEVBQUU7QUFBeEIsR0FBckI7QUFDRDs7QUFFRCxlQUFlQyxnQkFBZixDQUFnQ2IsR0FBaEMsRUFBcUNDLEdBQXJDLEVBQTBDO0FBQ3hDLE1BQUksRUFBRSxtQkFBbUJELEdBQUcsQ0FBQ2MsT0FBekIsQ0FBSixFQUF1QztBQUNyQyxXQUFPYixHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCTSxJQUFoQixDQUFxQix3QkFBckIsQ0FBUDtBQUNEOztBQUVELE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBYUMsbURBQUcsQ0FBQ0MsTUFBSixDQUFXbEIsR0FBRyxDQUFDYyxPQUFKLENBQVlLLGFBQXZCLEVBQXNDQyxnQ0FBdEMsQ0FBbkI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTWQsb0RBQUksQ0FBQ2UsT0FBTCxDQUFhO0FBQUVwQixTQUFHLEVBQUVjO0FBQVAsS0FBYixDQUFuQjs7QUFFQSxRQUFJSyxJQUFKLEVBQVU7QUFDUnBCLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCVSxZQUFJLEVBQUVBO0FBQXZCLE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xwQixTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUUsS0FBWDtBQUFrQkMsV0FBRyxFQUFFO0FBQXZCLE9BQXJCO0FBQ0Q7QUFFRCxHQVZGLENBVUcsT0FBTVcsS0FBTixFQUFhO0FBQ2R0QixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFYyxzRUFBT1osR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFVBQU9ELEdBQUcsQ0FBQ3dCLE1BQVg7QUFDRSxTQUFLLEtBQUw7QUFDRSxZQUFNWCxnQkFBZ0IsQ0FBQ2IsR0FBRCxFQUFNQyxHQUFOLENBQXRCO0FBQ0E7O0FBRUYsU0FBSyxLQUFMO0FBQ0UsWUFBTUYsZ0JBQWdCLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUF0QjtBQUNBOztBQUVGO0FBQ0VBLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JNLElBQWhCLENBQXNCLFVBQVNmLEdBQUcsQ0FBQ3dCLE1BQU8sY0FBMUM7QUFDQTtBQVhKO0FBY0QsQ0FmRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hY2NvdW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL3V0aWxzL2Nvbm5lY3REYlwiO1xuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gXCJub29raWVzXCJcblxuY29ubmVjdERiKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVB1dFJlcXVlc3QocmVxLCByZXMpIHtcbiAgY29uc3QgeyBfaWQsIHJvbGUgfSAgPSByZXEuYm9keTtcbiAgY29uc3QgZmlsdGVyID0geyBfaWQgfVxuICBjb25zdCB1ZHBhdGUgPSB7IHJvbGUgfVxuICBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoZmlsdGVyLCB1ZHBhdGUpXG4gIHJlcy5zdGF0dXMoMjAzKS5qc29uKHsgc3VjY2VzczogXCJ0cnVlXCIsIG1zZzogXCJVc2VyIHVwZGF0ZWRcIn0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldFJlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKCEoXCJhdXRob3JpemF0aW9uXCIgaW4gcmVxLmhlYWRlcnMpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKFwiTm8gYXV0aG9yaXphdGlvbiB0b2tlblwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGp3dC52ZXJpZnkocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgX2lkOiB1c2VySWQgfSlcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHVzZXI6IHVzZXIgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgbm90IGZvdW5kXCIgfSlcbiAgICB9XG5cbiAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiSW52YWxpZCB0b2tlblwiIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHN3aXRjaChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgYXdhaXQgaGFuZGxlR2V0UmVxdWVzdChyZXEsIHJlcyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJQVVRcIjpcbiAgICAgIGF3YWl0IGhhbmRsZVB1dFJlcXVlc3QocmVxLCByZXMpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYClcbiAgICAgIGJyZWFrO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/account.js\n");

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

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ })

/******/ });