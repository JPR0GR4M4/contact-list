let listaContactos = [];

listaContactos.push({
  nombre: "Juan Pablo Caro Suárez",
  telefono: "+57 323 228 3185",
  correo: "juan144pa@hotmail.com",
});
listaContactos.push({
  nombre: "Andres Garzón Aguirre ",
  telefono: "+57 312 239 5234",
  correo: "adga324@gmail.com",
});
listaContactos.push({
  nombre: "Brandon Úzeta Sánchez",
  telefono: "+57 321 342 3652",
  correo: "brandypandy@hotmail.com",
});
listaContactos.push({
  nombre: "Catalina Sepulveda Rámos",
  telefono: "+57 311 535 5463",
  correo: "catasera111@gmail.com",
});
listaContactos.push({
  nombre: "David Linares Ríos",
  telefono: "+57 314 832 3492",
  correo: "david.lrrr@gmail.com",
});
listaContactos.push({
  nombre: "Efrain Castro Orrego",
  telefono: "+57 322 439 8232",
  correo: "efrarfa3e@gmail.com",
});
listaContactos.push({
  nombre: "Francisca Gómez Johnson",
  telefono: "+57 310 677 2342",
  correo: "princess.frago.johnson@outlook.com",
});
listaContactos.push({
  nombre: "Luisa Pantano Martínez",
  telefono: "+57 313 345 67890",
  correo: "luisapama@yahoo.com.co",
});
listaContactos.push({
  nombre: "Oscar Eduardo Rodríguez",
  telefono: "+57 317 913 4567",
  correo: "pablorodriguez@gmail.com",
});
listaContactos.push({
  nombre: "Paula Natalia Brown",
  telefono: "+57 315 678 9012",
  correo: "paula.brown@hotmail.com",
});

// Funcion para crear un contacto //*

function agregarContacto(nuevoContacto, listaContactos) {
  listaContactos.push(nuevoContacto);
}

let nuevoContacto = {
  nombre: "Zamara Martin Munar",
  telefono: "+57 300 213 1435",
  correo: "zamamu@hotmail.com",
};

agregarContacto(nuevoContacto, listaContactos);

// Funcion para borrar un contacto //*

function eliminarContacto(indice, listaContactos) {
  listaContactos.splice(indice, 1);
}

eliminarContacto(1, listaContactos);

for (let i = 0; i < listaContactos.length; i++) {
  console.log(
    listaContactos[i].nombre +
      ": " +
      listaContactos[i].telefono +
      ": " +
      listaContactos[i].correo
  );
}
