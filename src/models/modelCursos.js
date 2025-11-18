

let cursos = [

 {
    nombre: "Power bi",
    duracion: "5 Horas",
    inversion : 10000,
    id: 1
 },
 
 {
    nombre: "SQL",
    duracion: "10 Horas",
    inversion : 12000,
    id: 2
 }, 
 
 {
    nombre: "R",
    duracion: "3 Horas",
    inversion : 9000,
    id: 3
 }

]

 export function listarCursos() {
    cursos.map( (equis) => console.log(equis)
    )
 }

    /*  Capa de Datos */ 