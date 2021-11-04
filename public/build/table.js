(self["webpackChunk"] = self["webpackChunk"] || []).push([["table"],{

/***/ "./assets/table.js":
/*!*************************!*\
  !*** ./assets/table.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap-table/dist/bootstrap-table.min.js */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js");

$(document).ready(function () {
  var table = $('.table');
  var token = window.localStorage.getItem("token");
  var config = {
    type: "get",
    url: '/api/sales',
    contentType: "application/json",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    success: function success(body) {
      process(body);
    },
    error: function error(response) {
      _error();
    }
  };
  $.ajax(config);

  function _error() {
    table.parent().find('.invalid-feedback').show();
  }

  function process(response) {
    draw(calculateTotalSales(response));
  }

  function calculateTotalSales(response) {
    var cols = [];
    var total; // Extract columns for Sales 

    for (var i = 0; i < response.column.length; i++) {
      if (response.column[i].header === "Sales") {
        for (var j = 0; j < response.column[i].subHeaders.length; j++) {
          cols.push(response.column[i].subHeaders[j].field);
          response.column[i].subHeaders[j].align = "right";
        }
      }

      if (response.column[i].header === "Total sales") {
        response.column[i].align = "right";
      }
    } // Calculate for each row


    var _loop = function _loop(_i) {
      total = 0;
      Object.keys(response.data[_i]).filter(function (key) {
        return cols.includes(key);
      }).reduce(function (obj, key) {
        obj[key] = response.data[_i][key];
        total += response.data[_i][key];
        return obj;
      }, {});
      response.data[_i]["totalSales"] = total;
    };

    for (var _i = 0; _i < response.data.length; _i++) {
      _loop(_i);
    }

    return response;
  }

  function draw(response) {
    var table = $('<table></table>');
    table.data('toogle', "table");
    table.data('search', "true");
    table.data('page-size', "10");
    table.data('pagination', "true");
    table.data('show-columns', "true");
    drawHeader(table, response['column']);
    drawData(table, response['data']);
    $('.table').append(table);
    table.bootstrapTable();
  }

  function drawHeader(table, columns) {
    var thead = $('<thead></thead>');
    var subheaders = [];
    var row = $("<tr></tr>");

    for (var i = 0; i < columns.length; i++) {
      col = $("<th></th");
      col.text(columns[i].header);

      if (columns[i].subHeaders) {
        subheaders = subheaders.concat(columns[i].subHeaders);
        col.attr('colspan', columns[i].subHeaders.length);
      } else {
        //col.data('field', columns[i].field);
        col.data('sortable', "true");
        col.attr('rowspan', "2");
      }

      col.data('align', columns[i].align);
      row.append(col);
    }

    thead.append(row);
    row = $("<tr></tr>");

    for (var _i2 = 0; _i2 < subheaders.length; _i2++) {
      col = $("<th></th");
      col.data('field', subheaders[_i2].field);
      col.text(subheaders[_i2].header);
      col.data('sortable', "true");
      col.data('align', "right");
      row.append(col);
    }

    thead.append(row);
    table.append(thead);
  }

  function drawData(table, data) {
    var tbody = $('<tbody></tbody>');
    var row;

    for (var i = 0; i < data.length; i++) {
      row = $("<tr></tr>");

      for (var _i3 = 0, _Object$entries = Object.entries(data[i]); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        col = $("<td></td>");

        if (key != "productID") {
          value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        col.text(value);
        row.append(col);
      }

      tbody.append(row);
    }

    table.append(tbody);
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-823ffa","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_modules_es_functio-0d77f2","vendors-node_modules_bootstrap-table_dist_bootstrap-table_min_js-node_modules_core-js_modules-0a5b5e"], () => (__webpack_exec__("./assets/table.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdXLElBQUksQ0FBQ1QsTUFBekIsRUFBaUNGLENBQUMsRUFBbEMsRUFBc0M7QUFDckN3QixNQUFBQSxHQUFHLEdBQUduRCxDQUFDLENBQUMsV0FBRCxDQUFQOztBQUNBLDBDQUEyQm9DLE1BQU0sQ0FBQ3FCLE9BQVAsQ0FBZW5CLElBQUksQ0FBQ1gsQ0FBRCxDQUFuQixDQUEzQix1Q0FBb0Q7QUFBL0M7QUFBQSxZQUFPYSxHQUFQO0FBQUEsWUFBWWtCLEtBQVo7O0FBRUpOLFFBQUFBLEdBQUcsR0FBR3BELENBQUMsQ0FBQyxXQUFELENBQVA7O0FBQ0EsWUFBR3dDLEdBQUcsSUFBRSxXQUFSLEVBQW9CO0FBQ25Ca0IsVUFBQUEsS0FBSyxHQUFDQSxLQUFLLENBQUNDLFFBQU4sR0FBaUJDLE9BQWpCLENBQXlCLHVCQUF6QixFQUFrRCxHQUFsRCxDQUFOO0FBQ0E7O0FBQ0RSLFFBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTSyxLQUFUO0FBQ0FQLFFBQUFBLEdBQUcsQ0FBQ0wsTUFBSixDQUFXTSxHQUFYO0FBQ0E7O0FBQ0RJLE1BQUFBLEtBQUssQ0FBQ1YsTUFBTixDQUFhSyxHQUFiO0FBQ0E7O0FBQ0QvQyxJQUFBQSxLQUFLLENBQUMwQyxNQUFOLENBQWFVLEtBQWI7QUFDQTtBQUNELENBcElEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxucmVxdWlyZSgnYm9vdHN0cmFwLXRhYmxlL2Rpc3QvYm9vdHN0cmFwLXRhYmxlLm1pbi5qcycpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuXHRsZXQgdGFibGUgPSAkKCcudGFibGUnKTtcblx0bGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cdGxldCBjb25maWcgPSB7XG5cdFx0dHlwZTogXCJnZXRcIixcblx0XHR1cmw6ICcvYXBpL3NhbGVzJyxcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0XHRcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0b2tlblxuXHRcdH0sIHN1Y2Nlc3M6IGZ1bmN0aW9uKGJvZHkpIHtcblx0XHRcdHByb2Nlc3MoYm9keSk7XG5cdFx0fSxcblx0XHRlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdGVycm9yKCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuYWpheChjb25maWcpO1xuXG5cdGZ1bmN0aW9uIGVycm9yKCkge1xuXHRcdHRhYmxlLnBhcmVudCgpLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJykuc2hvdygpXG5cdH1cblxuXHRmdW5jdGlvbiBwcm9jZXNzKHJlc3BvbnNlKSB7XG5cdFx0ZHJhdyhjYWxjdWxhdGVUb3RhbFNhbGVzKHJlc3BvbnNlKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbFNhbGVzKHJlc3BvbnNlKSB7XG5cdFx0bGV0IGNvbHMgPSBbXTtcblxuXHRcdGxldCB0b3RhbDtcblxuXHRcdC8vIEV4dHJhY3QgY29sdW1ucyBmb3IgU2FsZXMgXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb2x1bW4ubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0aWYgKHJlc3BvbnNlLmNvbHVtbltpXS5oZWFkZXIgPT09IFwiU2FsZXNcIikge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJlc3BvbnNlLmNvbHVtbltpXS5zdWJIZWFkZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y29scy5wdXNoKHJlc3BvbnNlLmNvbHVtbltpXS5zdWJIZWFkZXJzW2pdLmZpZWxkKTtcblx0XHRcdFx0XHRyZXNwb25zZS5jb2x1bW5baV0uc3ViSGVhZGVyc1tqXS5hbGlnbj1cInJpZ2h0XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5jb2x1bW5baV0uaGVhZGVyID09PSBcIlRvdGFsIHNhbGVzXCIpIHtcblx0XHRcdFx0cmVzcG9uc2UuY29sdW1uW2ldLmFsaWduPVwicmlnaHRcIjtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSBmb3IgZWFjaCByb3dcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvdGFsID0gMDtcblx0XHRcdE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGFbaV0pXG5cdFx0XHRcdC5maWx0ZXIoa2V5ID0+IGNvbHMuaW5jbHVkZXMoa2V5KSlcblx0XHRcdFx0LnJlZHVjZSgob2JqLCBrZXkpID0+IHtcblx0XHRcdFx0XHRvYmpba2V5XSA9IHJlc3BvbnNlLmRhdGFbaV1ba2V5XTtcblx0XHRcdFx0XHR0b3RhbCArPSByZXNwb25zZS5kYXRhW2ldW2tleV07XG5cdFx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdFx0fSwge30pO1xuXHRcdFx0cmVzcG9uc2UuZGF0YVtpXVtcInRvdGFsU2FsZXNcIl0gPSB0b3RhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhdyhyZXNwb25zZSkge1xuXHRcdGxldCB0YWJsZSA9ICQoJzx0YWJsZT48L3RhYmxlPicpO1xuXHRcdHRhYmxlLmRhdGEoJ3Rvb2dsZScsIFwidGFibGVcIik7XG5cdFx0dGFibGUuZGF0YSgnc2VhcmNoJywgXCJ0cnVlXCIpO1xuXHRcdHRhYmxlLmRhdGEoJ3BhZ2Utc2l6ZScsIFwiMTBcIik7XG5cdFx0dGFibGUuZGF0YSgncGFnaW5hdGlvbicsIFwidHJ1ZVwiKTtcblx0XHR0YWJsZS5kYXRhKCdzaG93LWNvbHVtbnMnLCBcInRydWVcIik7XG5cdFx0ZHJhd0hlYWRlcih0YWJsZSwgcmVzcG9uc2VbJ2NvbHVtbiddKTtcblx0XHRkcmF3RGF0YSh0YWJsZSwgcmVzcG9uc2VbJ2RhdGEnXSk7XG5cdFx0JCgnLnRhYmxlJykuYXBwZW5kKHRhYmxlKTtcblx0XHR0YWJsZS5ib290c3RyYXBUYWJsZSgpO1xuXG5cdH1cblx0ZnVuY3Rpb24gZHJhd0hlYWRlcih0YWJsZSwgY29sdW1ucykge1xuXHRcdGxldCB0aGVhZCA9ICQoJzx0aGVhZD48L3RoZWFkPicpO1xuXHRcdGxldCBzdWJoZWFkZXJzID0gW107XG5cblx0XHRsZXQgcm93ID0gJChcIjx0cj48L3RyPlwiKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbCA9ICQoXCI8dGg+PC90aFwiKTtcblx0XHRcdGNvbC50ZXh0KGNvbHVtbnNbaV0uaGVhZGVyKTtcblx0XHRcdGlmIChjb2x1bW5zW2ldLnN1YkhlYWRlcnMpIHtcblx0XHRcdFx0c3ViaGVhZGVycyA9ICBzdWJoZWFkZXJzLmNvbmNhdChjb2x1bW5zW2ldLnN1YkhlYWRlcnMpO1xuXHRcdFx0XHRjb2wuYXR0cignY29sc3BhbicsIGNvbHVtbnNbaV0uc3ViSGVhZGVycy5sZW5ndGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly9jb2wuZGF0YSgnZmllbGQnLCBjb2x1bW5zW2ldLmZpZWxkKTtcblx0XHRcdFx0Y29sLmRhdGEoJ3NvcnRhYmxlJywgXCJ0cnVlXCIpO1xuXHRcdFx0XHRjb2wuYXR0cigncm93c3BhbicsIFwiMlwiKTtcblx0XHRcdH1cblx0XHRcdGNvbC5kYXRhKCdhbGlnbicsIGNvbHVtbnNbaV0uYWxpZ24pO1xuXHRcdFx0cm93LmFwcGVuZChjb2wpO1xuXHRcdH1cblx0XHR0aGVhZC5hcHBlbmQocm93KTtcblxuXHRcdHJvdyA9ICQoXCI8dHI+PC90cj5cIik7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdWJoZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2wgPSAkKFwiPHRoPjwvdGhcIik7XG5cdFx0XHRjb2wuZGF0YSgnZmllbGQnLCBzdWJoZWFkZXJzW2ldLmZpZWxkKTtcblx0XHRcdGNvbC50ZXh0KHN1YmhlYWRlcnNbaV0uaGVhZGVyKTtcblx0XHRcdGNvbC5kYXRhKCdzb3J0YWJsZScsIFwidHJ1ZVwiKTtcblx0XHRcdGNvbC5kYXRhKCdhbGlnbicsIFwicmlnaHRcIik7XG5cdFx0XHRcblx0XHRcdHJvdy5hcHBlbmQoY29sKTtcblx0XHR9XG5cdFx0dGhlYWQuYXBwZW5kKHJvdyk7XG5cblx0XHR0YWJsZS5hcHBlbmQodGhlYWQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0RhdGEodGFibGUsIGRhdGEpIHtcblx0XHRsZXQgdGJvZHkgPSAkKCc8dGJvZHk+PC90Ym9keT4nKTtcblx0XHRsZXQgcm93O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyb3cgPSAkKFwiPHRyPjwvdHI+XCIpO1xuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YVtpXSkpIHtcblxuXHRcdFx0XHRjb2wgPSAkKFwiPHRkPjwvdGQ+XCIpO1xuXHRcdFx0XHRpZihrZXkhPVwicHJvZHVjdElEXCIpe1xuXHRcdFx0XHRcdHZhbHVlPXZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIgXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbC50ZXh0KHZhbHVlKTtcblx0XHRcdFx0cm93LmFwcGVuZChjb2wpO1xyXG5cdFx0XHR9XG5cdFx0XHR0Ym9keS5hcHBlbmQocm93KVxuXHRcdH1cblx0XHR0YWJsZS5hcHBlbmQodGJvZHkpO1xuXHR9XG59KTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJ0b2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25maWciLCJ0eXBlIiwidXJsIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsImJvZHkiLCJwcm9jZXNzIiwiZXJyb3IiLCJyZXNwb25zZSIsImFqYXgiLCJwYXJlbnQiLCJmaW5kIiwic2hvdyIsImRyYXciLCJjYWxjdWxhdGVUb3RhbFNhbGVzIiwiY29scyIsInRvdGFsIiwiaSIsImNvbHVtbiIsImxlbmd0aCIsImhlYWRlciIsImoiLCJzdWJIZWFkZXJzIiwicHVzaCIsImZpZWxkIiwiYWxpZ24iLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImZpbHRlciIsImtleSIsImluY2x1ZGVzIiwicmVkdWNlIiwib2JqIiwiZHJhd0hlYWRlciIsImRyYXdEYXRhIiwiYXBwZW5kIiwiYm9vdHN0cmFwVGFibGUiLCJjb2x1bW5zIiwidGhlYWQiLCJzdWJoZWFkZXJzIiwicm93IiwiY29sIiwidGV4dCIsImNvbmNhdCIsImF0dHIiLCJ0Ym9keSIsImVudHJpZXMiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=