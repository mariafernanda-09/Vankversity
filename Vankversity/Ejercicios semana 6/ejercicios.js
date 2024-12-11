/* ejercicios de clase*/
// Clase Avion
class Avion {
  // Atributo estático
  static totalAviones = 0;

  // Constructor con atributos de objeto
  constructor(modelo, capacidad) {
      this.modelo = modelo; // Atributo de objeto
      this.capacidad = capacidad; // Atributo de objeto
      Avion.totalAviones++; // Incrementa el atributo estático
  }

  // Método de objeto: despegar
  despegar() {
      console.log(`El avión modelo ${this.modelo} está despegando.`);
  }

  // Método de objeto: aterrizar
  aterrizar() {
      console.log(`El avión modelo ${this.modelo} está aterrizando.`);
  }

  // Método estático: mostrarTotalAviones
  static mostrarTotalAviones() {
      console.log(`Total de aviones creados: ${Avion.totalAviones}`);
  }

  // Método estático: verificarCapacidadMáxima
  static verificarCapacidadMaxima(capacidad) {
      const capacidadMaxima = 300;
      if (capacidad > capacidadMaxima) {
          console.log("Capacidad excedida.");
      } else {
          console.log("Capacidad dentro del límite.");
      }
  }
}

// Creando instancias de la clase Avion
const avion1 = new Avion("Boeing 737", 180);
const avion2 = new Avion("Airbus A320", 220);

// Usando métodos de objeto
avion1.despegar();
avion2.aterrizar();

// Usando métodos estáticos
Avion.mostrarTotalAviones();
Avion.verificarCapacidadMaxima(350);
Avion.verificarCapacidadMaxima(200);





// 1. Crear una clase Persona con un atributo nombre y un método caminar()
class Persona {
  constructor(nombre) {
      this.nombre = nombre;
  }
  caminar() {
      console.log(`${this.nombre} está caminando.`);
  }
}
const persona1 = new Persona("Juan");
persona1.caminar();

// 2. Crear una clase Contador con un atributo estático cuenta y un método estático incrementar()
class Contador {
  static cuenta = 0;
  static incrementar() {
      Contador.cuenta++;
  }
}
Contador.incrementar();
Contador.incrementar();
console.log(`Cuenta actual: ${Contador.cuenta}`);

// 3. Crear una clase CuentaBancaria con saldo privado y métodos públicos para depositar y retirar
class CuentaBancaria {
  #saldo = 0;
  depositar(cantidad) {
      this.#saldo += cantidad;
  }
  retirar(cantidad) {
      if (cantidad <= this.#saldo) {
          this.#saldo -= cantidad;
      } else {
          console.log("Fondos insuficientes.");
      }
  }
  getSaldo() {
      return this.#saldo;
  }
}
const cuenta = new CuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(50);
console.log(`Saldo actual: ${cuenta.getSaldo()}`);

// 4. Crear una clase Animal con subclases Perro y Gato que sobrescriban un método
class Animal {
  hacerSonido() {
      console.log("El animal hace un sonido.");
  }
}
class Perro extends Animal {
  hacerSonido() {
      console.log("El perro ladra.");
  }
}
class Gato extends Animal {
  hacerSonido() {
      console.log("El gato maúlla.");
  }
}
const perro = new Perro();
const gato = new Gato();
perro.hacerSonido();
gato.hacerSonido();

// 5. Crear una clase Vehiculo con subclases Carro y Bicicleta
class Vehiculo {
  constructor(peso, velocidadMaxima) {
      this.peso = peso;
      this.velocidadMaxima = velocidadMaxima;
  }
  mover() {
      console.log("El vehículo se está moviendo.");
  }
}
class Carro extends Vehiculo {
  mover() {
      console.log("El carro está moviéndose rápidamente.");
  }
}
class Bicicleta extends Vehiculo {
  mover() {
      console.log("La bicicleta está moviéndose lentamente.");
  }
}
const carro = new Carro(1200, 180);
const bicicleta = new Bicicleta(15, 25);
carro.mover();
bicicleta.mover();

// 6. Crear una clase Universidad con un atributo estático numEstudiantes y un método estático registrarEstudiante()
class Universidad {
  static numEstudiantes = 0;
  static registrarEstudiante() {
      Universidad.numEstudiantes++;
  }
}
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
console.log(`Número de estudiantes: ${Universidad.numEstudiantes}`);

// 7. Crear una clase Coche con un método privado encenderMotor() y un método público conducir()
class Coche {
  #encenderMotor() {
      console.log("El motor está encendido.");
  }
  conducir() {
      this.#encenderMotor();
      console.log("El coche está en movimiento.");
  }
}
const coche = new Coche();
coche.conducir();

// 8. Crear una clase Empleado con atributos encapsulados
class Empleado {
  #nombre;
  #salario;
  constructor(nombre, salario) {
      this.#nombre = nombre;
      this.#salario = salario;
  }
  trabajar() {
      console.log(`${this.#nombre} está trabajando.`);
  }
  getSalario() {
      return this.#salario;
  }
}
const empleado = new Empleado("Luis", 3000);
empleado.trabajar();
console.log(`Salario: ${empleado.getSalario()}`);

// 9. Crear una clase Empleado y una subclase Gerente que sobrescriba un método trabajar()
class Gerente extends Empleado {
  trabajar() {
      console.log("El gerente está supervisando.");
  }
}
const gerente = new Gerente("Ana", 5000);
gerente.trabajar();

// 10. Crear una clase InstrumentoMusical con un método tocar() que debe ser implementado por clases hijas
class InstrumentoMusical {
  tocar() {
      throw new Error("Este método debe ser implementado por subclases.");
  }
}
class Guitarra extends InstrumentoMusical {
  tocar() {
      console.log("La guitarra está siendo tocada.");
  }
}
const guitarra = new Guitarra();
guitarra.tocar();

// 11. Crear una clase Vehiculo con atributos y métodos públicos y privados
class VehiculoPrivado {
  #modelo;
  constructor(marca, modelo) {
      this.marca = marca;
      this.#modelo = modelo;
  }
  #encenderMotor() {
      console.log("Motor encendido.");
  }
  arrancar() {
      this.#encenderMotor();
      console.log(`El vehículo ${this.marca} está en movimiento.`);
  }
}
const vehiculoPrivado = new VehiculoPrivado("Toyota", "Corolla");
vehiculoPrivado.arrancar();

// 12. Crear una clase Escuela con un atributo estático numEstudiantes que se incremente con cada Estudiante
class Escuela {
  static numEstudiantes = 0;
  constructor() {
      Escuela.numEstudiantes++;
  }
}
const estudiante1 = new Escuela();
const estudiante2 = new Escuela();
console.log(`Número de estudiantes: ${Escuela.numEstudiantes}`);

// 13. Crear una clase Cliente con un método privado calcularDescuento()
class Cliente {
  #saldo;
  constructor(saldo) {
      this.#saldo = saldo;
  }
  #calcularDescuento(porcentaje) {
      return this.#saldo * (porcentaje / 100);
  }
  aplicarDescuento(porcentaje) {
      const descuento = this.#calcularDescuento(porcentaje);
      this.#saldo -= descuento;
      console.log(`Descuento aplicado. Saldo actual: ${this.#saldo}`);
  }
}
const cliente = new Cliente(1000);
cliente.aplicarDescuento(10);

// 14. Crear una clase Producto con métodos para acceder y modificar el precio
class Producto {
  #precio;
  setPrecio(precio) {
      this.#precio = precio;
  }
  getPrecio() {
      return this.#precio;
  }
}
const producto = new Producto();
producto.setPrecio(250);
console.log(`Precio del producto: ${producto.getPrecio()}`);

// 15. Crear una clase base Animal con un método hacerSonido() y dos subclases Perro y Gato que sobrescriban este método
class AnimalBase {
  hacerSonido() {
      console.log("El animal hace un sonido.");
  }
}
class PerroBase extends AnimalBase {
  hacerSonido() {
      console.log("El perro ladra.");
  }
}
class GatoBase extends AnimalBase {
  hacerSonido() {
      console.log("El gato maúlla.");
  }
}
const perroBase = new PerroBase();
const gatoBase = new GatoBase();
perroBase.hacerSonido();
gatoBase.hacerSonido();

// 16. Crear una clase base Vehiculo con un método mover(), y subclases Coche y Bicicleta que implementen este método de forma diferente
class VehiculoBase {
  mover() {
      console.log("El vehículo se mueve.");
  }
}
class CocheBase extends VehiculoBase {
  mover() {
      console.log("El coche acelera.");
  }
}
class BicicletaBase extends VehiculoBase {
  mover() {
      console.log("La bicicleta pedalea.");
  }
}
const cocheBase = new CocheBase();
const bicicletaBase = new BicicletaBase();
cocheBase.mover();
bicicletaBase.mover();

// 17. Crear una clase base Empleado con un atributo estático totalEmpleados que se incremente con cada nuevo empleado
class EmpleadoBase {
  static totalEmpleados = 0;
  constructor(nombre) {
      this.nombre = nombre;
      EmpleadoBase.totalEmpleados++;
  }
}
class GerenteBase extends EmpleadoBase {}
const empleadoBase1 = new EmpleadoBase("Carlos");
const gerenteBase1 = new GerenteBase("Sofía");
console.log(`Total de empleados: ${EmpleadoBase.totalEmpleados}`);

// 18. Crear una clase Persona con un atributo privado edad y una subclase Empleado que use setEdad()
class PersonaBase {
  #edad;
  setEdad(edad) {
      this.#edad = edad;
  }
  getEdad() {
      return this.#edad;
  }
}
class EmpleadoExtendido extends PersonaBase {}
const empleadoExtendido = new EmpleadoExtendido();
empleadoExtendido.setEdad(30);
console.log(`Edad del empleado: ${empleadoExtendido.getEdad()}`);

// 19. Crear una clase CuentaBancaria con un atributo privado saldo y un método privado actualizarSaldo()
class CuentaBancariaPrivada {
  #saldo;
  constructor(saldoInicial = 0) {
      this.#saldo = saldoInicial;
  }
  #actualizarSaldo(cantidad) {
      this.#saldo += cantidad;
  }
  depositar(cantidad) {
      this.#actualizarSaldo(cantidad);
  }
  retirar(cantidad) {
      if (cantidad <= this.#saldo) {
          this.#actualizarSaldo(-cantidad);
      } else {
          console.log("Fondos insuficientes.");
      }
  }
  getSaldo() {
      return this.#saldo;
  }
}
const cuentaPrivada = new CuentaBancariaPrivada();
cuentaPrivada.depositar(500);
cuentaPrivada.retirar(200);
console.log(`Saldo actual: ${cuentaPrivada.getSaldo()}`);