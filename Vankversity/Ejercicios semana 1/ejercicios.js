/* 1.Calcular la edad en un futuro */
const edadActual = parseInt(prompt("Ingrese su edad actual:"));
const añosFuturos = parseInt(prompt("¿Cuántos años desea sumar?"));
const edadFutura = edadActual + añosFuturos;
alert(`En ${añosFuturos} años, tendrá ${edadFutura} años.`);

/* 2.Operaciones matemáticas básicas */
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

alert(`Producto: ${numero1 * numero2}`);
alert(`Módulo: ${numero1 % numero2}`);
alert(`Cociente: ${numero1 / numero2}`);
alert(`Suma: ${numero1 + numero2}`);
alert(`Resta: ${numero1 - numero2}`);

/* 3.Valor de electrodoméstico a crédito */
const precio = parseFloat(prompt("Ingrese el precio del electrodoméstico:"));
const meses = parseInt(prompt("Ingrese la cantidad de meses para el crédito:"));

const interes = 0.05 * meses;
const precioFinal = precio * (1 + interes);
const cuota = precioFinal / meses;

alert(`El valor de las cuotas es de: ${cuota.toFixed(2)}`);

/* 4.Área de un triángulo */
const base = parseFloat(prompt("Ingrese la base del triángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
const areaT = (base * altura) / 2;
alert(`El área del triángulo es: ${areaT}`);

/* 5.Área y perímetro de un círculo */
const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
const areaC = Math.PI * Math.pow(radio, 2);
const perimetro = 2 * Math.PI * radio;

alert(`Área: ${areaC}`);
alert(`Perímetro: ${perimetro}`);

/* 6.Volumen de un cubo */
const lado = parseFloat(prompt("Ingrese el lado del cubo:"));
const volumenC = Math.pow(lado, 3);
alert(`El volumen del cubo es: ${volumenC}`);

/* 7.Precio con IVA */
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const precioFinalConIVA = precioProducto * 1.19;
alert(`El precio final con IVA es: ${precioFinalConIVA.toFixed(2)}`);

/* 8.Precio con descuento */
const precioDescuento = precioProducto * 0.9;
alert(`El precio final con descuento es: ${precioDescuento.toFixed(2)}`);

/* 9.Calcular porcentaje */
const cantidad = parseFloat(prompt("Ingrese la cantidad:"));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));
const resultado = (cantidad * porcentaje) / 100;
alert(`El ${porcentaje}% de ${cantidad} es: ${resultado}`);

/* 10.Valor absoluto */
const numero = parseFloat(prompt("Ingrese un número real:"));
const valorAbsoluto = Math.abs(numero);
alert(`El valor absoluto es: ${valorAbsoluto}`);

/* 11.Lanzamiento de dos dados */
const dado1 = Math.floor(Math.random() * 6) + 1;
const dado2 = Math.floor(Math.random() * 6) + 1;
const suma = dado1 + dado2;
alert(`Resultado de los dados: ${dado1} y ${dado2}, suma: ${suma}`);

/* 12.Conversión de Celsius a Fahrenheit */
const celsius = parseFloat(prompt("Ingrese la temperatura en °C:"));
const fahrenheit = (celsius * 9/5) + 32;
alert(`La temperatura en Fahrenheit es: ${fahrenheit}`);

/* 13.Factorial de 5 */
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
alert(`El factorial de 5 es: ${factorial}`);

/* 14.Número aleatorio en un rango */
const min = parseInt(prompt("Ingrese el valor mínimo:"));
const max = parseInt(prompt("Ingrese el valor máximo:"));
const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
alert(`Número aleatorio entre ${min} y ${max}: ${numAleatorio}`);

/* 15.Conversión de segundos a horas y minutos */
const seg = parseInt(prompt("Ingrese la cantidad de segundos:"));
const horas = Math.floor(seg / 3600);
const minutos = Math.floor((seg % 3600) / 60);
alert(`${seg} segundos son ${horas} horas y ${minutos} minutos.`);

/* 16.Fórmula general de la ecuación cuadrática */
const a = parseFloat(prompt("Ingrese el valor de a:"));
const b = parseFloat(prompt("Ingrese el valor de b:"));
const c = parseFloat(prompt("Ingrese el valor de c:"));

const discriminante = Math.pow(b, 2) - 4 * a * c;

if (discriminante >= 0) {
  const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
} else {
  console.log("No hay soluciones reales.");
}