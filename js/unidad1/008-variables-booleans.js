const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);


console.log(typeof(boolean1));

console.log(`boolean1 es igual a boolean2: ${boolean1 == boolean2} `);
console.log(`boolean1 es igual a boolean3: ${boolean1 == boolean3} `);
console.log(`boolean1 es igual a boolean3: ${boolean1 === boolean3} `);

const boolean4 = new Boolean(true);

console.log(boolean4);


const autenticado = true;


if(autenticado) {
    console.log('Si puede ver sus notas');
} else {
    console.log('No puede ver sus notas');
    
}

// Operador ternario
console.log(autenticado ? 'Si puede ver sus notas' : 'No puede ver sus notas');
