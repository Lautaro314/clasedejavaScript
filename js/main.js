
// ALGORITMO CON CONDICIONES

//let numero1 = parseInt(prompt("ingrese su primera nota"));
//let numero2 = parseInt(prompt("ingrese su segunda nota"));
//let numero3 = parseInt(prompt("ingrese su tercera nota"));

//let resultado = (numero1 + numero2 + numero3) / 3;

//if (resultado < 4) {
    
//    alert("Desaprobado")

//} else if (resultado >= 4){

//    alert ("Aprobado");

//}


//console.log(resultado);



//ALGORITMO CON CICLOS

const nombre = prompt("ingrese el nombre del estudiante");

let numero = parseInt(prompt("ingrese el promedio del estudiante"))

while (isNaN(numero)) {

    if(isNaN(numero < 4)){
        
        alert("el estudiante no aprobó Inglés")

    } else if (numero >= 4){
        
        alert("el estudiante aprobó Ingles")
    
    }

}



