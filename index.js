let formulario = document.getElementById('form-login');

const usuariosBloqueados = ["dalo", "dalo2", "dalo2"];



formulario.addEventListener('submit', function(evento){
    
    evento.preventDefault();

    let bloqueado = false;
    let usuario = document.getElementById("user");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let fechaNac = document.getElementById("fechanac");
    let lblError = document.getElementById("error");

    if(usuario.value == ""){
        lblError.innerText = 'El campo usuario no puede estar vacio';
        usuario.focus;
        return;
    }
    if(email.value == ""){
        lblError.innerText = 'El campo email no puede estar vacio';
        email.focus;
        return;
    }
    if(password.value == ""){
        lblError.innerText = 'El campo password no puede estar vacio';
        password.focus;
        return;
    }
    if(fechaNac.value == ""){
        lblError.innerText = 'El campo Fecha Nacimiento no puede estar vacio';
        fechaNac.focus;
        return;
    }

    usuariosBloqueados.forEach( function(valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
        if(valor == usuario.value){
            bloqueado = true;
        }
    });

    if(bloqueado){
        alert('Usuario ' + usuario.value + ' bloqueado');
        usuario.focus;
    }else{
        alert('Bienvenido ' + usuario.value);
    }
    
});


