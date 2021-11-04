(self["webpackChunk"] = self["webpackChunk"] || []).push([["login"],{

/***/ "./assets/login.js":
/*!*************************!*\
  !*** ./assets/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var config = {
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize(),
      success: function success(data) {
        window.localStorage.setItem("token", data.token);
        window.location.href = form.data('redirect');
      },
      error: function error(_error) {
        var feedback = form.find('.invalid-feedback');
        feedback.text(_error.responseJSON.message);
        feedback.show();
      }
    };
    $.ajax(config);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-823ffa"], () => (__webpack_exec__("./assets/login.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBRCxDQUFDLENBQUNFLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFNUJILEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUksTUFBVixDQUFpQixVQUFTQyxDQUFULEVBQVk7QUFFNUJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUlDLElBQUksR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBWjtBQUVBLFFBQUlRLE1BQU0sR0FBRztBQUNaQyxNQUFBQSxJQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBTCxDQUFVLFFBQVYsQ0FETTtBQUVaQyxNQUFBQSxHQUFHLEVBQUVKLElBQUksQ0FBQ0csSUFBTCxDQUFVLFFBQVYsQ0FGTztBQUdaRSxNQUFBQSxJQUFJLEVBQUVMLElBQUksQ0FBQ00sU0FBTCxFQUhNO0FBS1pDLE1BQUFBLE9BQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3ZCRyxRQUFBQSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDTCxJQUFJLENBQUNNLEtBQTFDO0FBQ0FILFFBQUFBLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJiLElBQUksQ0FBQ0ssSUFBTCxDQUFVLFVBQVYsQ0FBdkI7QUFDQSxPQVJXO0FBU1pTLE1BQUFBLEtBQUssRUFBRSxlQUFTQSxNQUFULEVBQWdCO0FBQ3RCLFlBQUlDLFFBQVEsR0FBQ2YsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVLG1CQUFWLENBQWI7QUFDQUQsUUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNILE1BQUssQ0FBQ0ksWUFBTixDQUFtQkMsT0FBakM7QUFDQUosUUFBQUEsUUFBUSxDQUFDSyxJQUFUO0FBQ0E7QUFiVyxLQUFiO0FBZ0JBM0IsSUFBQUEsQ0FBQyxDQUFDNEIsSUFBRixDQUFPcEIsTUFBUDtBQUVBLEdBeEJEO0FBeUJBLENBM0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0JCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRsZXQgZm9ybSA9ICQodGhpcyk7XG5cblx0XHRsZXQgY29uZmlnID0ge1xuXHRcdFx0dHlwZTogZm9ybS5hdHRyKCdtZXRob2QnKSxcblx0XHRcdHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcblx0XHRcdGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG5cdFx0XHRcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybS5kYXRhKCdyZWRpcmVjdCcpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRsZXQgZmVlZGJhY2s9Zm9ybS5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpO1xuXHRcdFx0XHRmZWVkYmFjay50ZXh0KGVycm9yLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcblx0XHRcdFx0ZmVlZGJhY2suc2hvdygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkLmFqYXgoY29uZmlnKTtcblxuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjb25maWciLCJ0eXBlIiwiYXR0ciIsInVybCIsImRhdGEiLCJzZXJpYWxpemUiLCJzdWNjZXNzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJmZWVkYmFjayIsImZpbmQiLCJ0ZXh0IiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInNob3ciLCJhamF4Il0sInNvdXJjZVJvb3QiOiIifQ==