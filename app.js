let boton = document.getElementById('button-C');

// Eliminar el botón utilizando el método remove()
boton.disable = false;

function limpiar(){
    document.getElementById('muneco-java').src = '';
    let limpiar = document.getElementById('vacio');
    limpiar.innerHTML = '';
    limpiar = document.getElementById('vacio-letras');
    limpiar.innerHTML = '';
}

function Encriptar(){
    let cadenaUsuario = document.getElementById('cadena').value;
    limpiar();
    let arrayUsuario = cadenaUsuario.split('');
    for (let i = 0; i < arrayUsuario.length; i++) {
        console.log(arrayUsuario[i]);
        if(arrayUsuario[i].charCodeAt(0) < 97 || arrayUsuario[i].charCodeAt(0) > 122){
            if(arrayUsuario[i] != ' '){
                error = "Solo acepta minisculas sin acentos";
                arrayUsuario = error.split('');
                break;
            }
        }
        if(arrayUsuario[i] == 'a'){
            arrayUsuario.splice(i+1, 0, 'i');
            console.log(arrayUsuario);
            i=i+2;
        }
        if(arrayUsuario[i] == 'e'){
            arrayUsuario.splice(i+1, 0, 'n');
            arrayUsuario.splice(i+2, 0, 't');
            arrayUsuario.splice(i+3, 0, 'e');
            arrayUsuario.splice(i+4, 0, 'r');
            i=i+4;
        }
        if(arrayUsuario[i] == 'i'){
            arrayUsuario.splice(i+1, 0, 'm');
            arrayUsuario.splice(i+2, 0, 'e');
            arrayUsuario.splice(i+3, 0, 's');
            i=i+3;
        }
        if(arrayUsuario[i] == 'o'){
            arrayUsuario.splice(i+1, 0, 'b');
            arrayUsuario.splice(i+2, 0, 'e');
            arrayUsuario.splice(i+3, 0, 'r');
            i=i+3;
        }
        if(arrayUsuario[i] == 'u'){
            arrayUsuario.splice(i+1, 0, 'f');
            arrayUsuario.splice(i+2, 0, 'a');
            arrayUsuario.splice(i+3, 0, 't');
            i=i+3;
        }
    }
    cadenaUsuario = arrayUsuario.join('');
    let elementoHTML = document.querySelector('#resultado');
    elementoHTML.innerHTML = cadenaUsuario;
}

function Desencriptar(){
    limpiar();
    let cadenaUsuario = document.getElementById('cadena').value;
    let arrayUsuario = cadenaUsuario.split('');
    for (let i = 0; i < arrayUsuario.length; i++) {
        if(arrayUsuario[i] <= 97 || arrayUsuario[i] >= 122){
            if(arrayUsuario[i] != ' '){
                error = "Solo acepta minisculas sin acentos"
                arrayUsuario = error.split('');
                break;
            }
        }
        if(arrayUsuario[i] == 'a'){
            arrayUsuario.splice(i+1, 1);
        }
        if(arrayUsuario[i] == 'e'){
            arrayUsuario.splice(i+1, 4);
        }
        if(arrayUsuario[i] == 'i'){
            arrayUsuario.splice(i+1, 3);
        }
        if(arrayUsuario[i] == 'o'){
            arrayUsuario.splice(i+1, 3);
        }
        if(arrayUsuario[i] == 'u'){
            arrayUsuario.splice(i+1, 3);
        }
    }
    cadenaUsuario = arrayUsuario.join('');
    let elementoHTML = document.querySelector('#resultado');
    elementoHTML.innerHTML = cadenaUsuario;
}

function copiarElemento(){
    let textoACopiar = document.getElementById('resultado').textContent;
    
    let tempInput = document.createElement("textarea");
    tempInput.value = textoACopiar;
    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);
}