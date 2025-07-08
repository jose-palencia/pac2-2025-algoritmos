let i = 1;

while (i <= 100) {
    if(i % 15 === 0) {
        console.log(`${i} - FIZZ BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} - FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} - BUZZ`);        
    }

    i++;
}


let x = 1;

do {
    console.log(`Numero: ${x}`);    
    x++;
} while (x <= 10);