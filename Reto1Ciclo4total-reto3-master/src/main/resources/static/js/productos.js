if (verificarSesion() === true) {
} else {
    alert("debes iniciar sesion primero para acceder a esta pagina");
    window.location.href = "login.html";
}


function camposVacios(){
    if($("#value-refer").val() ==="" || $("#value-brand").val() ==="" || $("#value-category").val() ==="" || $("#value-description").val() ==="" || $("#value-price").val() ==="" || $("#value-avaible").val() ==="" || $("#value-quantity").val() ==="" || $("#value-photo").val()==="" ){

      return true
    }

        
}


const CleanFields = ()=>{
    
    $("#value-refer").val("")
    $("#value-brand").val("")
    $("#value-category").val("")
    $("#value-description").val("")
    $("#value-price").val("")
    $("#value-avaible").val("")
    $("#value-quantity").val("")
    $("#value-photo").val("")
    
    
}


async function setFieldsToEdit(id){

    const peticion = await fetch("http://168.138.133.236:8080/api/cleaningproduct/all",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }

        
    })

    const respuesta = await peticion.json();


    respuesta.map((e)=>{


        if(e.reference === id){

            let disponibilidad = ""

            if(e.reference === true){
                disponibilidad = "true"
            }

            else{
                disponibilidad = "false"
            }
        

          $("#value-refer").val(e.reference)
          $("#value-brand").val(e.brand)
          $("#value-category").val(e.category)
          $("#value-description").val(e.description)
          $("#value-price").val(e.price)
          $("#value-avaible").val(disponibilidad)
          $("#value-quantity").val(e.quantity)
          $("#value-photo").val(e.photography)
        
        }

    })

    alert("Revisa los campos , estan listo para actualizar")
}


 async function DataProductos(){
     

    const peticion = await fetch("http://168.138.133.236:8080/api/cleaningproduct/all",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }

        
    })

    const respuesta = await peticion.json();
    
    console.log($("#content-to-add").children().length);

    if($("#content-to-add").children().length != 0){
        $("#content-to-add").remove()
        $("#data-product").append("<tbody id='content-to-add'></tbody>")

    }
    


    respuesta.map((e,i)=>{
        let tabla = "<tr>"

        tabla+="<td>"+e.reference+"</td>"
        tabla+="<td>"+e.brand+"</td>"
        tabla+="<td>"+e.category+"</td>"
        tabla+="<td>"+e.description+"</td>"
        tabla+="<td>"+e.price+"</td>"
        tabla+="<td>"+e.availability+"</td>"
        tabla+="<td>"+e.quantity+"</td>"
        tabla+="<td><img src='"+e.photography+"' width='200' height='150'/></td>"

        tabla+='<td><button class="btn btn-warning" onclick="setFieldsToEdit('+"'"+e.reference+"'"+')">Actualizar</button></td>'
        tabla+="<td><button class='btn btn-danger' onclick='BorrarProducto("+'"'+ e.reference + '"' +")'>Borrar</button></td>"

        tabla+="</tr>"
        $("#content-to-add").append(tabla);
        
    })

    console.log($("#content-to-add").children().length);

 }

 async function registrarProductos(){

    if(camposVacios() === true){
        alert("debe llenar todos los campos")

    }

    else{

      
    let datos={
      reference:$("#value-refer").val(),
      brand:$("#value-brand").val(),
      category:$("#value-category").val(),
      description:$("#value-description").val(),
      price:$("#value-price").val(),
      availability:$("#value-avaible").val(),
      quantity:$("#value-quantity").val(),
      photography:$("#value-photo").val()
  }

  const a = JSON.stringify(datos)
  console.log(a)

  console.log(datos)


  const peticion = await fetch("http://168.138.133.236:8080/api/cleaningproduct/new",{
      method:'POST',
      headers:{
          "Content-Type":"application/json"
      },

      body:JSON.stringify(datos)
  })

  CleanFields()

  alert("Creado producto con exito")

    }

} 


async function ActualizarProducto(){

    if ( camposVacios() === true) {
      alert("Asegurese de llenar todos los campos")
    } else {
      
    let datos={
      
      reference:$("#value-refer").val(),
      brand:$("#value-brand").val(),
      category:$("#value-category").val(),
      description:$("#value-description").val(),
      price:$("#value-price").val(),
      availability:$("#value-avaible").val(),
      quantity:$("#value-quantity").val(),
      photography:$("#value-photo").val()

    }

    console.log($("#value-avaible").val());

    const a = JSON.stringify(datos)
    console.log(a)

    console.log(datos)


    const peticion = await fetch("http://168.138.133.236:8080/api/cleaningproduct/update",{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(datos)
    })

    CleanFields()

    alert("Se ha actualizado la informacion")

    DataProductos()

    }

}


async function BorrarProducto(id){

   

    const peticion = await fetch("http://168.138.133.236:8080/api/cleaningproduct/" + id,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        }
            
    })

    CleanFields()

    alert("Borrado con exito")
}

