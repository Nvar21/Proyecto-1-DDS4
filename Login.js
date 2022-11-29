let baseUrl = "http://localhost:8080";
let usuarios = [];

function VerificarUsuario() {
    fetch(baseUrl + "/usuarios/all").then((res) => {
      res.json().then((json) => {
        usuarios = json;
        ImprimirUsuarios();
      });
    });
  }

  function ImprimirUsuarios() {
    let contenedor = document.getElementById("cuerpoTabla");
    contenedor.innerHTML = "";
  
    productos.forEach(usuario => {
      contenedor.innerHTML += MapearUsuario(usuario);
    });
  }

  
function MapearUsuario(usuario) {
    return `<tr>
    <td>
      <button class='btn btn-danger btn-sm' onclick="EliminarUsuario(${usuario.id})">Eliminar</button>
      <button class='btn btn-warning btn-sm' onclick="PopularDatosCampos(${usuario.id})">Actualizar</button>
      </td>
    <td>${usuario.nombre}</td>
    <td>${usuario.apellido}</td>
    <td>${usuario.cedula}</td>
    <td>${usuario.usuario}</td>
    <td>${usuario.contrasena}</td>
    <td>${usuario.telefono}</td>
    <td>${usuario.correo}</td>
    <td>${usuario.provincia}</td>
    <td>${usuario.corregimiento}</td>
    <td>${usuario.distrito}</td>
    <td>${usuario.calle}</td>
    <td>${usuario.casa}</td>
  </tr>`;
  }