// test
// alert("ciao")

// Creo il ciclo for di tutti i numeri
for (let i = 1; i <= 100; i++) {
    // Log alla console
    console.log(i);

    // Gestione condizioni per scritte sulla base dei numeri divisibili 
    
    if ((i % 3 === 0) && (i % 5 === 0)) {   // Gestione per numeri divisibili sia per 5 che per 3
        // log alla console
        console.log("FizzBuz"); 
    } else if (i % 3 === 0){                // Gestione per numeri divisibili per 3
        // log alla console
        console.log("Fizz");
    } else if (i % 5 === 0){                // Gestione per numeri divisibili per 5
        // log alla console
        console.log("Buzz");
    } 
}