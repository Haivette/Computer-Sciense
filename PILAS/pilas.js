console.log ("Clase de pilas")

//Implementacion de una pila usando clases de JS

class Pila{
    cosntructor(){
        this.coleccion = []
        this.contador = 0
    }
    apilar(nuevoElemento){
        this.coleccion.push(nuevoElemento)
        this.contador++
        return this.contador
    }
    borrar(){ // borra el último elemento de la pila LAST IN FIST OUT
        var elementoBorrado = this.coleccion.pop()
        this.contador--
        return elementoBorrado
    }
    longitud(){ // metodo para saber tamaño de la pila
        return this.contador
    }
    peek(){ // ver el ultimo elemento de la pila
        if(this.longitud()===0) return null
        return this.coleccion(this.contador -1)
    }
    // Por ejemplo var lista = [1,2,3] el índice del ultimo elemento SIEMPRE ES la longitud del arreglo menos uno
    //
    estaVacia(){
        if(this.longitud()===0)return true
    }
}

// esto ya casi no se usa pero es importante saber como por las pruebas técnicas

const pilaAlumnos = new Pila ()
console.log(pilaAlumnos)
console.log(pilaAlumnos.apilar("Edwin"))
console.log(pilaAlumnos.apilar("Paulina"))
console.log(pilaAlumnos.apilar("Rosaisela"))
console.log(pilaAlumnos)

console.log(pilaAlumnos.borrar())
console.log(pilaAlumnos)
console.log(pilaAlumnos.longitud())
console.log(pilaAlumnos("Jonathan"))
console.log(pilaAlumnos.peek())

//BORRRAR TODOS LOS ALUMNOS
let numeroAlumnos = pilaAlumnos.contador
for(let i =0; i<=numeroAlumnos();i++){
    pilaAlumnos.borrar()
}

// console.log(pilaAlumnos.estaVacia())
console.log(pilaAlumnos)