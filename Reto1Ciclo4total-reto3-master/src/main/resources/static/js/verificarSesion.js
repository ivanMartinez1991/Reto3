const verificarSesion = () =>{
    if(localStorage.getItem("user") != null){
        return true
    }

    else{
        window.location.href = "login.html"
        
        return false
    }
}
