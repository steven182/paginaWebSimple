function sendData() {
    let nombre = document.formContact.nombre.value;
    let correo = document.formContact.correo.value;
    let telefono = document.formContact.telefono.value;
    let ciudad = document.formContact.ciudad.value;
    let mensaje = document.formContact.mensaje.value;
    if (!nombre || !correo || !telefono || ciudad == 'Seleccione' || !mensaje) {
        alert('Complete todo el formulario por favor')
    } else {
        alert(`Estimado ${nombre} su mesaje fue enviado satisfactoriamente`);
    }
}