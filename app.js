/* ============ Funciones de Encriptación/Desencriptación ============ */
function prepareSpace(frase) {
    /* Insertamos textarea con el mensaje encriptado/desencriptado y boton de copiar */
    document.getElementById("cuadro__texto").innerHTML = `
        <input id="output" class="output" rows="10" readonly></input>
        <button class="boton__copiar" onclick="copiar()">Copiar</button> `;

}

function validacion(frase) {
    /* Expresión regular para encontrar mayúsculas y carácteres con acento */
    let regex = /[A-ZÀ-ú]/;
    return (!regex.test(frase) && frase != '');
}


  /*Funcion para la alerta de validacion de frase*/
function mostrarModal(mensaje) {
    document.getElementById('modal-message').innerText = mensaje;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('input').value = ''; // Limpiar el campo de entrada
}



function encriptar(frase) {
    /* Remplazamos todas las vocales por las claves de encriptación */
    let newFrase = frase.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    /* Devolvemos la frase encriptada */
    return newFrase;
}

function desencriptar(frase) {
    /* Remplazamos las letras encriptadas por sus respectivas vocales*/
    let newFrase = frase.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    /* Devolvemos la frase desencriptada */
    return newFrase;
}

function mostrarEncriptado() {
    /* Obtenemos el contenido de Textarea */

    let frase = document.getElementById("input").value;


    if(validacion(frase)) {
        /* Mostramos el elemento html con el contenido del mensaje */
        prepareSpace(frase);

        /* Agregamos la frase encriptada al elemento html */
        document.getElementById("output").value = encriptar(frase);
    } else {
        mostrarModal('El texto contiene mayúsculas,caracteres especiales o no ingreso ningun texto .');
    }

}

function mostrarDesencriptado() {
    /* Obtenemos el contenido de Textarea */
    let frase = document.getElementById("input").value;

    if(validacion(frase)) {
        /* Mostramos el elemento html con el contenido del mensaje */
        prepareSpace(frase);

        /* Agregamos la frase desencriptada al elemento html */
        document.getElementById("output").value = desencriptar(frase);
    } else {
        mostrarModal('El texto contiene mayúsculas,caracteres especiales o no ingreso ningun texto.');
    }
}
function copiar() {
    let copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    document.getElementById('input').value = ''; // Borra el contenido del textarea al copiar

}