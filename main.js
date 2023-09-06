function login(user, pass, bd) {
  const busqueda = bd.filter((valor) => valor.usuario === user && valor.contrasena === pass);
  return busqueda
}

function construyePerfil(datos) {
  const profile = document.createElement("h1");
  profile.textContent = `Bienvenido: ${datos.nombre}`;
  document.getElementById("perfilUsuario").appendChild(profile);
}

const elemento  = document.getElementById("accion")

elemento.addEventListener("click", () => {
  const datos = document.getElementsByTagName("input");
  const usuario = datos[0]; // input usuario
  const contrasena = datos[1]; // input contraseña
  console.log("usuario", usuario.value)
  console.log("contrasena", contrasena.value)
  if (usuario.value === "" || contrasena.value === "") {
    alert("proporciona los datos");
  } else {
    const loginUsuario = login(usuario.value, contrasena.value, BD);
    console.log("loginUsuario", loginUsuario);
    if (loginUsuario.length > 0) {
      alert("usuario logeado");
      construyePerfil(loginUsuario[0]);
    } else {
      alert("usuario no encontrado");
    }
  }
});