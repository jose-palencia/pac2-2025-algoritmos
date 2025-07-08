console.log('--------------BREAK-----------');
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log('Cinco');
        break;
    }
    console.log(`Numero: ${i}`);
}

console.log('--------------CONTINUE-------------');
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log('Cinco');
        continue;
    }
    console.log(`Numero: ${i}`);
}


// FIZZ BUZZ - 100 numero
// Múltiplos de 3, 6, 9, 12 FIZZ
// Múltiplos de 5, 10, 15, 20 BUZZ
// Múltiplos de 15, 30, 45 FIZZ BUZZ

for (let i = 1; i < 100; i++) {
    if(i % 15 === 0) {
        console.log(`${i} - FIZZ BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} - FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} - BUZZ`);        
    }
}