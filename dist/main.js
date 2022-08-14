/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_quotes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/quotes.js */ \"./src/scripts/quotes.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_quotes_js__WEBPACK_IMPORTED_MODULE_0__.displayNextQuote)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hERixvRUFBZ0I7QUFDbkIsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdF9kaW5vdHlwZXItbWFpbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmV0Y2hRdW90ZSwgZGlzcGxheU5leHRRdW90ZX0gZnJvbSAnLi9zY3JpcHRzL3F1b3Rlcy5qcydcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBkaXNwbGF5TmV4dFF1b3RlKCk7XG59KVxuXG4iXSwibmFtZXMiOlsiZmV0Y2hRdW90ZSIsImRpc3BsYXlOZXh0UXVvdGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/quotes.js":
/*!*******************************!*\
  !*** ./src/scripts/quotes.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayNextQuote\": function() { return /* binding */ displayNextQuote; },\n/* harmony export */   \"fetchQuote\": function() { return /* binding */ fetchQuote; }\n/* harmony export */ });\n// API that generates Random Quote for typing test\nconst RANDOM_QUOTE = 'http://api.quotable.io/random'; // Storing HTML div class of 'typingTest' to a const\n\nconst displayQuoteElement = document.getElementById('typingTest');\nconst displayInputElement = document.getElementById('userType');\ndisplayInputElement.addEventListener('input', () => {\n  const test = displayQuoteElement.querySelectorAll('span');\n  const value = displayInputElement.value.split('');\n  test.forEach((charSpan, idx) => {\n    const char = value[idx];\n\n    if (char == null) {\n      charSpan.classList.remove('correct');\n      charSpan.classList.remove('incorrect');\n    } else if (char === charSpan.innerText) {\n      charSpan.classList.add('correct');\n      charSpan.classList.remove('incorrect');\n    } else {\n      charSpan.classList.remove('correct');\n      charSpan.classList.add('incorrect');\n    }\n  });\n}); // function of fetchQuote will fetch quote from quotable API\n\nfunction fetchQuote() {\n  return fetch(RANDOM_QUOTE) // fetches quote from quoteable API\n  .then(response => response.json()) //returns a promise and gets a response object and convert it to a json\n  .then(data => data.content); // retreive data from the API, and return the 'content' key from the data hash (from quoteable API)\n} // store fetchQuote in an async function\n\n\nasync function displayNextQuote() {\n  const quote = await fetchQuote();\n  displayQuoteElement.innerHTML = '';\n  quote.split('').forEach(char => {\n    const charSpan = document.createElement('span');\n    charSpan.innerText = char;\n    displayQuoteElement.appendChild(charSpan);\n  });\n  displayInputElement.value = null;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9xdW90ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQTtBQUNBLE1BQU1BLFlBQVksR0FBRywrQkFBckIsRUFFQTs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUE1QjtBQUlBQyxtQkFBbUIsQ0FBQ0MsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHTCxtQkFBbUIsQ0FBQ00sZ0JBQXBCLENBQXFDLE1BQXJDLENBQWI7RUFDQSxNQUFNQyxLQUFLLEdBQUdKLG1CQUFtQixDQUFDSSxLQUFwQixDQUEwQkMsS0FBMUIsQ0FBZ0MsRUFBaEMsQ0FBZDtFQUVBSCxJQUFJLENBQUNJLE9BQUwsQ0FBYSxDQUFDQyxRQUFELEVBQVdDLEdBQVgsS0FBbUI7SUFDNUIsTUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNJLEdBQUQsQ0FBbEI7O0lBQ0EsSUFBSUMsSUFBSSxJQUFJLElBQVosRUFBaUI7TUFDYkYsUUFBUSxDQUFDRyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixTQUExQjtNQUNBSixRQUFRLENBQUNHLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0lBQ0gsQ0FIRCxNQUdPLElBQUlGLElBQUksS0FBS0YsUUFBUSxDQUFDSyxTQUF0QixFQUFnQztNQUNuQ0wsUUFBUSxDQUFDRyxTQUFULENBQW1CRyxHQUFuQixDQUF1QixTQUF2QjtNQUNBTixRQUFRLENBQUNHLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0lBQ0gsQ0FITSxNQUdBO01BQ0hKLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsU0FBMUI7TUFDQUosUUFBUSxDQUFDRyxTQUFULENBQW1CRyxHQUFuQixDQUF1QixXQUF2QjtJQUNIO0VBQ0osQ0FaRDtBQWNILENBbEJELEdBc0JBOztBQUNBLFNBQVNDLFVBQVQsR0FBcUI7RUFDakIsT0FBT0MsS0FBSyxDQUFDbkIsWUFBRCxDQUFMLENBQW9CO0VBQXBCLENBQ05vQixJQURNLENBQ0RDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRFgsRUFDNEI7RUFENUIsQ0FFTkYsSUFGTSxDQUVERyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsT0FGWixDQUFQLENBRGlCLENBR1c7QUFDL0IsRUFFRDs7O0FBQ0EsZUFBZUMsZ0JBQWYsR0FBaUM7RUFDN0IsTUFBTUMsS0FBSyxHQUFHLE1BQU1SLFVBQVUsRUFBOUI7RUFDQWpCLG1CQUFtQixDQUFDMEIsU0FBcEIsR0FBZ0MsRUFBaEM7RUFDQUQsS0FBSyxDQUFDakIsS0FBTixDQUFZLEVBQVosRUFBZ0JDLE9BQWhCLENBQXlCRyxJQUFELElBQVU7SUFDOUIsTUFBTUYsUUFBUSxHQUFHVCxRQUFRLENBQUMwQixhQUFULENBQXVCLE1BQXZCLENBQWpCO0lBQ0FqQixRQUFRLENBQUNLLFNBQVQsR0FBc0JILElBQXRCO0lBQ0FaLG1CQUFtQixDQUFDNEIsV0FBcEIsQ0FBZ0NsQixRQUFoQztFQUNILENBSkQ7RUFLQVAsbUJBQW1CLENBQUNJLEtBQXBCLEdBQTRCLElBQTVCO0FBRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3RfZGlub3R5cGVyLW1haW4vLi9zcmMvc2NyaXB0cy9xdW90ZXMuanM/MzRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbi8vIEFQSSB0aGF0IGdlbmVyYXRlcyBSYW5kb20gUXVvdGUgZm9yIHR5cGluZyB0ZXN0XG5jb25zdCBSQU5ET01fUVVPVEUgPSAnaHR0cDovL2FwaS5xdW90YWJsZS5pby9yYW5kb20nXG5cbi8vIFN0b3JpbmcgSFRNTCBkaXYgY2xhc3Mgb2YgJ3R5cGluZ1Rlc3QnIHRvIGEgY29uc3RcbmNvbnN0IGRpc3BsYXlRdW90ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwaW5nVGVzdCcpO1xuY29uc3QgZGlzcGxheUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyVHlwZScpO1xuXG5cblxuZGlzcGxheUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBjb25zdCB0ZXN0ID0gZGlzcGxheVF1b3RlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG4gICAgY29uc3QgdmFsdWUgPSBkaXNwbGF5SW5wdXRFbGVtZW50LnZhbHVlLnNwbGl0KCcnKTtcblxuICAgIHRlc3QuZm9yRWFjaCgoY2hhclNwYW4sIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbaWR4XTtcbiAgICAgICAgaWYgKGNoYXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBjaGFyU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XG4gICAgICAgICAgICBjaGFyU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBjaGFyU3Bhbi5pbm5lclRleHQpe1xuICAgICAgICAgICAgY2hhclNwYW4uY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgICAgICAgY2hhclNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFyU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XG4gICAgICAgICAgICBjaGFyU3Bhbi5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn0pXG5cblxuXG4vLyBmdW5jdGlvbiBvZiBmZXRjaFF1b3RlIHdpbGwgZmV0Y2ggcXVvdGUgZnJvbSBxdW90YWJsZSBBUElcbmZ1bmN0aW9uIGZldGNoUXVvdGUoKXtcbiAgICByZXR1cm4gZmV0Y2goUkFORE9NX1FVT1RFKSAvLyBmZXRjaGVzIHF1b3RlIGZyb20gcXVvdGVhYmxlIEFQSVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy9yZXR1cm5zIGEgcHJvbWlzZSBhbmQgZ2V0cyBhIHJlc3BvbnNlIG9iamVjdCBhbmQgY29udmVydCBpdCB0byBhIGpzb25cbiAgICAudGhlbihkYXRhID0+IGRhdGEuY29udGVudCkgLy8gcmV0cmVpdmUgZGF0YSBmcm9tIHRoZSBBUEksIGFuZCByZXR1cm4gdGhlICdjb250ZW50JyBrZXkgZnJvbSB0aGUgZGF0YSBoYXNoIChmcm9tIHF1b3RlYWJsZSBBUEkpXG59XG5cbi8vIHN0b3JlIGZldGNoUXVvdGUgaW4gYW4gYXN5bmMgZnVuY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlOZXh0UXVvdGUoKXtcbiAgICBjb25zdCBxdW90ZSA9IGF3YWl0IGZldGNoUXVvdGUoKTtcbiAgICBkaXNwbGF5UXVvdGVFbGVtZW50LmlubmVySFRNTCA9ICcnOyAgIFxuICAgIHF1b3RlLnNwbGl0KCcnKS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjaGFyU3Bhbi5pbm5lclRleHQgPSAoY2hhcik7XG4gICAgICAgIGRpc3BsYXlRdW90ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhclNwYW4pO1xuICAgIH0pXG4gICAgZGlzcGxheUlucHV0RWxlbWVudC52YWx1ZSA9IG51bGw7XG5cbn1cblxuXG5leHBvcnQge2ZldGNoUXVvdGUsIGRpc3BsYXlOZXh0UXVvdGV9OyJdLCJuYW1lcyI6WyJSQU5ET01fUVVPVEUiLCJkaXNwbGF5UXVvdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXlJbnB1dEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2YWx1ZSIsInNwbGl0IiwiZm9yRWFjaCIsImNoYXJTcGFuIiwiaWR4IiwiY2hhciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlubmVyVGV4dCIsImFkZCIsImZldGNoUXVvdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29udGVudCIsImRpc3BsYXlOZXh0UXVvdGUiLCJxdW90ZSIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/quotes.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3RfZGlub3R5cGVyLW1haW4vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;