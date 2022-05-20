// CREAR NUESTRA CLASE LLAMADA NODE
// EL NODO ES LA INFORMACIÓN (DATA) DEL ELEMENTO (DEL OBJETO)
// TIENE UN APUNTADOR / ENLACE AL SIGUIENTE NODO

class Node{
    constructor(data){
        this.data=data // en data guardamos cualquier objeto que queramos
        this.next=null // por defecto este es null
    }
}

// VAMOS A CREAR NUESTRA CLASE LLAMADA LinkedList
// UNA LISTA ENLAZADA DEBE TENER UNA CABECERA (head)
// TIENE UN TAMAÑO DE LISTA (Length)

// LOS METODOS QUE PUEDEN TRABAJARSE EN UNA LISTA ENLAZADA
   //AGREGAR UN ELEMENTO (add)
   //AGREGAR AL PRINCIPIO (addStart)
   //AGREGAR AL FINAL (addEnd)
   //BORRAR UN ELEMENTO deLete(data)
   //BUSCAR UN ELEMENTO get(index)
//Las listas enlazadas no se manejan por posiciones

class LinkedList{
    constructor(){
        this.head=null //esto significa que no hay nada en la lista
        this.length=0 // no hay elementos dentro de la lista // -----todo bien aqui?
    }
    //METODO AUXILIAR
    isEmpty(){
        return this.head===null //0 nodos en la lista está vacía
    }

    //METODOS DE NUESTRA LISTA ENLAZADA

    addStart(data){
        const node = new Node (data) // creamos nuestro nodo con su data
        if(!this.head){ // afirmando que verdaderamente nuestra lista está vacía
            // asiganamos el primer nodo como la cabezera (head) de la lista
            this.head=node // asignamos el primer nodo como la cabeza o cabecera de la lista
        }else{
            // pequeño recorrido tomando el inicio del nodo  la posición actual
            node.next=this.head
            this.head=node // nuevo nodo
        }
        this.length++ // para saber cuantos elementos tengo en mi lista
    }

// Se va a poner antes del nodo original

    addEnd(data){
        const node = new Node (data)
        if(this.head === null){
            this.head=node // asignamos el primer nodo como la cabeza de la lista
        }else{
            // en este else nosotros ya sabemos que existe una cabezera (this.head)
            let currentNode = this.head
            //bucle while: mientras (se cumpla mi condición) {haz esto}
            while(currentNode.next){
                // hacemos esto para verificar si next tiene un nodo
                currentNode = currentNode.next // sustituyo el nodo que vive en next a mi nodo actual
            }
            //cuando next sea nuelo, entonces se sale del while (bucle) y continua con el resto del código
            currentNode.next=node
        }
        this.length++ //para saber cuantos elementos tengo en mi lista
    }
    delete(data){
        // vamos a verificar que dato va a ser borrado
        let currentNode=this.head
        let previousNode = null // almacena el nodo con que hay que reconectar
        if(currentNode.data===data){
            //vamos a reasignar la cabeza a mi nodo
            this.head=currentNode.next //reasigno la cabeza(head) de mi nodo
        }else{
            // estamos haciendo otro recorrido, puesto que estamos borrando nodos (data)
            while(currentNode.data !== data && currentNode.next !==null) {// para reconectar donde se borro el nodo y respetar los demás
                previousNode = currentNode // el currentNode se vuelve previousNode
                currentNode = currentNode.next // pasar al siguiente nodo (reconectar)
            }
            previousNode.next=currentNode.next
        }
        this.length--
        return "la data: " + data + "ha sido eliminada"
    }

    getNode(index){
        // 0 nodos           0    index es mayor
        if(this.head ===null || index > this.length){
            return null
        }else{
            // 1 -> 2 -> 3
            let counter = 1
            let currentNode = this.head
            while(counter !== index){
                counter ++
                currentNode=currentNode.next
            }
            return currentNode
        }
    }
    print(){
        //nodo actual
        let currentNode=this.head //tomar en cuenta la cabecera
        while(currentNode){
            console.log(currentNode.data)
            currentNode=currentNode.next
        }
    }
}

// AGREGAR DATOS A NUESTROS NODOS
const listaNumeros =new LinkedList ()
console.log(listaNumeros.isEmpty()) //true

// agregar nodos

listaNumeros.addStart(100)
listaNumeros.addStart(200)
listaNumeros.addStart(300)
listaNumeros.addStart(400)
listaNumeros.addEnd(500)

console.log ("NODO: " , listaNumeros)
//listaNumeros.print()

//ELIMINAR DATA A NUESTRO NODO
console.log("ELIMINADO: ", listaNumeros.delete(100))
console.log("NODO ACTUAL: " , listaNumeros)

//BUSCAR UN NODO POR SU INDICE 
console.log("TRAER EL INDICIE 2: ", listaNumeros.getNode(2))
