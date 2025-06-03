// console.log('Const');

/**
 * Las variables con const a partir de ES6 
 * 1. se utilizan para definir variables que no cambiaran a los largo
 *  del ciclo de vida de la aplicación.
 * 2. Las variables con const también tienen un ámbito de bloque.
 * 
 * */ 


function ejemplo()  {
    const x = 15;

    if(true) {
        const x = 30;
        console.log(x);
    }

    x = 16;

    console.log(x);
    
}

ejemplo();

const producto = "Semitas";

// producto = "Café";