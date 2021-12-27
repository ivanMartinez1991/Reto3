
if(verificarSesion() === true){

    let data = JSON.parse(localStorage.getItem("user"))

    if(data.type === "ADM"){
        alert("Eres un usuario administrador y no tiene permitido entrar aqui")
        window.location.href = "admin.html"
    }
}

else{
    alert("debes iniciar sesion primero para acceder a esta pagina")
    window.location.href = "login.html"

}