function obtenerValor(mensaje) {
    return prompt(mensaje);
}

function agregarResultado(texto) {
    const resultados = document.getElementById('resultados');
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    resultados.appendChild(parrafo);
}

let numero_1 = Number(obtenerValor("Ingrese el valor para numero_1:"));
let string_1 = obtenerValor("Ingrese el valor para string_1:");
let numero_2 = Number(obtenerValor("Ingrese el valor para numero_2:"));
let string_2 = obtenerValor("Ingrese el valor para string_2:");
let numero_3 = Number(obtenerValor("Ingrese el valor para numero_3:"));
let string_3 = obtenerValor("Ingrese el valor para string_3:");

// Comparación de numero_1 y string_1
if (numero_1 == string_1 && typeof numero_1 !== typeof string_1) {
    agregarResultado('Las variables numero_1 y string_1 tienen el mismo valor, pero tipos diferentes');
} else {
    agregarResultado('Las variables numero_1 y string_1 no tienen el mismo valor o tienen el mismo tipo');
}

// Comparación de numero_2 y string_2
if (numero_2 === string_2) {
    agregarResultado('Las variables numero_2 y string_2 tienen el mismo valor y el mismo tipo');
} else {
    agregarResultado('Las variables numero_2 y string_2 no tienen el mismo tipo o no tienen el mismo valor');
}

// Comparación de numero_3 y string_3
if (numero_3 == string_3 && typeof numero_3 !== typeof string_3) {
    agregarResultado('Las variables numero_3 y string_3 tienen el mismo valor, pero tipos diferentes');
} else {
    agregarResultado('Las variables numero_3 y string_3 no tienen el mismo valor o tienen el mismo tipo');
}
