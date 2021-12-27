let setId = 0;




if(verificarSesion() === true){
    
}

else{
    alert("debes iniciar sesion primero para acceder a esta pagina")
    window.location.href = "login.html"

}




function camposVacios(){
    if($("#value-ident").val() === "" || $("#value-name").val() ==="" || $("#value-address").val() ==="" || $("#value-cellphone").val() ==="" || $("#value-email").val() ==="" || $("#value-password").val() ==="" || $("#value-zone").val() ==="" || $("#value-type").val() === ""){

        

        return true
    }
}






const CleanFields = ()=>{
    
    $("#value-ident").val("")
    $("#value-name").val("")
    $("#value-address").val("")
    $("#value-cellphone").val("")
    $("#value-email").val("")
    $("#value-password").val("")
    $("#value-zone").val("")
    $("#value-type").val("")
    $("#value-password").val("")
    
    
}




async function setFieldsToEdit(id){

    const peticion = await fetch("http://168.138.133.236:8080/api/user/all",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }

        
    })

    const respuesta = await peticion.json();


    respuesta.map((e)=>{

        if(e.id === id){

                console.log(e.id);
                setId = e.id;

                console.log(setId);

                $("#value-ident").val(e.identification)
                $("#value-name").val(e.name)
                $("#value-address").val(e.address)
                $("#value-cellphone").val(e.cellPhone)
                $("#value-email").val(e.email)
                $("#value-password").val(e.password)
                $("#value-zone").val(e.zone)
                $("#value-type").val(e.type)
                $("#value-password").val(e.password)
        }

    })


    alert("Revisa los campos , estan listo para actualizar")
  

    
}


 async function Datauser(){
     

    const peticion = await fetch("http://168.138.133.236:8080/api/user/all",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }

        
    })

    const respuesta = await peticion.json();
    

    ($("#content-to-add").children().length === 0) ? console.log("") :$("#content-to-add").remove();

    $("#data-users").append("<tbody id='content-to-add'></tbody>")

    respuesta.map((e,i)=>{
        let tabla = "<tr>"

        tabla+="<td id='"+e.id+"'+>"+e.identification+"</td>"
        tabla+="<td>"+e.name+"</td>"
        tabla+="<td>"+e.address+"</td>"
        tabla+="<td>"+e.cellPhone+"</td>"
        tabla+="<td>"+e.email+"</td>"
        tabla+="<td>"+e.zone+"</td>"
        tabla+="<td>"+e.type+"</td>"    
        tabla+="<td><button class='btn btn-warning' onclick='setFieldsToEdit("+e.id+")'>Actualizar</button></td>"
        tabla+="<td><button class='btn btn-danger' onclick='BorrarUsuario("+e.id+")'>Borrar &#128465</button></td>"

        tabla+="</tr>"
        $("#content-to-add").append(tabla);
        console.log(tabla);
    })

 }

 async function registrarUsuario(){

    if(camposVacios() === true){
        alert("debe llenar todos los campos")

    }

    

    else{


        
        let datos={
            id:GenerarNuevoId(),
            identification:$("#value-ident").val(),
            name:$("#value-name").val(),
            address:$("#value-address").val(),
            cellPhone:$("#value-cellphone").val(),
            email:$("#value-email").val(),
            password:$("#value-password").val(),
            zone:$("#value-zone").val(),
            type:$("#value-type").val(),
        }
    
        const a = JSON.stringify(datos)
        console.log(a);
        console.log(datos)
    
    
        const peticion = await fetch("http://168.138.133.236:8080/api/user/new",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
    
            body:JSON.stringify(datos)
        })
    
        CleanFields()

        alert("Creado el producto correctamente")

    

    }

    
} 


async function ActualizarUsuario(){

    console.log(setId);

    if (camposVacios() === true) {
        
        alert("Debes llenar todos los campos")

    } else {

        
        let datos={

            id:setId,
            identification:$("#value-ident").val(),
            name:$("#value-name").val(),
            address:$("#value-address").val(),
            cellPhone:$("#value-cellphone").val(),
            email:$("#value-email").val(),
            password:$("#value-password").val(),
            zone:$("#value-zone").val(),
            type:$("#value-type").val(),
        }
    
        
    
        const peticion = await fetch("http://168.138.133.236:8080/api/user/update",{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
    
            body:JSON.stringify(datos)
        })
    
        CleanFields()

        alert("actualizado el usuario")

        Datauser()
    }

    
}


async function BorrarUsuario(id){

    camposVacios();

    const peticion = await fetch("http://168.138.133.236:8080/api/user/" + id,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        }
            
    })

    CleanFields()
    alert("borrado con exito")


    Datauser()

}

