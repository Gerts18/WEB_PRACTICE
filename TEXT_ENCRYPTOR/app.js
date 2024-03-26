function display() {
    document.getElementById("img").style.display = "none";
}

let nuevoTexto = '';

function change(letra){
    switch(letra){
        case 'e': 
            nuevoTexto += 'enter'
            break;
        case 'i':
            nuevoTexto += 'imes'
            break;
        case 'a':
            nuevoTexto += 'ai'
            break;
        case 'o':
            nuevoTexto += 'ober'
            break;
        case 'u':
            nuevoTexto += 'ufat'
            break;
        default:
            nuevoTexto += letra;
            break;
    }
}

function unchange(texto){
    let palabras = ['enter', 'imes','ai', 'ober', 'ufat'];
    let letras = ['e', 'i', 'a', 'o', 'u'];
    let textoDesencriptado = texto;
    for (let i = 0; i< palabras.length; i++){
        let regex = new RegExp(palabras[i], 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, letras[i]);
    }
    return textoDesencriptado;
}

const encriptar = () => {
    let texto = document.getElementById('encriptado').value;
    let lista = Array.from(texto)
    lista.forEach(element => change(element));
    document.getElementById('no-encriptado').innerHTML = nuevoTexto;
    display()
    nuevoTexto = '';
}

const desencriptar = () => {
    let texto = document.getElementById('no-encriptado').value;
    nuevoTexto = unchange(texto);
    document.getElementById('encriptado').innerHTML = nuevoTexto;
    nuevoTexto = '';    
}