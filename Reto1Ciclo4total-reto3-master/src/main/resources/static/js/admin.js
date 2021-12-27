if(verificarSesion() === true){
    
    let data = JSON.parse(localStorage.getItem("user"))

    if(data.type != "ADM"){
        alert("No eres un administardor , no tienes permitido entrar aqui")
        window.location.href = "usuario.html"
    }
}

else{
    alert("debes iniciar sesion primero para acceder a esta pagina")
    window.location.href = "login.html"

}