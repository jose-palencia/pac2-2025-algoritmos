const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// Igualdad o comparación
console.log(`El ${numero1} es igual que ${numero2}: ${numero1 == numero2}`);
console.log(`El ${numero1} es igual que ${numero3}: ${numero1 == numero3}`);


// Comparador estricto
console.log(`El ${numero1} es igual que ${numero2}: ${numero1 === numero2}`);
console.log(`El ${numero1} es igual que ${numero2}: ${numero1 === Number.parseInt(numero2)}`);

// Diferente
const password1 = 'admin';
const password2 = 'Admin'

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 !== Number.parseInt(numero2));
