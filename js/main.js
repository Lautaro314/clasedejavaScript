
//CLASE


class secciónes {
    constructor (secciónA , secciónB , secciónC) {

        this.sección1 = secciónA;
        this.sección2 = secciónB;
        this.sección3 = secciónC;
    }
}


class persona {
    constructor (nombre , apellido) {

        this.nombre = nombre;
        this.apellido = apellido;
    }
}


//FUNCIONES
function opcionValida (){

    while (opciones < 0 || opciones > 3){
    
        alert ("OPCIÓN INVÁLIDA");



        opciones = parseInt(prompt(opcionesMenu));
    
    }

    if (opciones === 0){

        alert ("Gracias por su atención");

        return false;

    }

    return true;

}





function nombreDelEstudiante (){

    const nombre = prompt ("Agregar nombre del estudiante");
    const apellido = prompt ("Agregar apellido del estudiante");

    console.log(nombre);
    console.log(apellido);
    
    

}







function secciónDeEstudio (){

    const secciones = ["A" , "B" , "C"];

    console.log(secciones.includes("A"));
    console.log(secciones.includes("B"));
    console.log(secciones.includes("C"));
    
    let sección = prompt("Ingrese la sección donde estudia (A , B o C)").toUpperCase();

    while (!secciones.includes(sección)) {
    
        
        
        alert("Sección incorrecta");


        sección = prompt("Por favor, ingrese la sección correcta donde estudia (A , B o C)").toUpperCase();
        
        alert ("El estudiante está en la sección " + sección);
    
    }

    return sección

}








function calcularElPromedio () {

    let nota1 = parseInt(prompt("Ingrese la primer nota"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota"));
    let nota3 = parseInt(prompt("ingrese la tercera nota"));

    let resultado = (nota1 + nota2 + nota3) / 3;

    while (isNaN(resultado)) {

        alert ("Ingresaste datos incorrectos");

        
        nota1 = parseInt(prompt("Ingrese la primer nota"));
        nota2 = parseInt(prompt("Ingrese la segunda nota"));
        nota3 = parseInt(prompt("ingrese la tercera nota"));

        resultado = (nota1 + nota2 + nota3) / 3;
    
    }

    if (resultado > 5) {

        alert ("El estudiante esta aprobado");

    } else if (resultado <= 5) 

        alert ("El estudiante no esta aprobado");
    
    console.log(resultado);
    
    
    return resultado
    
    
}
    








//INICIO DEL PROGRAMA
const opcionesMenu = "1-Nombre y apellido del estudiante , 2-Sección de estudio , 3-Calcular el promedio , 0-Salir";
let opciones = parseInt(prompt(opcionesMenu));

while (opcionValida(opciones)) {

    switch(opciones) {
        case 1:
            nombreDelEstudiante();
            break;


        case 2:
            secciónDeEstudio();
            break;

        case 3:
            calcularElPromedio();
            break;

    }

    opciones = parseInt(prompt(opcionesMenu));

}
