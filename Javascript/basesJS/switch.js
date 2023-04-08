var caso = 2;

switch(caso){
    case 1 :
        console.log("primer")
        break;

    case 2: 
    console.log("segundo")
}


function solution(article) {
    switch (article) {
  
      case "computadora":
  
        console.log("Con mi computadora puedo programar usando JavaScript")
        break;
  
      case "celular":
  
        console.log("En mi celular puedo aprender usando la app de Platzi")
        break;
  
      case "cable":
  
        console.log("¡Hay un cable en mi bota!")
        break;
  
      default:
        console.log("Artículo no encontrado")
        break;
    }
  }
  
  solution('computadora')
  solution('celular')
  solution('cable')
  solution('ornitorrinco')