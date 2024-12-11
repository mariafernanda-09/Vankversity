/* 1. Función que calcula el área de un rectángulo dado su base y altura */
let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
function area(base, altura) {
  return base * altura;
}
alert(`Área del rectángulo: ${area(base, altura)}`);

/* 2. Función que calcula el volumen de un cubo dado su lado */
let lado = parseFloat(prompt("Ingrese el lado del cubo:"));
function volumen(lado) {
  return lado ** 3;
}
alert(`Volumen del cubo: ${volumen(lado)}`);

/* 3. Función que recibe un nombre y retorna una cadena "Hola Nombre" */
let nom = prompt("Ingrese su nombre:");
function saludar(nom) {
  return `Hola ${nom}`;
}
alert(saludar(nom));

/* 4. Función que muestra los números de 1 a n */
let n = parseInt(prompt("Ingrese el valor de n:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número mayor que 0.");
} else {
  function mostrarNum(n) {
    let numeros = "";
    for (let i = 1; i <= n; i++) {
      numeros += i + " ";
    }
    return numeros;
  }

  alert(`Números del 1 al ${n}: ${mostrarNum(n)}`);
}


/* 5. Función que calcula el factorial de un número n */
let numFactorial = parseInt(prompt("Ingrese el valor de n para calcular el factorial:"));
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
alert(`Factorial de ${numFactorial}: ${factorial(numFactorial)}`);

/* 6. Función esVocal() que determina si un carácter es una vocal */
let caracter = prompt("Ingrese un carácter:");

function Vocal(caracter) {
  let vocales = "aeiouAEIOU";
  return vocales.includes(caracter);
}

if (Vocal(caracter)) {
  alert(`El carácter "${caracter}" es una vocal.`);
} else {
  alert(`El carácter "${caracter}" no es una vocal.`);
}

/* 7. Función que convierte una cadena a mayúsculas */
let cadena = prompt("Ingrese una cadena de texto:");
function convertirMayus(cadena) {
  return cadena.toUpperCase();
}
alert(`Cadena en mayúsculas: ${convertirMayus(cadena)}`);

/* 8. Función obtenerPrimeraLetra() que devuelve la primera letra de un nombre */
let PrimLetra = prompt("Ingrese un nombre:");

function PrimeraLetra(nombre) {
  return nombre[0];
}

alert(`Primera letra de ${PrimLetra}: ${PrimeraLetra(PrimLetra)}`);

/* 9. Función que cuenta la cantidad de vocales en una cadena */
let cadVoca = prompt("Ingrese una cadena de texto:");
function contarVocales(cadena) {
  let vocales = "aeiouAEIOU";
  let contador = 0;
  for (let char of cadena) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
}
alert(`Cantidad de vocales en la cadena: ${contarVocales(cadVoca)}`);

/* 10. Función que elimina las vocales de una cadena */
let cadenaSinVocales = prompt("Ingrese una cadena de texto:");
function eliminarVocales(cadena) {
  let resultado = "";
  let vocales = "aeiouAEIOU";
  for (let char of cadena) {
    if (!vocales.includes(char)) {
      resultado += char;
    }
  }
  return resultado;
}
alert(`Cadena sin vocales: ${eliminarVocales(cadenaSinVocales)}`);