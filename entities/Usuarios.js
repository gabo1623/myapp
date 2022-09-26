const { EntitySchema } = require("typeorm");

const Usuarios = new EntitySchema({
    name: "Usuarios", // Will use table name `category` as default behaviour.
    tableName: "usuarios", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
          primary: true,
          type: "int",
          generated: true,
        },
        nombreUsuario: {
          name: "nombre_usuario",
          type: "varchar",
        },
        contrasena: {
          type: "varchar",
        },
        rut: {
          type: "varchar",
        },
        grado: {
          type: "varchar",
        },
        estado: {
          type: "int",
        },
    },
})


module.exports = { Usuarios }