// EJEMPLO 1

class Colas {
    constructor(){
        //vamos a trabajar un arreglo vacío
        this.queue=[] // -> cuando lo dejamos vacío es porque vamos a poblar un arreglo
    }

    //METODOS
    enqueue(){ //ENCOLAR -> agregar un elemento a la cola
        this.queue.push(element)
        return this.queue
    }

    dequeue(){ // DESENCOLAR -> retira el primer elemento de un cola
        return this.queue.shift() // SHIFT -> remueve el primer valor de un arreglo
    }

    peek(){ // PEEK -> Retorna el primer elemento de la cola sin quitarlo de la misma
        return this.queue[0]
    }

    size(){ //SIZE -> Retorna la longitud
        return this.queue.length
    }

    isEmpty(){ // isEmpty ->
        return this.queue.length === 0
    }

    print(){ // Imprimir en la consola
        console.log(this.queue)
    }
}


//Agregar instancias a nuestra clase o agregar datos a nuestro arreglo
const queue = new Colas ()
console.log(queue.isEmpty()) // TRUE
console.log(queue.enqueue('THE ROCK'))
console.log(queue.isEmpty()) // FALSE
console.log(queue.enqueue('REY MISTERIO'))
console.log(queue.enqueue('JOHN CENA'))
console.log(queue.enqueue('CIBERNETICO'))
console.log(queue)

//Sacar datos de nuestro arreglo
console.log(queue.dequeue())
console.log(queue)
queue.print()

console.log(queue.peek())
queue.print

//Checar porque sale error