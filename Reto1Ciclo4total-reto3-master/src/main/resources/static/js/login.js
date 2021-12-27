
$(document).ready(()=>{

    if(localStorage.getItem("user") != null){

        const data = JSON.parse(localStorage.getItem("user"))

        if(data.type === "ADM"){
            window.location.href = "admin.html"
        }

        else{
            window.location.href = "usuario.html"
        }

    }

    

})


$("#IniciarSesion").click((e)=>{
    
    e.preventDefault()

        IniciarSesion()
        cleanFields()

        
    
})


    function cleanFields(){

        $("#values-email").val("")
        $("#values-password").val("")
        
    }

    function cargarDatos(datosUser){
        localStorage.setItem("user" , JSON.stringify(datosUser))
        const dataUser = JSON.parse(localStorage.getItem("user"))
        console.log(dataUser)
        if(dataUser.type === "ADM"){
            window.location.href = "admin.html"
        }

        else{
            window.location.href = "usuario.html"
        }
        
       
    }

    async function IniciarSesion(){


        const respuesta = await fetch("http://168.138.133.236:8080/api/user/"+ $("#values-email").val()+"/"+$("#values-password").val() , {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })

        const respuestaJson = await respuesta.json()
        console.log(respuestaJson)
        if(respuestaJson.id != null){


            let datosUser = {
                id:respuestaJson.id,
                name:respuestaJson.name,
                email:respuestaJson.email,
                type:respuestaJson.type
            }
            
            
            cargarDatos(datosUser);

        }

        
        else {
            alert("Usuario o contraseña incorrectos o no existe")
        }

    }
    