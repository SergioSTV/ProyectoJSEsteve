let reg_usuario=[]
let nombre
let apellido
let email
let ciudad
let provincia
let cp

let submit_button= document.getElementById('enviar');
submit_button.addEventListener('click', enviarinfo);

function enviarinfo(){
     nombre=document.getElementById('name_form').value;
     apellido= document.getElementById('lastname_form').value;
     email= document.getElementById('email_form').value;
     ciudad=document.getElementById('city_form').value;
     provincia= document.getElementById('province_form').value;
     cp= document.getElementById('zip_form').value;

     reg_usuario.push(nombre);
reg_usuario.push(apellido);
reg_usuario.push(email);
reg_usuario.push(ciudad);
reg_usuario.push(provincia);
reg_usuario.push(cp);


localStorage.setItem('users_list', JSON.stringify(reg_usuario));

}



/**let reg_usuario_todos =[]
let reg_usuario=[]
let nombre
let apellido
let email
let ciudad
let provincia
let cp

let submit_button= document.getElementById('enviar');
submit_button.addEventListener('click', enviarinfo){
    enviarinfo(event0)
}
function enviarinfo(event){
    console.log(event)
    event.preventDefault()
    let datos = {
        nombre: document.getElementById('name_form').value,
        apellido: document.getElementById('lastname_form').value,
        email: document.getElementById('email_form').value,
        ciudad: document.getElementById('city_form').value,
        provincia: document.getElementById('province_form').value,
        cp: document.getElementById('zip_form').value,
    }
     
reg_usuario.push(datos);

localStorage.setItem('users_list', JSON.stringify(reg_usuario));

}**/

/**listadodeusuarios();
document.getElementById("enviar").addEventListener("click", () => agregar());


function agregar() {
    const datos = new URLSearchParams(new FormData(document.getElementById("formulario-contacto")));
    fetch('newuser.php', {
        method: 'POST',
        body: datos
    })
        .then(response => response.json())
        .then(datos => listadodeusuarios());
}

function listadodeusuarios() {
    fetch("users.php")
        .then(response => response.json())
        .then(datos => {**/
            