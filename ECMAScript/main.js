console.log("Ya se conectó");
var alumno ="Ivette" //esta es una variable global

console.log("El siguiente alumno "+ alumno + " es muy aplicado");

//ECMAScript 6 template literals

console.log(`Este ejemplo es con ECMASCRIPT 6  ${alumno}`);

//NOTACION REST

function suma(a,b) {
    var c = a + b

    return c
}

var primer = 50;
var segunda = 100;

var respuesta = suma(primer,segunda)

console.log(`La suma de la variable primer ${primer} y segunda ${segunda} es ${respuesta}`)

var numeros = [10, 20, 30, 40, 100]

function sumarest(...num){
    for(let i of num){
        console.log(i)
    }
    
}

console.log("aqui se esta llamando la notación rest");
sumarest (1,3,4,5,7,76,656,77,345,54,65,44);

function sumarray(arreglo){

    var suma = 0;
    for (let i=0; i<arreglo.length;i++){
        suma = suma + arreglo[i];
        //suma+=arreglo[i]
    }
    console.log(`el valor de mi contador i es ${i}`)
    return suma;
}

var resultadoArray = sumaarray(numeros)
console.log(`sumaarray es igual a ${resultadoArray}`);


//Arrow funsction o función de flecha

const sumaArrow =(a,b)=>a+b;
const sumaArrowDos = (a,b) =>{
    return a+b
}
const cuadrado =x => x*x
var arregloNumeros = [1,2,3]

var respuestaArrow =sumaArrow(10,2,1)
//spread operator: accediendo a arregloNumeros con el indice
var respuestaArrow = sumaArrow(arregloNumeros[0], arregloNumeros[1], arregloNumeros[2])
var respuestaArrowDos = sumaArrow(...arregloNumeros)
console.log(respuestaArrow)


/* console.log("Ya se conecto el archivo de javascript");
var alumno = "Andres Guevara"
console.log("El siguiente alumno "+alumno+" es muy aplicado");
//ECMASCRIPT 6 TEMPLATE LITERALS
console.log(`Este ejemplo es con ECMASCRIPT 6  ${alumno} `);
//NOTACION REST
function suma(a,b){
    var c = a + b
    return c
}
var primer = 50;
var segunda = 100;
var respuesta = suma(primer,segunda)
console.log(`La suma de la variable primer ${primer} y segunda ${segunda} es ${respuesta}`);
var numeros = [10,20,30,40,100];
function sumarest(...num){
    for(let i of num){
        console.log(i)
    }
}
console.log("aqui se esta llamando la notacion rest");
sumarest(1,3,4,5,7,76,656,77,345,54,65,44,30,12,23,1);
function sumaarray(arreglo){
    var suma = 0;
    for(var i=0;i<arreglo.length;i++){
        suma = suma + arreglo[i];
        // suma += arreglo[i]
    }
    console.log(`El valor de mi contador i es ${i}`)
    return suma,i;
}
console.log(`Estoy fuera de mi funcion sumaaray y el valor de i es ${i}`)
var resultadoarray = sumaarray(numeros);
console.log(`sumaarray es iguall a ${resultadoarray}`); */