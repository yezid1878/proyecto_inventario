const d=document,
w=window;

const $crear=d.getElementById("crear"),
$name=d.querySelector(".name"),
$email=d.querySelector(".email"),
$pass=d.querySelector(".pass");



$crear.addEventListener("click",e=>{

    // se valida si los inputs estan digitados, si lo estan que se ejecute el comando, si no lo estan, que no se ejecute
    if($name.value!=="" && $email.value!=="" && $pass.value!=="")return w.close()

    
})
