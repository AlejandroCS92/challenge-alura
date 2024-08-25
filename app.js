const d = document;
const input = d.querySelector('.input__ingresa__texto');
const imagenMuneco = d.querySelector('.imagen__muneco');
const resultadoTitulo = d.querySelector('.texto__muneco');
const resultadoTexto = d.querySelector('.texto__incativo');
const botonEncriptar = d.querySelector('.boton__encriptar');
const botonDesencriptar = d.querySelector('.boton__desencriptar');
const botonCopiar = d.querySelector('.boton__copiar');

const llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

// Funcion Encriptar 

function encriptarMensaje(mensaje){
    let mensajeEncriptado = '';
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for( let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;    
    }
    return mensajeEncriptado;
}

// Funcion Desncriptar

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

// Ocultar elementos 

input.addEventListener('input', (e) => {
    imagenMuneco.style.display = 'none';
    resultadoTitulo.textContent = 'Capturando texto';
    resultadoTexto.textContent = '';
})

// Funcion boton encriptar 

botonEncriptar.addEventListener('click', (e) => {
    e.preventDefault();
    let mensaje = input.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove('hidden');
    resultadoTitulo.textContent = 'El resultado es:';
})

botonDesencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    let mensaje = input.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove('hidden');
})

botonCopiar.addEventListener('click', () => {
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        resultadoTitulo.textContent = 'El texto fue copiado.';
    })
})