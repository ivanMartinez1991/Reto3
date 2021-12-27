let id = 0;


const GenerarId = async () => {
  const peticion = await fetch("http://168.138.133.236:8080/api/user/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await peticion.json();

  

  if (response === null) {
    console.log("No hay ningun usuario");
    id = 1;

  } else {
    let contador = 0
    let Lastid =0 

    response.map((e)=>{
      contador+=1
      if(response.length === contador){
        Lastid = e.id
        
      }
    })
    
    id = Lastid + 1;

    
  }

};

GenerarId()




function GenerarNuevoId(){

  return id;
}

