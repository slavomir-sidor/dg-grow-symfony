import { Controller } from 'stimulus';

export default class extends Controller {
	submit() {
		const $form = $(this.modalBodyTarget).find('form');
		console.log($form.serialize());
		$.ajax({
			url: $form.prop('action'),
			method: $form.prop('method'),
			data: $form.serialize(),
		});
	}
}