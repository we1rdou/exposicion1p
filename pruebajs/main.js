//Declaración de Funciones
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

//Invocación de Funciones
saludar("Juan"); // Llama a la función 'saludar' con el argumento "Juan"

//-----------------Parámetros y Argumentos
// Definimos una función llamada "saludar" que acepta un parámetro llamado "nombre"
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
// Llamamos a la función "saludar" y pasamos un argumento ("Juan") al parámetro "nombre"
saludar("Juan"); // Esto imprimirá "¡Hola, Juan!" en la consola

//Valor de Retorno
function sumar(a, b) {
    return a + b;
}

var resultado = sumar(3, 5); // resultado contendrá 8

console.log("el resultado de la suma es igual a: "+ resultado)



