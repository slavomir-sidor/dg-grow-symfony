const $ = require('jquery');

$(document).ready(function() {

	$('form').submit(function(e) {

		e.preventDefault();
		let token = window.localStorage.getItem("token");
		let form = $(this);
		let formName = form.attr("name");
		let data = form.serializeArray();
		let payload = {};
		for (let i = 0; i < data.length; i++) {
			data[i].name =data[i].name.replace(formName + "[","").replace("]", "");
			payload[data[i].name] = data[i].value;
		}
		// Prototype object, but type casting is needed see productID, 
		// needs specific form setting bu type from template ..., getting input type and pass it as variable to data attr, 
		//for example all numbers from form definition 
		payload['productID'] =  parseInt(payload['productID']);

		let config = {
			type: form.attr('method'),
			url: form.attr('action'),
			data: JSON.stringify(payload),
			dataType: 'json',
			contentType: "application/json",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token
			},
			success: function(data) {
				form[0].reset();
				let successMessage = $('.alert-success');
				successMessage.show();

				setTimeout(function() { successMessage.hide(); }, 3000);
			},
			error: function(data) {
				form.parent().find('.invalid-feedback').show()
			}
		};
		$.ajax(config);


	});
});

