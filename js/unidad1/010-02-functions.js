function sumar(a = 0, b = 0) { // En este momento a y b son parámetros
    console.log(a + b);
}

sumar(10, 3); // estos son argumentos


function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Juan', 'Perez');