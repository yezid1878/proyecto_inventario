const d = document,
  w = window;

const $ingreso = d.getElementById("ingreso"),
  $usuarios = d.getElementById("usuario"),
  $password = d.getElementById("password"),
  $crear=d.getElementById("crear");

  
//  se crea un evento que al dar click en el inicio de seseión con el usuario admin se pueda entrar a la plataforma

$ingreso.addEventListener("click", (e) => {
  let ingreso = () => {
    if (
      $usuarios.value === "admin".toLowerCase() &&
      $password.value === "admin"
    ) {
      location.href = "producto.html";
    }
  };

  ingreso();
});

//  se crea un evento que al dar enter en el inicio de seseión con el usuario admin se pueda entrar a la plataforma

w.addEventListener("keydown", (e) => {
  let ingreso = () => {
    if (
      $usuarios.value === "admin".toLowerCase() &&
      $password.value === "admin"
    ) {
      location.href = "producto.html";
    }
  };

  if (e.key === "Enter") {
    ingreso();
  }
});

