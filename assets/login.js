const $ = require('jquery');

$(document).ready(function() {

	$('form').submit(function(e) {

		e.preventDefault();

		let form = $(this);

		let config = {
			type: form.attr('method'),
			url: form.attr('action'),
			data: form.serialize(),
			
			success: function(data) {
				window.localStorage.setItem("token", data.token);
				window.location.href = form.data('redirect');
			},
			error: function(error) {
				let feedback=form.find('.invalid-feedback');
				feedback.text(error.responseJSON.message);
				feedback.show();
			}
		};

		$.ajax(config);

	});
});
