function display() {
    document.getElementById("img").style.display = "none";
}

let nuevoTexto = '';
let textArea1;
let textArea2;

function inicializador(){
     textArea1 = document.getElementById('encriptado');
     textArea2 = document.getElementById('no-encriptado');
}

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
    let texto = textArea1.value;
    texto = texto.toLowerCase();
    let lista = Array.from(texto);
    lista.forEach(element => change(element));
    textArea2.value = nuevoTexto;
    display()
    nuevoTexto = '';
    textArea1.value = '';
}

const desencriptar = () => {
    let texto = textArea2.value;
    texto = texto.toLowerCase();
    nuevoTexto = unchange(texto);
    textArea1.value = nuevoTexto;
    nuevoTexto = '';   
    textArea2.value = ''; 
}