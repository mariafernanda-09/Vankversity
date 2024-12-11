// 1. Mostrar precios de productos en un supermercado
function mostrarPreciosSupermercado() {
    let productos = { Papa: 1000, Arroz: 2000, Lentejas: 1500, Aceite: 5000 };
    for (let producto in productos) {
      console.log(`${producto}: $${productos[producto]}`);
    }
  }
  
  // 2. Agregar claves a un objeto vacío
  function agregarClavesObjeto() {
    let objeto = {};
    objeto.nombre = "Juan";
    objeto.edad = 30;
    objeto.profesion = "Ingeniero";
    console.log(objeto);
  }
  
  // 3. Modificar claves de un objeto
  function modificarObjeto() {
    let objeto = { password: "admin30905", rol: "admin", edad: 20 };
    objeto.password = "user_7833";
    objeto.rol = "user";
    objeto.edad = 34;
    console.log(objeto);
  }
  
  // 4. Mostrar valores pares de un objeto
  function mostrarParesObjeto() {
    let numeros = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };
    for (let clave in numeros) {
      if (numeros[clave] % 2 === 0) {
        console.log(`${clave}: ${numeros[clave]}`);
      }
    }
  }
  
  // 5. Contar usuarios habilitados en un objeto
  function contarUsuariosHabilitados() {
    let usuarios = {
      183344: "habilitado",
      354625: "habilitado",
      6762442: "inhabilitado",
      88552: "inhabilitado",
      438276: "habilitado",
    };
    let habilitados = 0;
    for (let clave in usuarios) {
      if (usuarios[clave] === "habilitado") habilitados++;
    }
    console.log(`Usuarios habilitados: ${habilitados}`);
  }
  
  // 6. Recorrer un arreglo dentro de un objeto
  function recorrerArregloEnObjeto() {
    let objeto = { numeros: [45, 78, 22, 89, 8] };
    objeto.numeros.forEach(numero => console.log(numero));
  }
  
  // 7. Eliminar una clave de un objeto
  function eliminarClaveObjeto() {
    let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };
    delete objeto[60];
    console.log(objeto);
  }
  
  // 8. Recorrer objetos internos de un objeto
  function recorrerObjetosInternos() {
    let datos = {
      162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
      4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
      786353: { nombres: "Raul", apellidos: "Castro", edad: 80 },
    };
    for (let id in datos) {
      for (let clave in datos[id]) {
        console.log(`${clave}: ${datos[id][clave]}`);
      }
      console.log("---------");
    }
  }
  
  // 9. Consultar precio de un producto
  function consultarPrecioProducto() {
    let productos = {
      Papa: 1000,
      Arroz: 2000,
      Lentejas: 1500,
      Aceite: 5000,
      Azúcar: 3000,
    };
    let producto = prompt("Ingrese el nombre del producto:");
    console.log(
      productos[producto] ? `${producto}: $${productos[producto]}` : "Producto no encontrado"
    );
  }
  
  // 10. Manejar documentos y nombres de usuarios
  function manejarUsuarios() {
    let usuarios = {
      123456: "Juan",
      789012: "Maria",
      345678: "Pedro",
      901234: "Ana",
      567890: "Carlos",
    };
    for (let doc in usuarios) {
      console.log(`Nombre: ${usuarios[doc]}`);
    }
  }
  
  // 11. Mostrar países por continente
  function mostrarPaisesPorContinente() {
    let continentes = {
      América: ["Colombia", "Argentina", "Brasil", "México", "Chile"],
      Europa: ["España", "Francia", "Alemania", "Italia", "Portugal"],
      Asia: ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
      África: ["Sudáfrica", "Nigeria", "Egipto", "Kenia", "Marruecos"],
      Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Tonga", "Samoa"],
    };
    let continente = prompt("Ingrese el nombre de un continente:");
    console.log(
      continentes[continente] ? continentes[continente].join(", ") : "Continente no encontrado"
    );
  }
  
  // 12. Gestionar estudiantes
  function gestionarEstudiantes() {
    let estudiantes = [
      { nombre: "Juan", edad: 20, matricula: 123, calificaciones: [3, 4, 5] },
      { nombre: "Maria", edad: 22, matricula: 456, calificaciones: [4, 4.5, 5] },
      { nombre: "Pedro", edad: 19, matricula: 789, calificaciones: [2.5, 3, 3.5] },
    ];
  
    function calcularPromedio(matricula) {
      let estudiante = estudiantes.find(e => e.matricula === matricula);
      if (estudiante) {
        let promedio =
          estudiante.calificaciones.reduce((a, b) => a + b, 0) /
          estudiante.calificaciones.length;
        return promedio;
      }
      return "Estudiante no encontrado";
    }
  
    function actualizarCalificaciones(matricula, nuevasCalificaciones) {
      let estudiante = estudiantes.find(e => e.matricula === matricula);
      if (estudiante) {
        estudiante.calificaciones = nuevasCalificaciones;
        console.log("Calificaciones actualizadas");
      } else {
        console.log("Estudiante no encontrado");
      }
    }
  
    console.log(calcularPromedio(123));
    actualizarCalificaciones(123, [5, 5, 5]);
    console.log(calcularPromedio(123));
  }
  
  // 12. Gestionar estudiantes
  function gestionarEstudiantes() {
    let estudiantes = [
      { nombre: "Juan", edad: 20, matricula: 123, calificaciones: [3, 4, 5] },
      { nombre: "Maria", edad: 22, matricula: 456, calificaciones: [4, 4.5, 5] },
      { nombre: "Pedro", edad: 19, matricula: 789, calificaciones: [2.5, 3, 3.5] },
    ];
  
    function calcularPromedio(matricula) {
      let estudiante = estudiantes.find(e => e.matricula === matricula);
      if (estudiante) {
        let promedio =
          estudiante.calificaciones.reduce((a, b) => a + b, 0) /
          estudiante.calificaciones.length;
        return promedio;
      }
      return "Estudiante no encontrado";
    }
  
    function actualizarCalificaciones(matricula, nuevasCalificaciones) {
      let estudiante = estudiantes.find(e => e.matricula === matricula);
      if (estudiante) {
        estudiante.calificaciones = nuevasCalificaciones;
        console.log("Calificaciones actualizadas");
      } else {
        console.log("Estudiante no encontrado");
      }
    }
  
    console.log(calcularPromedio(123));
    actualizarCalificaciones(123, [5, 5, 5]);
    console.log(calcularPromedio(123));
  }
  
  // 13. Gestión de citas en una clínica
  function gestionarCitas() {
    let citas = {
      123456: { nombres: "Juan Perez", fecha: "2024-11-15", hora: "10:00 AM" },
      789012: { nombres: "Maria Gomez", fecha: "2024-11-16", hora: "2:00 PM" },
    };
  
    let documento = prompt("Ingrese su documento:");
    if (citas[documento]) {
      console.log(
        `Cita de ${citas[documento].nombres}: ${citas[documento].fecha} a las ${citas[documento].hora}`
      );
      let cambiar = prompt("¿Desea cambiar la fecha/hora de su cita? (sí/no)");
      if (cambiar.toLowerCase() === "sí") {
        citas[documento].fecha = prompt("Ingrese nueva fecha:");
        citas[documento].hora = prompt("Ingrese nueva hora:");
        console.log("Cita actualizada con éxito:");
        console.log(
          `Cita de ${citas[documento].nombres}: ${citas[documento].fecha} a las ${citas[documento].hora}`
        );
      }
    } else {
      console.log("Documento no encontrado.");
    }
  }
  
  // 14. Sistema de stock de productos
  function gestionarStock() {
    let productos = [
      { nombre: "Papa", stock: 10, umbral: 5 },
      { nombre: "Arroz", stock: 2, umbral: 5 },
      { nombre: "Aceite", stock: 7, umbral: 3 },
    ];
  
    function verificarStock() {
      productos.forEach(producto => {
        if (producto.stock < producto.umbral) {
          console.log(`Alerta: El stock de ${producto.nombre} está bajo.`);
        }
      });
    }
  
    function actualizarStock(nombre, cantidad) {
      let producto = productos.find(p => p.nombre === nombre);
      if (producto) {
        producto.stock += cantidad;
        console.log(`Stock actualizado: ${producto.nombre}: ${producto.stock}`);
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    verificarStock();
    actualizarStock("Papa", 5);
    verificarStock();
  }
  
  // 15. Gestión de inventario de ropa
  function gestionarInventarioRopa() {
    let inventario = [];
  
    function agregarProducto(producto) {
      if (inventario.find(p => p.codigo === producto.codigo)) {
        console.log("Error: El código del producto ya existe.");
      } else {
        inventario.push(producto);
        console.log("Producto agregado.");
      }
    }
  
    function editarProducto(codigo, nuevoProducto) {
      let index = inventario.findIndex(p => p.codigo === codigo);
      if (index !== -1) {
        inventario[index] = { ...inventario[index], ...nuevoProducto };
        console.log("Producto editado.");
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    function eliminarProducto(codigo) {
      let index = inventario.findIndex(p => p.codigo === codigo);
      if (index !== -1) {
        inventario.splice(index, 1);
        console.log("Producto eliminado.");
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    function mostrarProductos() {
      console.log("Inventario:", inventario);
    }
  
    agregarProducto({ nombre: "Camiseta", categoria: "Ropa", precio: 15000, cantidad: 10, codigo: 1 });
    agregarProducto({ nombre: "Jeans", categoria: "Ropa", precio: 45000, cantidad: 5, codigo: 2 });
    editarProducto(1, { precio: 16000 });
    mostrarProductos();
    eliminarProducto(2);
    mostrarProductos();
  }
  
  // 16. Gestión de vehículos en un parqueadero
  function gestionarParqueadero() {
    let vehiculos = [];
  
    function ingresarVehiculo(vehiculo) {
      vehiculos.push({ ...vehiculo, horaEntrada: Date.now() });
      console.log("Vehículo ingresado.");
    }
  
    function retirarVehiculo(placa) {
      let index = vehiculos.findIndex(v => v.placa === placa);
      if (index !== -1) {
        let tiempo = (Date.now() - vehiculos[index].horaEntrada) / (1000 * 60 * 60);
        let costo = Math.ceil(tiempo) * 2500;
        console.log(`Tiempo estacionado: ${Math.ceil(tiempo)} horas. Total a pagar: $${costo}`);
        vehiculos.splice(index, 1);
      } else {
        console.log("Vehículo no encontrado.");
      }
    }
  
    ingresarVehiculo({ marca: "Toyota", placa: "ABC123" });
    setTimeout(() => retirarVehiculo("ABC123"), 3600000); // Simula 1 hora
  }
  
  // 17. Administración de empleados y horas trabajadas
  function administrarEmpleados() {
    let empleados = [
      { nombre: "Juan", id: 1, horasTrabajadas: [8, 8, 8, 8, 8] },
      { nombre: "Maria", id: 2, horasTrabajadas: [10, 10, 10, 10, 2] },
    ];
  
    function agregarHoras(id, horas) {
      let empleado = empleados.find(e => e.id === id);
      if (empleado) {
        empleado.horasTrabajadas.push(horas);
        console.log("Horas agregadas.");
      } else {
        console.log("Empleado no encontrado.");
      }
    }
  
    function calcularPago(id, tarifa) {
      let empleado = empleados.find(e => e.id === id);
      if (empleado) {
        let totalHoras = empleado.horasTrabajadas.reduce((a, b) => a + b, 0);
        console.log(`Total a pagar: $${totalHoras * tarifa}`);
      } else {
        console.log("Empleado no encontrado.");
      }
    }
  
    function empleadosConHorasExtras() {
      return empleados.filter(e => e.horasTrabajadas.reduce((a, b) => a + b, 0) > 40);
    }
  
    agregarHoras(1, 5);
    calcularPago(1, 10000);
    console.log(empleadosConHorasExtras());
  }
  
  // 18. Gestión de reservas en un hotel
  function gestionarReservasHotel() {
    let habitaciones = [
      { numero: 1, tipo: "Suite", disponible: true, reservas: [] },
      { numero: 2, tipo: "Doble", disponible: true, reservas: [] },
    ];
  
    function reservarHabitacion(numero, cliente, diasReservados) {
      let habitacion = habitaciones.find(h => h.numero === numero);
      if (habitacion && habitacion.disponible) {
        habitacion.disponible = false;
        habitacion.reservas.push({ cliente, diasReservados });
        console.log("Reserva realizada.");
      } else {
        console.log("Habitación no disponible.");
      }
    }
  
    function cancelarReserva(numero, cliente) {
      let habitacion = habitaciones.find(h => h.numero === numero);
      if (habitacion) {
        habitacion.reservas = habitacion.reservas.filter(r => r.cliente !== cliente);
        habitacion.disponible = habitacion.reservas.length === 0;
        console.log("Reserva cancelada.");
      }
    }
  
    function habitacionesDisponibles() {
      return habitaciones.filter(h => h.disponible);
    }
  
    reservarHabitacion(1, "Juan", 3);
    console.log(habitacionesDisponibles());
    cancelarReserva(1, "Juan");
    console.log(habitacionesDisponibles());
  }