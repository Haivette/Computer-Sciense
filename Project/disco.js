class estudiantes{
	constructor(id,nombre){
	this.id = id;
	this.nombre = nombre;
	}
}
estudiantesLista = []
function crearEstudiante(nombre){
	let idestudiante = estudiantesLista.length
	var alumno = new estudiantes(idestudiante,nombre)
	estudiantesLista.push(alumno)
}
crearEstudiante("Rene")
crearEstudiante("Rosaisela")
crearEstudiante("Andres")
var tablaAlumnos = document.getElementById("registroAlumnos")
console.log(tablaAlumnos)
for (let i =0;i<estudiantesLista.length;i++){
	
	var cuerpoTabla = document.getElementById("Tabla")
	var renglon = document.createElement("tr")
	var columnaid = document.createElement("td")
	var columnanombre = document.createElement("td")
	var textoNombre = document.createTextNode(estudiantesLista[i].nombre)
	columnanombre.appendChild(textoNombre)
	var textoId = document.createTextNode(estudiantesLista[i].id)
	columnaid.appendChild(textoId)
	renglon.appendChild(columnaid)
	renglon.appendChild(columnanombre)
	cuerpoTabla.appendChild(renglon)
	tablaAlumnos.appendChild(cuerpoTabla)
}