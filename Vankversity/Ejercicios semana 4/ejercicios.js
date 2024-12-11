/* 1. Imprimir los elementos de índice 2 y 4 en el arreglo j */
let m = [200, -100, 45, 78, 32];
function Elementos() {
  return `${m[2]}, ${m[4]}`;
}
alert(`Elementos índice 2 y 4 de arreglo ${m} son: ${Elementos()}`);  

/* 2. Imprimir los elementos "cd" y "gh" en el arreglo f */
let f = ["ab", "cd", "ef", "gh"];
function ElementosF() {
  return `${f[1]}, ${f[3]}`;
}
alert(`Elementos "cd" y "gh": ${ElementosF()}`);

/* 3. Eliminar el elemento de índice 2 en el arreglo */
let arreglo = [1, 2, false];
function eliminarIndice() {
  arreglo.splice(2, 1);
  return arreglo;
}
alert(`Arreglo después de eliminar índice 2: ${eliminarIndice()}`);

/* 4. Imprimir todos los elementos usando foreach en el arreglo ag */
let ag = [10, true, "k200", 20.7];
function ElementosAg() {
  let elementos = "";
  ag.forEach(elemento => elementos += elemento + " ");
  return elementos.trim();
}
alert(`Elementos de aux: ${ElementosAg()}`);

/* 5. Imprimir números impares en el arreglo p */
let p = [17, 4, 64, 79, 109, 112];
function ImparesP() {
  let impares = [];
  p.forEach(num => {
    if (num % 2 !== 0) impares.push(num);
  });
  return impares.join(", ");
}
alert(`Números impares en p: ${ImparesP()}`);

/* 6. Cambiar valores de índice en el arreglo h */
let h = [true, true, false, true, false];
function ValoresH() {
  h[2] = true;
  h[3] = false;
  return h;
}
alert(`Arreglo h después de cambios: ${ValoresH()}`);

// 7. Cambiar elementos "jp" por true y "qr" por 30 en el arreglo j
let j = ["wc", "jp", "zx", "qr"];
function Valoresj() {
  j[j.indexOf("jp")] = true;
  j[j.indexOf("qr")] = 30;
  return j;
}
alert(`Arreglo j después de cambios: ${Valoresj()}`);

/* 8. Recorrer e imprimir elementos en el arreglo */
let arreglo3 = [2, 5, 7, 9];
function recorrerArreglo(arr) {
  let elementos = "";
  arr.forEach(elemento => elementos += elemento + " ");
  return elementos.trim();
}
alert(`Elementos del arreglo: ${recorrerArreglo(arreglo3)}`);

/* 9. Retornar el número de elementos en un arreglo */
function Elementos(arr) {
  return arr.length;
}
alert(`Número de elementos: ${Elementos([2, 5, 7, 9])}`);

/* 10. Usar indexOf para mostrar índices de 44, 89, 70 en el arreglo */
let array1 = [30, 44, 54, 89, 100];
function obtenerIndices() {
  return `Índice de 44: ${array1.indexOf(44)}, Índice de 89: ${array1.indexOf(89)}, Índice de 70: ${array1.indexOf(70)}`;
}
alert(obtenerIndices());

/* 11. Eliminar elementos desde índice 3 hasta 4 en un solo llamado */
let arreg = [34, ["q"], 67, 1, 99, 1 / 2];
function eliminarRango() {
  arreg.splice(3, 2);
  return arreg;
}
alert(`Arreglo después de eliminación: ${eliminarRango()}`);

/* 12. Ordenar frutas y verduras en los arreglos correspondientes */
let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
function ordenarFrutasVerduras() {
  let frutas = ["Pera", "Limón", "Manzana", "Banano"];
  let verduras = ["Cebolla", "Pimentón", "Lechuga", "Perejíl"];
  return { frutas, verduras };
}
let resultado12 = ordenarFrutasVerduras();
alert(`Frutas: ${resultado12.frutas.join(", ")}, Verduras: ${resultado12.verduras.join(", ")}`);

/* 13. Contar letra "b" en nombres */
function contarLetraB(nombres) {
  let contador = 0;
  nombres.forEach(nombre => {
    for (let letra of nombre) {
      if (letra.toLowerCase() === 'b') contador++;
    }
  });
  return contador;
}
alert(`La letra "b" aparece ${contarLetraB(["Patricio", "Roberto", "Bartolomeo"])} veces`);

/* 14. Ordenar números enteros */
function Numeros(arr) {
  return arr.sort((a, b) => a - b);
}
alert(`Arreglo ordenado: ${Numeros([5, 3, 8, 1]).join(", ")}`);

/* 15. Ordenar letras alfabéticamente */
function ordenarLetras(arr) {
  return arr.sort();
}
alert(`Letras ordenadas: ${ordenarLetras(["c", "a", "d", "b"]).join(", ")}`);

/* 16. Mostrar cadena de ADN con mayor Timina (T) */
function adnMayorTimina(adn) {
  return adn.reduce((mayor, cadena) => 
    (cadena.split("T").length > mayor.split("T").length ? cadena : mayor)
  );
}
alert(`Cadena con más Timina: ${adnMayorTimina(["ATT", "ACTT", "AGT"])}`);

/* 17. Encontrar numeros consecutivos en el arreglo */
let arr1 = [5, 7, 90, 2, 5, 3, 8, 99];
function encontrarConse() {
  let conse = [];
  arr1.forEach((num1, i) => {
    arr1.forEach((num2, j) => {
      if (i !== j && num1 + 1 === num2) {
        conse.push(`${num1} y ${num2}`);
      }
    });
  });
  return conse.join(", ");
}
alert(`Números consecutivos: ${encontrarConse()}`);

/* 18. Contar cuántas veces aparece "Maria" */
let arr8 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
function contarMaria() {
  let contador = 0;
  arr8.forEach(nombre => {
    if (nombre === "Maria") contador++;
  });
  return contador;
}
alert(`"Maria" aparece ${contarMaria()} veces`);

/* 19. Sumar los cuadrados de los elementos */
let arr9 = [-2, 8, 99, 1, 7];
function sumaCuadrados() {
  let suma = 0;
  arr9.forEach(num => {
    suma += num ** 2;
  });
  return suma;
}
alert(`Suma de cuadrados: ${sumaCuadrados()}`);

/* 20. Sumar los elementos del arreglo */
let arr2= [15, 7, 9, 12, 1];
function sumaElementos() {
  let suma = 0;
  arr2.forEach(num => {
    suma += num;
  });
  return suma;
}
alert(`Suma de elementos: ${sumaElementos()}`);

/* 21. Función que calcula el promedio de un arreglo de números */
function Promedio(numeros) {
  let suma = 0;
  numeros.forEach(numero => {
    suma += numero;
  });
  return suma / numeros.length;
}

// Ejemplo de uso
let numeros1 = [10, 20, 30, 40, 50];
alert(`El promedio es: ${Promedio(numeros)}`);

// Función que filtra los números impares de un arreglo de números enteros
function obtenerImpares(numeros) {
  let impares = numeros.filter(numero => numero % 2 !== 0);
  return impares;
}

// Ejemplo de uso
let numeros = [10, 21, 32, 43, 54, 65];
alert(`Números impares: ${obtenerImpares(numeros)}`);