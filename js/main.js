// Variables con distintos tipos de datos
let edad = 17;              // Number
let nombre = "Juan";        // String
let esEstudiante = true;    // Boolean

// Mostrar los valores en la consola
console.log("Edad:", edad);
console.log("Nombre:", nombre); 
console.log("¿Es estudiante?", esEstudiante);

// Pedimos un número al usuario para saludar
let cantidadSaludos = prompt("¿Cuántas veces querés que te salude?");

// Repetimos el mensaje "Hola" la cantidad de veces ingresada
for (let i = 1; i <= cantidadSaludos; i++) {
  console.log("Hola (" + i + ")");
}

// Función para pedir los datos
function pedirDatos() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tenés?");
    return { nombre, edad };
}

// Función para procesar la edad
function verificarEdad(edad) {
    if (edad >= 18) {
        return "sos mayor de edad";
    } else {
        return "sos menor de edad";
    }
}

// Función para mostrar el resultado
function mostrarMensaje(nombre, mensaje) {
    alert(nombre + ", " + mensaje);
    console.log(nombre + ", " + mensaje);
}

// Flujo del programa
let datos = pedirDatos();
let resultado = verificarEdad(datos.edad);
mostrarMensaje(datos.nombre, resultado);

// Creamos un array vacío para guardar tareas
let tareas = [];

// Función para pedir una tarea al usuario
function agregarTarea() {
    let nombreTarea = prompt("Ingresá el nombre de la tarea:");
    let prioridadTarea = prompt("¿Qué prioridad tiene? (Alta, Media o Baja)");

    // Creamos un objeto con los datos de la tarea
    let tarea = {
        nombre: nombreTarea,
        prioridad: prioridadTarea
    };

    tareas.push(tarea); // Agregamos la tarea al array
    console.log("Tarea agregada:", tarea);
}

// Preguntamos cuántas tareas quiere ingresar el usuario
let cantidadTareas = prompt("¿Cuántas tareas querés ingresar?");
cantidadTareas = parseInt(cantidadTareas);

// Pedimos las tareas una por una
for (let i = 0; i < cantidadTareas; i++) {
    agregarTarea();
}

// Mostramos todas las tareas en consola
console.log("=== Lista de tareas ingresadas ===");
tareas.forEach((tarea, index) => {
    console.log((index + 1) + ". " + tarea.nombre + " (" + tarea.prioridad + ")");
});
