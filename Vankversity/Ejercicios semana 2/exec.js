/* en esta parte se prueban los ejercicios */

function exec() {
    let nCuadrados = parseInt(prompt("Ingrese el valor de n para calcular la suma de cuadrados:"));
    let sumaCuadrados = 0;
    for (let i = 1; i <= nCuadrados; i++) {
        sumaCuadrados += i * i;
    }
    alert(`La suma de los cuadrados de los números entre 1 y ${nCuadrados} es: ${sumaCuadrados}`);
}

/* Programa 1a: Generar una cadena de ADN con una única base indicada por el usuario */
function CadenaUnica() {
    let base = prompt("Ingrese la base (A, T, C, G):");
    
    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
  
    if (!["A", "T", "C", "G"].includes(base)) {
        alert("Base no válida. Debe ser A, T, C o G.");
        return;
    }
  
    let cadena = base.repeat(longitud);
    
    alert(`Cadena generada: ${cadena}`);
  }
  
  /* Programa 1b: Generar una cadena de ADN con dos bases seleccionadas aleatoriamente */
  function CadenaAleatoria() {
    // Posibles bases de ADN
    let bases = ["A", "T", "C", "G"];
    
    // Selecciona dos bases aleatoriamente, asegurándose de que sean diferentes
    let base1 = bases[Math.floor(Math.random() * bases.length)];
    let base2 = bases[Math.floor(Math.random() * bases.length)];
    while (base1 === base2) {
        base2 = bases[Math.floor(Math.random() * bases.length)];
    }
  
    // Solicita la longitud de la cadena
    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
    
    // Genera la cadena alternando entre base1 y base2 aleatoriamente
    let cadena = "";
    for (let i = 0; i < longitud; i++) {
        cadena += Math.random() < 0.5 ? base1 : base2;
    }
  
    // Muestra la cadena generada en la consola
    alert(`Cadena generada: ${cadena}`);
  }
  
  /* Programa 1c: Generar una cadena con longitud múltiplo de 10 y distribución específica de bases*/
  function CadenaDistribuida() {
    // Solicita una longitud que sea múltiplo de 10
    let longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
  
    // Solicita nuevamente si la longitud no es múltiplo de 10
    while (longitud % 10 !== 0) {
        alert("La longitud debe ser múltiplo de 10.");
        longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
    }
  
    // Calcula las cantidades de cada base según la proporción dada
    let cantidadGuanina = longitud / 10; // Guanina (G)
    let cantidadCitosina = cantidadGuanina * 4; // Citosina (C)
    let cantidadTimina = cantidadGuanina * 2; // Timina (T)
    let cantidadAdenina = cantidadGuanina * 3; // Adenina (A)
  
    // Genera la cadena con la distribución de bases
    let cadena = "G".repeat(cantidadGuanina) + 
                 "C".repeat(cantidadCitosina) + 
                 "T".repeat(cantidadTimina) + 
                 "A".repeat(cantidadAdenina);
  
    // Mezcla la cadena aleatoriamente
    cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');
  
    // Muestra la cadena generada en la consola
    alert(`Cadena generada: ${cadena}`);
  }
  
  /* Programa 1d: Generar una cadena de ADN con dos bases seleccionadas aleatoriamente y porcentaje específico*/
  function CadenaConPorcentaje() {
    // Selección de las bases aleatorias
    let bases = ["A", "T", "C", "G"];
    let base1 = bases[Math.floor(Math.random() * bases.length)];
    let base2 = bases[Math.floor(Math.random() * bases.length)];
    while (base1 === base2) {
        base2 = bases[Math.floor(Math.random() * bases.length)];
    }
  
    // Solicita la longitud de la cadena
    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
    
    // Solicita el porcentaje de la primera base
    let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ${base1} (entre 1% y 99%):`));
  
    // Verifica que el porcentaje esté entre 1 y 99
    while (porcentaje <= 0 || porcentaje >= 100) {
        alert("El porcentaje debe estar entre 1% y 99%");
        porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ${base1} (entre 1% y 99%):`));
    }
  
    // Calcula la cantidad de cada base según el porcentaje
    let cantidadBase1 = Math.floor((porcentaje / 100) * longitud);
    let cantidadBase2 = longitud - cantidadBase1;
  
    // Genera la cadena con la proporción dada
    let cadena = base1.repeat(cantidadBase1) + base2.repeat(cantidadBase2);
  
    // Mezcla la cadena aleatoriamente
    cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');
  
    // Muestra la cadena generada en la consola
    alert(`Cadena generada: ${cadena}`);
  }