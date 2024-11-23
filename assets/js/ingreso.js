const d = document,
  w = window;

const $ingreso = d.getElementById("ingreso"),
  $usuarios = d.getElementById("usuario"),
  $password = d.getElementById("password");

$ingreso.addEventListener("click", (e) => {
  let ingreso = () => {
    if (
      $usuarios.value === "admin".toLowerCase() ||
      $password.value === "admin"
    ) {
      location.href = "producto.html";
    }
  };

  ingreso();
});

w.addEventListener("keydown", (e) => {
  let ingreso = () => {
    if (
      $usuarios.value === "admin".toLowerCase() ||
      $password.value === "admin"
    ) {
      location.href = "producto.html";
    }
  };

  if (e.key === "Enter") {
    ingreso();
  }
});
