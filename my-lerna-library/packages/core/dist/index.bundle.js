(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-lerna-library"] = factory();
	else
		root["my-lerna-library"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! namespace exports */
/*! export anotherConstants [provided] [no usage info] [missing usage info prevents renaming] */
/*! export magicNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "magicNumber": () => /* binding */ magicNumber,
/* harmony export */   "anotherConstants": () => /* binding */ anotherConstants
/* harmony export */ });


console.info('constants.js was loaded!');
var magicNumber = 42;
var anotherConstants = 'anotherConstants';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export Test [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export constants [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] -> ./src/constants.js */
/*!   export anotherConstants [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export magicNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [maybe used in index (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Test": () => /* binding */ Test,
/* harmony export */   "constants": () => /* reexport module object */ _constants_js__WEBPACK_IMPORTED_MODULE_0__
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var magicNumber = _constants_js__WEBPACK_IMPORTED_MODULE_0__.magicNumber;
console.info('index.js from core was loaded!');
var anotherPackage;

try {
  anotherPackage = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@my-lerna-library/another-package'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (error) {
  console.error(error);
}

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: "test",
    value: function test() {
      return "hello from main endpoint ".concat(magicNumber);
    }
  }, {
    key: "testFromAnotherPackage",
    value: function testFromAnotherPackage() {
      console.info("call to testFromAnotherPackage", anotherPackage);

      if (anotherPackage) {
        return new anotherPackage.AnotherClass().test();
      }

      return "Another package not loaded";
    }
  }, {
    key: "iconFromAnotherPackage",
    value: function iconFromAnotherPackage() {
      if (anotherPackage) {
        return anotherPackage.logo;
      }
    }
  }, {
    key: "bigSVGFromAnotherPackage",
    value: function bigSVGFromAnotherPackage() {
      if (anotherPackage) {
        return anotherPackage.bigSVG;
      }
    }
  }]);

  return Test;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1sZXJuYS1saWJyYXJ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9teS1sZXJuYS1saWJyYXJ5Ly4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9teS1sZXJuYS1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWxlcm5hLWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktbGVybmEtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktbGVybmEtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWxlcm5hLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1sZXJuYS1saWJyYXJ5L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsIm1hZ2ljTnVtYmVyIiwiYW5vdGhlckNvbnN0YW50cyIsImNvbnN0YW50cyIsImFub3RoZXJQYWNrYWdlIiwicmVxdWlyZSIsImVycm9yIiwiVGVzdCIsIkFub3RoZXJDbGFzcyIsInRlc3QiLCJsb2dvIiwiYmlnU1ZHIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYkEsT0FBTyxDQUFDQyxJQUFSLENBQWEsMEJBQWI7QUFFTyxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTE07Ozs7Ozs7O0FBRWI7SUFFUUQsVyxHQUFnQkUsc0Q7QUFFeEJKLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGdDQUFiO0FBRUEsSUFBSUksY0FBSjs7QUFDQSxJQUFJO0FBQ0ZBLGdCQUFjLEdBQUdDLG1CQUFPLENBQUMsZ0tBQUQsQ0FBeEI7QUFDRCxDQUZELENBRUUsT0FBTUMsS0FBTixFQUFhO0FBQ2JQLFNBQU8sQ0FBQ08sS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0lBRUtDLEk7QUFDSixrQkFBYztBQUFBO0FBQ2I7Ozs7MkJBQ007QUFDTCxnREFBbUNOLFdBQW5DO0FBQ0Q7Ozs2Q0FDd0I7QUFDdkJGLGFBQU8sQ0FBQ0MsSUFBUixDQUFhLGdDQUFiLEVBQStDSSxjQUEvQzs7QUFDQSxVQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLGVBQU8sSUFBSUEsY0FBYyxDQUFDSSxZQUFuQixHQUFrQ0MsSUFBbEMsRUFBUDtBQUNEOztBQUNELGFBQU8sNEJBQVA7QUFDRDs7OzZDQUN3QjtBQUN2QixVQUFJTCxjQUFKLEVBQW9CO0FBQ2xCLGVBQU9BLGNBQWMsQ0FBQ00sSUFBdEI7QUFDRDtBQUNGOzs7K0NBQzBCO0FBQ3pCLFVBQUlOLGNBQUosRUFBb0I7QUFDbEIsZUFBT0EsY0FBYyxDQUFDTyxNQUF0QjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7OztVQ3JDSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibXktbGVybmEtbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJteS1sZXJuYS1saWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnNvbGUuaW5mbygnY29uc3RhbnRzLmpzIHdhcyBsb2FkZWQhJyk7XG5cbmV4cG9ydCBjb25zdCBtYWdpY051bWJlciA9IDQyO1xuZXhwb3J0IGNvbnN0IGFub3RoZXJDb25zdGFudHMgPSAnYW5vdGhlckNvbnN0YW50cyc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IHsgbWFnaWNOdW1iZXIgfSA9IGNvbnN0YW50cztcblxuY29uc29sZS5pbmZvKCdpbmRleC5qcyBmcm9tIGNvcmUgd2FzIGxvYWRlZCEnKTtcblxubGV0IGFub3RoZXJQYWNrYWdlO1xudHJ5IHtcbiAgYW5vdGhlclBhY2thZ2UgPSByZXF1aXJlKCdAbXktbGVybmEtbGlicmFyeS9hbm90aGVyLXBhY2thZ2UnKTtcbn0gY2F0Y2goZXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG59XG5cbmNsYXNzIFRlc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICB0ZXN0KCkge1xuICAgIHJldHVybiBgaGVsbG8gZnJvbSBtYWluIGVuZHBvaW50ICR7bWFnaWNOdW1iZXJ9YDtcbiAgfVxuICB0ZXN0RnJvbUFub3RoZXJQYWNrYWdlKCkge1xuICAgIGNvbnNvbGUuaW5mbyhcImNhbGwgdG8gdGVzdEZyb21Bbm90aGVyUGFja2FnZVwiLCBhbm90aGVyUGFja2FnZSk7XG4gICAgaWYgKGFub3RoZXJQYWNrYWdlKSB7XG4gICAgICByZXR1cm4gbmV3IGFub3RoZXJQYWNrYWdlLkFub3RoZXJDbGFzcygpLnRlc3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiQW5vdGhlciBwYWNrYWdlIG5vdCBsb2FkZWRcIjtcbiAgfVxuICBpY29uRnJvbUFub3RoZXJQYWNrYWdlKCkge1xuICAgIGlmIChhbm90aGVyUGFja2FnZSkge1xuICAgICAgcmV0dXJuIGFub3RoZXJQYWNrYWdlLmxvZ287XG4gICAgfVxuICB9XG4gIGJpZ1NWR0Zyb21Bbm90aGVyUGFja2FnZSgpIHtcbiAgICBpZiAoYW5vdGhlclBhY2thZ2UpIHtcbiAgICAgIHJldHVybiBhbm90aGVyUGFja2FnZS5iaWdTVkc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFRlc3QsIGNvbnN0YW50cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==