console.log("clase de arrays")

//Primera regla de declarar un arreglo
var arreglo1 = new Array()
var alumnos = new Array("Rene", "Mario", "Luis", "Jeshua")
//console.log(alumnos.lenth)

//Segunda manera y más usada es con los corchetes []
var alumnos2 = ["Ander", "William", "Estela", "Natanael", "Iris", "Edwin", "Erick"]

console.log(alumnos2[2])
// CICLO FOR
for(let i = 0; i<alumnos2.length; i++){
    console.log(alumnos2[i])
}

// //para imprimir solo pares
// for (let i = 0; i <=alumnos2.length ; i ++){
//     if (i % 2 == 0){ console.log(alumnos2[i])}
// }

//solución 2
for(let i = 0; i<alumnos2.length;i+=2){
    console.log(alumnos2[i])
    }

//Concatenar dos arrays - poner uno tras otro

var primerArray = ["Rene", "Jesua"]
var segundoArray = ["Edwin", "Natanael"]

var concatenado = primerArray.concat(segundoArray, alumnos2)

console.log(concatenado)

var junto = alumnos2.join(",")
console.log(junto)  //los pone tod juntos como si fueran un string

//POP - elimina el último elemento de la regla y lo regresa
var ultimo = alumnos2.pop()
console.log(ultimo)

//Push - mete al final de la lista un elemento
alumnos2.push(ultimo)
console.log(alumnos2)

// SPLICE - (indice de inicio, numero de elementos a borrar, "Elemento nuevo")
// en caso de solo borrar, solo meter 2 parametros, indice inicio, numero de d elementos a agregar
console.log(alumnos2)
alumnos2.splice(2,3)
// el 2 es el índice o posición (Estela) y el 3 es de borra un elemento (Estela)
console.log(alumnos2)

//checar
//alumnos2.splice(2,1)//posicionate en 2 que es Estela, y borrame  1 elemento (es decir a Estela)
//alumnos2.splice(3)//Regresa el numero dado empezando por el inicio
//alumnos2.splice(2,5) // == alumnos2.spplice(2)
//alumnos2.splice(2,0,"Maria","Roberto","Mel G", "Karol G",["manzana","pera"],2,10,99)//insertar elementos en el indice 2
//console.log(alumnos2)

//Incertar elementos
alumnos2.splice(2,1,"Maria")
console.log(alumnos2)

//para reemplazar
alumnos2.splice(1,0,"Raul")
console.log(alumnos2)

//metodo shift y unshift (igual que POP y Push pero con el primer elemento)
alumnos2.unshift("Tomas")
console.log(alumnos2)
//quita el primer elemento
var primerElemento = alumnos2.shift()
console.log(primerElemento)
console.log(alumnos2)

//SPLIT - divide a partir del caracter que le indique
var juntado = "perros, gatos, conejo, vibora, hamster, iguana, peces"
var separado = juntado.split(",")
console.log(separado)

//replace
var ejemploReplace = "computadora"
var rem = ejemploReplace.replace ("c","n")
console.log(rem)

var comida = "tacos;Tortas:Chilaquiles.Tostadas/Pozole,Quesadilla;Enchiladas"
var comidas = comida.split(",")
console.log(comidas)

//soluciones

var separadores = [","," ",";",":","/","+","."]
for(let x = 0; x < comida.length; x++) {
    for(let y =0; y< separadores.length;y++){
        if(separadores[y]== comida[x]){
            comida = comida.replace(separadores[y],",")
        }

    }
}


     /*if (comida[x] === ";"){
          comida = comida.replace(";", ",") }
          else if (comida[x] === ":"){ comida = comida.replace(":", ",") }
          else if (comida[x] === "."){ comida = comida.replace(".", ",") }
          else if (comida[x] === "/"){ comida = comida.replace("/", ",") }
          else if (comida[x] === "+"){ comida = comida.replace("+", ",") }
          else if (comida[x] === " "){ comida = comida.replace(" ", ",") } } */
//var final = comida.split(",")
//Segunda manera con split y join
//var final2 = comida2.split(";").join(",").split(":").join(",").split("/").join(",").split("+").join(",").split(" ").join(",").split(",")
//console.log(final)
//console.log(final2)
//expresion regular 
//var expresionRegular = /[:, ;.+/]/
//var final3 = comida.split(expresionRegular)


//Arrays con JSON JAVASCRIPT OBJECT NOTATION
// van escritos dentro de {}
// En lugar de = se usan :

var estudiantes = [
    {
        nombre: "Andres",
        apellido: "Guevara",
        edad: 28,
        mayor: false
    },
    {
        nombre: "Maria de los Angeles",
        apellido: "Baltazar",
        edad: 40,
        mayor: false
    },
    {
        nombre: "Rene",
        apellido: "Manzano",
        edad: 30,
        mayor: false
    },
    {
        nombre: "Miguel",
        apellido: "Sauza",
        edad: 25,
        mayor:false
    }
]
for(let i = 0; i<estudiantes.length;i++){
    console.log(estudiantes[i].nombre)
}

//METODOS FUNCIONALES - porque reciben una call back fuction
// Recorrer con un for each (no te regresa nada)
estudiantes.forEach((elementoActual, indice, array)=>{
    console.log(elementoActual)
    console.log(indice)
    console.log(array)
})

//MAP - te va a regresar un arreglo nuevo
var estudiantes = estudiantes.map((elementoActual, indice, array)=>{
    if (elementoActual.edad>29){
        return{...elementoActual, mayor:true}
    }
    else{
        return{...elementoActual, mayor:false}
    }

})
console.log(estudiantesNuevo)
var estudiantesIncrementoSueldo = estudiantes.map((elemento,indice,arreglo)=>{
    return { ...elemento, sueldo:elemento.sueldo + 1500, seguroMedico:true}
})
// ... => la flecha para extraer los elemnetos de un array
console.log(estudiantesIncrementoSueldo)


//FILTER - nos permite crear un arreglo a partir de los elementos de otro PERO que cumplan con una condición dada
//(FILTRA)
var estudiantesFiltrados = estudiantes.filter((elemento, indice, arreglo)=>{
    return elemento.sueldo>=1000
})
console.log(estudiantesFiltrados)


//REDUCE - se usa para operaciones matematicas
const numerosArreglo = [1, 5, 10, 15, 20]
const funcion = (acumulador, valor) => acumulador + valor
console.log(numerosArreglo.reduce((acumulador, valor)=>{
    return acumulador + valor
}))

//falta algo aqui


