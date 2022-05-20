// Documentales en mi subclase

import {Largometraje} from './largometraje.js'

class Documental extends Largometraje {
    constructor (titulo, duracion, autor){
        super(titulo, duracion)
        this.autor = autor
    }
    // METODO
    getAutor (){
        return this.autor = this.autor
    }
}

export{Documental}