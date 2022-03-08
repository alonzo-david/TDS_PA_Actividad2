let formulario = document.getElementById('form-login');

//const usuariosBloqueados = ["Saab", "Volvo", "BMW"];


formulario.addEventListener('submit', function(evento){
    
    evento.preventDefault();

    let usuario = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fechaNac = document.getElementById("fechanac").value;

    alert('Bienvenido ' + usuario);
});


