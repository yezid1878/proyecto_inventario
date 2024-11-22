const d = document,
  w = window;

const $cerrar = d.getElementById("cerrar_se");

$cerrar.addEventListener("click", (e) => {
  let cerrar = () => {
    location.href = "index.html";
  };
  cerrar();
});
