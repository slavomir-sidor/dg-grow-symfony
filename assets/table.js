const $ = require('jquery');

require('bootstrap-table/dist/bootstrap-table.min.js');

$(document).ready(function() {

	let table = $('.table');
	let token = window.localStorage.getItem("token");
	let config = {
		type: "get",
		url: '/api/sales',
		contentType: "application/json",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + token
		}, success: function(body) {
			process(body);
		},
		error: function(response) {
			error();
		}
	};

	$.ajax(config);

	function error() {
		table.parent().find('.invalid-feedback').show()
	}

	function process(response) {
		draw(calculateTotalSales(response));
	}

	function calculateTotalSales(response) {
		let cols = [];

		let total;

		// Extract columns for Sales 
		for (let i = 0; i < response.column.length; i++) {

			if (response.column[i].header === "Sales") {
				for (let j = 0; j < response.column[i].subHeaders.length; j++) {
					cols.push(response.column[i].subHeaders[j].field);
					response.column[i].subHeaders[j].align="right";
				}
			}
			if (response.column[i].header === "Total sales") {
				response.column[i].align="right";
			}

		}

		// Calculate for each row
		for (let i = 0; i < response.data.length; i++) {
			total = 0;
			Object.keys(response.data[i])
				.filter(key => cols.includes(key))
				.reduce((obj, key) => {
					obj[key] = response.data[i][key];
					total += response.data[i][key];
					return obj;
				}, {});
			response.data[i]["totalSales"] = total;
		}
		return response;
	}

	function draw(response) {
		let table = $('<table></table>');
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
		let thead = $('<thead></thead>');
		let subheaders = [];

		let row = $("<tr></tr>");
		for (let i = 0; i < columns.length; i++) {
			col = $("<th></th");
			col.text(columns[i].header);
			if (columns[i].subHeaders) {
				subheaders =  subheaders.concat(columns[i].subHeaders);
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
		for (let i = 0; i < subheaders.length; i++) {
			col = $("<th></th");
			col.data('field', subheaders[i].field);
			col.text(subheaders[i].header);
			col.data('sortable', "true");
			col.data('align', "right");
			
			row.append(col);
		}
		thead.append(row);

		table.append(thead);
	}

	function drawData(table, data) {
		let tbody = $('<tbody></tbody>');
		let row;

		for (let i = 0; i < data.length; i++) {
			row = $("<tr></tr>");
			for (const [key, value] of Object.entries(data[i])) {

				col = $("<td></td>");
				if(key!="productID"){
					value=value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
				}
				col.text(value);
				row.append(col);
			}
			tbody.append(row)
		}
		table.append(tbody);
	}
});