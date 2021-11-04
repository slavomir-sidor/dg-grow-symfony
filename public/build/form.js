(self["webpackChunk"] = self["webpackChunk"] || []).push([["form"],{

/***/ "./assets/form.js":
/*!************************!*\
  !*** ./assets/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var token = window.localStorage.getItem("token");
    var form = $(this);
    var formName = form.attr("name");
    var data = form.serializeArray();
    var payload = {};

    for (var i = 0; i < data.length; i++) {
      data[i].name = data[i].name.replace(formName + "[", "").replace("]", "");
      payload[data[i].name] = data[i].value;
    } // Prototype object, but type casting is needed see productID, 
    // needs specific form setting bu type from template ..., getting input type and pass it as variable to data attr, 
    //for example all numbers from form definition 


    payload['productID'] = parseInt(payload['productID']);
    var config = {
      type: form.attr('method'),
      url: form.attr('action'),
      data: JSON.stringify(payload),
      dataType: 'json',
      contentType: "application/json",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      success: function success(data) {
        form[0].reset();
        var successMessage = $('.alert-success');
        successMessage.show();
        setTimeout(function () {
          successMessage.hide();
        }, 3000);
      },
      error: function error(data) {
        form.parent().find('.invalid-feedback').show();
      }
    };
    $.ajax(config);
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-823ffa","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_modules_es_functio-0d77f2"], () => (__webpack_exec__("./assets/form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0JCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cdFx0bGV0IGZvcm0gPSAkKHRoaXMpO1xuXHRcdGxldCBmb3JtTmFtZSA9IGZvcm0uYXR0cihcIm5hbWVcIik7XG5cdFx0bGV0IGRhdGEgPSBmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG5cdFx0bGV0IHBheWxvYWQgPSB7fTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRhdGFbaV0ubmFtZSA9ZGF0YVtpXS5uYW1lLnJlcGxhY2UoZm9ybU5hbWUgKyBcIltcIixcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKTtcblx0XHRcdHBheWxvYWRbZGF0YVtpXS5uYW1lXSA9IGRhdGFbaV0udmFsdWU7XG5cdFx0fVxuXHRcdC8vIFByb3RvdHlwZSBvYmplY3QsIGJ1dCB0eXBlIGNhc3RpbmcgaXMgbmVlZGVkIHNlZSBwcm9kdWN0SUQsIFxuXHRcdC8vIG5lZWRzIHNwZWNpZmljIGZvcm0gc2V0dGluZyBidSB0eXBlIGZyb20gdGVtcGxhdGUgLi4uLCBnZXR0aW5nIGlucHV0IHR5cGUgYW5kIHBhc3MgaXQgYXMgdmFyaWFibGUgdG8gZGF0YSBhdHRyLCBcblx0XHQvL2ZvciBleGFtcGxlIGFsbCBudW1iZXJzIGZyb20gZm9ybSBkZWZpbml0aW9uIFxuXHRcdHBheWxvYWRbJ3Byb2R1Y3RJRCddID0gIHBhcnNlSW50KHBheWxvYWRbJ3Byb2R1Y3RJRCddKTtcblxuXHRcdGxldCBjb25maWcgPSB7XG5cdFx0XHR0eXBlOiBmb3JtLmF0dHIoJ21ldGhvZCcpLFxuXHRcdFx0dXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRcdFx0XCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdG9rZW5cblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGZvcm1bMF0ucmVzZXQoKTtcblx0XHRcdFx0bGV0IHN1Y2Nlc3NNZXNzYWdlID0gJCgnLmFsZXJ0LXN1Y2Nlc3MnKTtcblx0XHRcdFx0c3VjY2Vzc01lc3NhZ2Uuc2hvdygpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHN1Y2Nlc3NNZXNzYWdlLmhpZGUoKTsgfSwgMzAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0Zm9ybS5wYXJlbnQoKS5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpLnNob3coKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0JC5hamF4KGNvbmZpZyk7XG5cblxuXHR9KTtcbn0pO1xuXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIElURVJBVE9SID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBoZXggPSAvXlsrLV0/MHgvaTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoaGV4LmV4ZWMpO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyXG4gIC8vIE1TIEVkZ2UgMTgtIGJyb2tlbiB3aXRoIGJveGVkIHN5bWJvbHNcbiAgfHwgKElURVJBVE9SICYmICFmYWlscyhmdW5jdGlvbiAoKSB7ICRwYXJzZUludChPYmplY3QoSVRFUkFUT1IpKTsgfSkpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0odG9TdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoZXhlYyhoZXgsIFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgbHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gJHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6ICRwYXJzZUludFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJkb2N1bWVudCIsInJlYWR5Iiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZm9ybSIsImZvcm1OYW1lIiwiYXR0ciIsImRhdGEiLCJzZXJpYWxpemVBcnJheSIsInBheWxvYWQiLCJpIiwibGVuZ3RoIiwibmFtZSIsInJlcGxhY2UiLCJ2YWx1ZSIsInBhcnNlSW50IiwiY29uZmlnIiwidHlwZSIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhVHlwZSIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsInN1Y2Nlc3MiLCJyZXNldCIsInN1Y2Nlc3NNZXNzYWdlIiwic2hvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwiZXJyb3IiLCJwYXJlbnQiLCJmaW5kIiwiYWpheCJdLCJzb3VyY2VSb290IjoiIn0=