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

const encriptar = () => {
    let texto = document.getElementById('encriptado').value;
    let lista = Array.from(texto)
    lista.forEach(element => change(element));
    document.getElementById('no-encriptado').innerHTML = nuevoTexto;
    display()
}

const desencriptar = () => {
    let texto = document.getElementById('no-encriptado').value;
}