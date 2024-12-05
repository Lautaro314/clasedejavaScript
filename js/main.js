
//CLASE

//class Estudiantes {
//    constructor (nombre , apellido , edad) {

//        this.nombre = nombre;
//        this.apellido = apellido;
//        this.edad = edad;
//    }
//}

class persona {
    constructor (nombre, apellido , edad, seccion , nota) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sección = seccion;
        this.nota = nota;

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

    const nombreEstudiante = prompt ("Agregar nombre del estudiante");
    
    const apellidoEstudiante = prompt ("Agregar apellido del estudiante");
    
    const edadEstudiante = parseFloat(prompt("Ingresa la edad del estudiante"));

    
    //const estudiante = new Estudiantes(

    //    nombreEstudiante,
    //    apellidoEstudiante,
    //    edadEstudiante,

    //);
    

    estudiantes.push (estudiante);
    
    alert ("ESTUDIANTE INGRESADO");
    
    
    console.log(estudiantes);
    tablaDatosEstudiantes ();
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






function tablaDatosEstudiantes () {

    tablaDeDatos.innerHTML ="";
    
    for (const alumnos of alumno){

        tablaDeDatos.innerHTML = tablaDeDatos.innerHTML 
        
        + `  
        <tr>
                <td>${alumnos.nombre}</td>
                <td>${alumnos.apellido}</td>
                <td>${alumnos.edad}</td>
                <td>${alumnos.seccion}</td>
                <td>${alumnos.nota}</td>
            </tr>
        
        `;
        
    
    }
    
}

console.log(tablaDeDatos.innerHTML);



//const estudiantesFormulario = document.getElementById("formlario");


function formularioDelEstudiante (e){

    e.preventDefault();


    let formulario = e.target;

    let nombre = (formulario.children[0].value);
    let apellido =(formulario.children[1].value);
    let edad = parseInt(formulario.children[2].value);
    let seccion = (formulario.children[3].value);
    let nota = parseFloat(formulario.children[4].value);
    

    let nuevoAlumno = new persona (nombre, apellido, edad, seccion, nota);
    alumno.push(nuevoAlumno)


    tablaDatosEstudiantes ();


}







//INICIO DEL PROGRAMA

//const estudiantes = []

const alumno = [
    new persona("Marcos" , "Napelo" , 23 , "B" , 9),
    new persona("Lucas" , "Capz" , 34 , "A" , 6),

]

const estudiantesFormulario = document.getElementById("formulario");
const tablaDeDatos = document.getElementById("tablaDeDatos");
let submit = document.getElementById("subir");

//submit.addEventListener ("click" , respuestaClick)

console.log(alumno);



//const nuevoAlumno = new persona (nombre , apellido , edad , sección , nota)
//alumno.push (nuevoAlumno);

estudiantesFormulario.addEventListener("submit",formularioDelEstudiante);



tablaDatosEstudiantes ();

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
