//Vamos a crear nuestra clase y objetos - Clase persona

class Persona {
//es el scope local

    //sirve para instanciar un objeto, o bien un nuevo objeto a partir de uno ya creado
    //solo se puede tener un constructor por cada clase
    constructor (nombre, apellido, edad, pais, ocupacion) {

        //THIS nos sirve para hacer una referencia a una propiedad del objeto
        //lo invocamos hasta el principio de la clase, este presente en todo el código
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.pais = pais
        this.ocupacion = ocupacion

    }

    //METODOS - acciones que hacen o tienen en particular los objetos
    Saludar(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    Hablar(){
        return "bla bla bla estoy tarareando"
    }

    Accion(){
        return "hola soy " + " " + this.nombre + " " + this.Hablar()
    }


}

//Instanciar nuestros objetos de la clase
// Harcodeado - nosotros vamos a pasarle la información

const personaUno = new Persona('Ivy','Arenas',26,'Minessota','criminologa')
const personaDos = new Persona('Bolis','Conejin',5,'New York','saxofonista')
const personaTres = new Persona('Paolo','Pulido',48,'Colombia','estilista')

//console.log(personaUno, personaDos, personaTres)
console.log(personaUno.Saludar())
console.log(personaDos.Accion())