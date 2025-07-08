const alumnos = [
    {nombre: 'Karen Mejia', edad: 24, genero: 'F'},
    {nombre: 'Carlos Mejia', edad: 22, genero: 'M'},
    {nombre: 'Juan Perez', edad: 28, genero: 'M'},
    {nombre: 'Jesus Orellana', edad: 30, genero: 'M'},
    {nombre: 'Juana Trochez', edad: 60, genero: 'F'},
]

// Iterador
// for(let i = 0; i < alumnos.length; i++) {
//     console.log(alumnos[i]);
// }

// alumnos.forEach(function(alumno) {
//     console.log(alumno);
// });

alumnos.forEach(alumno => console.log(alumno));
alumnos.forEach((alumno, index) => console.log({index, alumno}));