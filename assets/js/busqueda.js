const d = document,
  w = window;

const $btnBuscar = d.getElementById("btn_buscar"),
  $busCont = d.querySelector(".busqueda__cont"),
  $template = d.getElementById("template").content,
  $fragment = d.createDocumentFragment();

$btnBuscar.addEventListener("click", () => {
  cargarUsuarios();
});

const cargarUsuarios = async () => {
  try {
    const res = await fetch(`http://localhost:3000/usuarios`);
    console.log(res);

    if (res.status === 200) {
      let json = await res.json();
      console.log(json);

      json.forEach((el) => {
        $template.querySelector(".id").textContent = el.id;
        $template.querySelector(".nombre").textContent = el.nombre;
        $template.querySelector(".direccion").textContent = el.direccion;
        $template.querySelector(".telefono").textContent = el.telefono;
        $template.querySelector(".email").textContent = el.email;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
    }

    $busCont.appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    console.log(message);
  }
};