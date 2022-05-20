// NO ES UNA SUPER CLASE NI UNA SUBCLASE
// ES SOLO UNA CLASE

import {Sala} from './sala.js'
import {Pelicula} from './peliculas.js'
import {Documental} from './documentales.js'
import {Partido} from './partidos.js'

class Cine {
    constructor(sala){
        this.sala=sala
      }
      //METODO
      Reproducir(){
          return `${this.sala.setMovie()}\n${this.sala.getPeople()}\n${this.sala.getSalaNumber()}`
      }  
  }


// INSTANCIAR NUESTRO OBJETO DE PELICULA
const peliculaUno = new Pelicula ('TITANIC', '220MIN', 'B')
const salaUno = new Sala ('SALA 1', '250 Personas', peliculaUno)
const cinepolisPolanco = new Cine (salaUno)

// INSTANCIAR NUESTRO OBJETO DOCUMENTAL
const documentalUno = new Documental ('CATFISH', '130MIN', 'MTV')
const salaDos = new Sala ('2', '200Personas', documentalUno)
const cinemex = new Cine (salaDos)

//INSTANCIAR NUESTRO OBJETO PARTIDO
const partidoFut = new Partido ('Champions', '125MIN', 'BARCELONA VS MADRID')
const salaTres = new Sala ('3', '210Personas', partidoFut)
const cineMexico = new Cine (salaTres)

// IMPRIMIR NUESTROS OBJETOS EN LA CONSOLA
console.log(cinepolisPolanco.Reproducir())
console.log(cinemex.Reproducir() )
console.log(cineMexico.Reproducir(),"\n", partidoFut.equipo )