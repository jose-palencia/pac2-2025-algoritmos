// console.log('Desde archivo de variables con let');

// Variables con let desde ES6, para tener una forma mas precisa de 
// declara variables.

function ejemplo() {
    let x = 12;
    if(true) {
        let x = 23;
        console.log(x);        
    }

    console.log(x);
    
}

// ejemplo();


let producto = "Semita";
producto = 20;
producto = true;
producto = null;

console.log(producto);


let precio;

precio = 30;
console.log(precio);


