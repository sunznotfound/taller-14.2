document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validar

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('password1').value;
    const repetirContraseña = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;
    const modalButton = document.querySelector("[data-bs-target='#modalTerminos']");
    const terminosText = document.createElement("span");
    terminosText.classList.add("text-danger", "ms-2");
    
    // Comprobar si el mensaje ya existe
    if (!modalButton.parentElement.querySelector('.text-danger')) {
        modalButton.parentElement.appendChild(terminosText);
    }

    let valid = true;

    // Validaciones
    if (!nombre) {
        alert("El campo 'Nombre' no puede estar vacío.");
        valid = false;
    }

    if (!apellido) {
        alert("El campo 'Apellido' no puede estar vacío.");
        valid = false;
    }

    if (!email) {
        alert("El campo 'Email' no puede estar vacío.");
        valid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("El 'Email' no tiene un formato válido.");
            valid = false;
        }
    }

    if (contraseña.length < 6) {
        alert("La 'Contraseña' debe tener al menos 6 caracteres.");
        valid = false;
    }

    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden.");
        valid = false;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        terminosText.textContent = "No has aceptado los términos.";
        valid = false;
    } else {
        terminosText.textContent = "";      
    }

    // Si todo es válido, mostrar el alert de éxito
    if (valid) {
        
        alert("Registro exitoso.");

        if (modalButton.parentElement.querySelector('.text-danger')) {
            modalButton.parentElement.querySelector('.text-danger').remove();
        }

        this.submit(); // Enviar el formulario después de mostrar el alert
        document.getElementById('registro-form').reset();
        
    }
    
});
