let listaContactos = [];

listaContactos.push({
  id: 0,
  nombres: "Juan Pablo",
  apellidos: "Caro Suárez",
  telefono: "+57 323 228 3185",
  correo: "juan144pa@hotmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 1,
  nombres: "Andres",
  apellidos: "Garzón Aguirre",
  telefono: "+57 312 239 5234",
  correo: "adga324@gmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 2,
  nombres: "Brandon",
  apellidos: "Úzeta Sánchez",
  telefono: "+57 321 342 3652",
  correo: "brandypandy@hotmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 3,
  nombres: "Catalina",
  apellidos: "Sepulveda Rámos",
  telefono: "+57 311 535 5463",
  correo: "catasera111@gmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 4,
  nombres: "David",
  apellidos: "Linares Ríos",
  telefono: "+57 314 832 3492",
  correo: "david.lrrr@gmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 5,
  nombres: "Efrain",
  apellidos: "Castro Orrego",
  telefono: "+57 322 439 8232",
  correo: "efrarfa3e@gmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 6,
  nombres: "Francisca",
  apellidos: "Gómez Johnson",
  telefono: "+57 310 677 2342",
  correo: "princess.frago.johnson@outlook.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 7,
  nombres: "Luisa",
  apellidos: "Pantano Martínez",
  telefono: "+57 313 345 67890",
  correo: "luisapama@yahoo.com.co",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 8,
  nombres: "Oscar",
  apellidos: "Eduardo Rodríguez",
  telefono: "+57 317 913 4567",
  correo: "pablorodriguez@gmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});
listaContactos.push({
  id: 9,
  nombres: "Paula",
  apellidos: "Natalia Brown",
  telefono: "+57 315 678 9012",
  correo: "paula.brown@hotmail.com",
  ubicacion: null,
  ciudad: null,
  direccion: null,
});

// Función ajustada para crear un contacto como objeto //*

function agregarContacto(
  id,
  nombres,
  apellidos,
  telefono,
  correo,
  ubicacion,
  ciudad,
  direccion
) {
  let nuevoContacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    correo: correo,
    ubicacion: ubicacion,
    ciudad: ciudad,
    direccion: direccion,
  };
  listaContactos.push(nuevoContacto);
}

// Agragar contacto a la lista //*

agregarContacto(
  10,
  "Zamara",
  "Martin Munar",
  "+57 300 213 1435",
  "zamamu@gmail.com",
  "Colombia",
  "Bogotá, Distrito Capital",
  "Kr73 #57R-15 Sur"
);

// Función ajustada para eliminar un contacto existente de la lista //*

function eliminarContacto(id) {
  let indiceContacto = listaContactos.findIndex(
    (listaContactos) => listaContactos.id === id
  );
  listaContactos.splice(indiceContacto, 1);
}

eliminarContacto(1, listaContactos);

for (let i = 0; i < listaContactos.length; i++) {
  console.log(
    listaContactos[i].id +
      ": " +
      listaContactos[i].nombres +
      ": " +
      listaContactos[i].apellidos +
      ": " +
      listaContactos[i].telefono +
      ": " +
      listaContactos[i].correo +
      ": " +
      listaContactos[i].ubicacion +
      ": " +
      listaContactos[i].ciudad +
      ": " +
      listaContactos[i].direccion
  );
}
