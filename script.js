// JavaScript para validar el formulario
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.querySelector('#name');
	const email = document.querySelector('#email');
	const phone = document.querySelector('#phone');
	const password = document.querySelector('#password');

	if (name.value.trim() === '') {
		alert('Por favor ingrese su nombre');
	} else if (email.value.trim() === '') {
		alert('Por favor ingrese su correo electrónico');
	} else if (phone.value.trim() === '') {
		alert('Por favor ingrese su número de teléfono');
	} else if (password.value.trim() === '') {
		alert('Por favor ingrese su contraseña');
	} else {
		alert('¡Gracias por registrarse!');
		form.reset();
	}
});
