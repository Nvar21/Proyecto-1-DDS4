let baseUrl = "http://localhost:8080";
let usuarios = [];

function ObtenerUsuarios() {
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
  
function GuardarUsuario() {
  let data = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    cedula: document.getElementById("cedula").value,
    usuario: document.getElementById("usuario").value,
    contrasena: document.getElementById("contrasena").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
    provincia: document.getElementById("provincia").value,
    corregimiento: document.getElementById("corregimiento").value,
    distrito: document.getElementById("distrito").value,
    calle: document.getElementById("calle").value,
    casa: document.getElementById("casa").value,
  };
  fetch(baseUrl + "/usuario", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
