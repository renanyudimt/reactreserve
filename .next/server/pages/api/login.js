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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
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

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ \"./models/User.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n\n  try {\n    //1) Check if user exist\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      email\n    }).select(\"+password\"); //no model, select ta false, entao nao tras, com esse select, vai mostrar se achar um usuario com email tal\n    //2) --if not, return error\n\n    if (!user) {\n      return res.json({\n        success: false,\n        msg: \"User email or password is incorrect\"\n      });\n    } //3) check if users password is correct\n\n\n    const passMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(password, user.password); //comparando os 2 \n    //4) --if so, generate token\n\n    if (passMatch) {\n      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({\n        userId: user._id\n      }, \"asd234flapj234ksdh1flçka234jsd\", {\n        expiresIn: \"7d\"\n      }); //5) send token to client\n\n      return res.status(200).json({\n        success: true,\n        token: token,\n        user: user\n      });\n    } else {\n      return res.status(401).json({\n        success: false,\n        msg: \"User email or password is incorrect\"\n      });\n    }\n  } catch (error) {\n    console.log(error);\n    res.status(500).send(\"Error logging in user\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJuYW1lcyI6WyJjb25uZWN0RGIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJVc2VyIiwiZmluZE9uZSIsInNlbGVjdCIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwicGFzc01hdGNoIiwiYmNyeXB0IiwiY29tcGFyZSIsInRva2VuIiwiand0Iiwic2lnbiIsInVzZXJJZCIsIl9pZCIsInByb2Nlc3MiLCJleHBpcmVzSW4iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQkgsR0FBRyxDQUFDSSxJQUFoQzs7QUFFQSxNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUMsb0RBQUksQ0FBQ0MsT0FBTCxDQUFhO0FBQUVMO0FBQUYsS0FBYixFQUF3Qk0sTUFBeEIsQ0FBK0IsV0FBL0IsQ0FBbkIsQ0FGRSxDQUU2RDtBQUUvRDs7QUFDQSxRQUFJLENBQUNILElBQUwsRUFBVztBQUNULGFBQU9KLEdBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQUVDLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxXQUFHLEVBQUU7QUFBdkIsT0FBVCxDQUFQO0FBQ0QsS0FQQyxDQVNGOzs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUMsNkNBQU0sQ0FBQ0MsT0FBUCxDQUFlWCxRQUFmLEVBQXlCRSxJQUFJLENBQUNGLFFBQTlCLENBQXhCLENBVkUsQ0FVOEQ7QUFFaEU7O0FBQ0EsUUFBSVMsU0FBSixFQUFlO0FBQ2IsWUFBTUcsS0FBSyxHQUFHQyxtREFBRyxDQUFDQyxJQUFKLENBQVM7QUFBQ0MsY0FBTSxFQUFFYixJQUFJLENBQUNjO0FBQWQsT0FBVCxFQUE4QkMsZ0NBQTlCLEVBQXNEO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUF0RCxDQUFkLENBRGEsQ0FHYjs7QUFDQSxhQUFPcEIsR0FBRyxDQUFDcUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JiLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCSyxhQUFLLEVBQUVBLEtBQXhCO0FBQStCVixZQUFJLEVBQUVBO0FBQXJDLE9BQXJCLENBQVA7QUFDRCxLQUxELE1BS087QUFDTCxhQUFPSixHQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWCxFQUFnQmIsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFLEtBQVg7QUFBa0JDLFdBQUcsRUFBRTtBQUF2QixPQUFyQixDQUFQO0FBQ0Q7QUFFRixHQXRCRCxDQXNCRSxPQUFNWSxLQUFOLEVBQWE7QUFDYkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQXRCLE9BQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCSSxJQUFoQixDQUFxQix1QkFBckI7QUFDRDtBQUNGLENBN0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vLi4vdXRpbHMvY29ubmVjdERiXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbm5lY3REYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgLy8xKSBDaGVjayBpZiB1c2VyIGV4aXN0XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKSAvL25vIG1vZGVsLCBzZWxlY3QgdGEgZmFsc2UsIGVudGFvIG5hbyB0cmFzLCBjb20gZXNzZSBzZWxlY3QsIHZhaSBtb3N0cmFyIHNlIGFjaGFyIHVtIHVzdWFyaW8gY29tIGVtYWlsIHRhbFxuXG4gICAgLy8yKSAtLWlmIG5vdCwgcmV0dXJuIGVycm9yXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgZW1haWwgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIgfSk7XG4gICAgfVxuXG4gICAgLy8zKSBjaGVjayBpZiB1c2VycyBwYXNzd29yZCBpcyBjb3JyZWN0XG4gICAgY29uc3QgcGFzc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpIC8vY29tcGFyYW5kbyBvcyAyIFxuXG4gICAgLy80KSAtLWlmIHNvLCBnZW5lcmF0ZSB0b2tlblxuICAgIGlmIChwYXNzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe3VzZXJJZDogdXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46IFwiN2RcIiB9KVxuICBcbiAgICAgIC8vNSkgc2VuZCB0b2tlbiB0byBjbGllbnRcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuOiB0b2tlbiwgdXNlcjogdXNlciB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgZW1haWwgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIgfSk7XG4gICAgfVxuXG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgbG9nZ2luZyBpbiB1c2VyXCIpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

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