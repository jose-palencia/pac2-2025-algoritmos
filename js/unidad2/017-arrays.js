const alumnos = [
    {nombre: 'Karen Mejia', edad: 24, genero: 'F'},
    {nombre: 'Carlos Mejia', edad: 22, genero: 'M'},
    {nombre: 'Juan Perez', edad: 28, genero: 'M'},
    {nombre: 'Jesus Orellana', edad: 30, genero: 'M'},
    {nombre: 'Juana Trochez', edad: 60, genero: 'F'},
]

const nuevoArreglo = alumnos.forEach((alumno) => {
    return `${alumno.nombre} con edad ${alumno.edad}`
})

console.log(nuevoArreglo);

const nuevoArreglo2 = alumnos.map((alumno) => {
    if(alumno.edad >= 28) {
        return `${alumno.nombre} con edad ${alumno.edad}`
    }
})

console.log(nuevoArreglo2);
