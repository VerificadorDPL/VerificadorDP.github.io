function palindromo() {
    const textoEntrada = document.getElementById('inputText').value;
const textoL = textoEntrada.replace(/[^a-z0-9]/g, '');
const textoInvertido = textoL.split('').reverse().join('');

const resultadoE = document.getElementById('resultado');

if (textoL.toLowerCase() === textoInvertido.toLowerCase()) {
    resultadoE.innerText = 'Es un palíndromo';
} else {
    resultadoE.innerText = 'No es un palíndromo';
}
}

// replace sirve para eliminar espacios
//  replace(/[^a-z0-9]/g, '') sirve para eliminar caracteres especiales
// toLowerCase convierte la cadena en minusculas (todos los caracteres de la cadena)