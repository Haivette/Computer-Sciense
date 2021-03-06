// VAMOS A TENER NUESTRA CLASE ESTUDIANTES

class Estudiantes {

    constructor(nombre, apellido,caliFinal,inscrito){
        this.nombre = nombre
        this.apellido = apellido
        this.caliFinal = caliFinal
        this.inscrito = inscrito
    }

    //METODOS DE LA CLASE
    Aprobado(){
        //desarrollar lógica (IF/ELSE)
        if(this.caliFinal >= 7.6){
            return "APROBADO " + Math.round(this. caliFinal) //Math.round - redondea los decimales
        } else if (this.caliFinal<=7.5){
            return "REPROBADO " + Math.round(this.caliFinal)
        } else{
            return "Calificación no valida, ERROR!"
        }
    }

    Inscrito(){
        //Desarrollar logica if
        if(this.inscrito===true){
            return "el estudiante está inscrito en el semestre"
        } else if(this.inscrito===false){
            return "el estudiante no está inscrito en el semestre"
        } else{
            return "error en el sistema, consultar más tarde..."
        }
    }

}

//VAMOS A CREAR LAS INSTANCIAS DE LA CLASE Estudiantes

const estudianteUno = new Estudiantes ('Maria','Gomez',8.2,true)
const estudianteDos = new Estudiantes ('Teodoro','Martinez',7.2,false)
const estudianteTres = new Estudiantes ('Javier','Lindo',7.6,true)
const estudianteCuatro = new Estudiantes ('Merlin', 'Salazar',7.7,2)

console.log(estudianteUno.nombre, estudianteUno.apellido, estudianteUno.Aprobado(), estudianteUno.Inscrito())
console.log(estudianteDos.nombre, estudianteDos.apellido, estudianteDos.Aprobado(), estudianteDos.Inscrito())
console.log(estudianteTres.nombre, estudianteTres.apellido, estudianteTres.Aprobado(), estudianteTres.Inscrito())
console.log(estudianteCuatro, estudianteCuatro.Aprobado(), estudianteCuatro.Inscrito())

