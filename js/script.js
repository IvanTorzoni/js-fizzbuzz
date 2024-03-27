// test
// alert("ciao")

// Seleziono la riga nel file HTML
const rowElem = document.querySelector(".row"); 
// Log alla console
console.log(rowElem);

// Creo il ciclo for di tutti i numeri
for (let i = 1; i <= 100; i++) {
    // Log alla console
    console.log(i);
    // Creo una variabile per i background che cambierà in base al tipo di elemento
    let bgClass; 

    // Creo il div degli item 
    const boxElem = document.createElement("div");
    
    // Gestione condizioni per scritte sulla base dei numeri divisibili 
    // Gestione per numeri divisibili sia per 5 che per 3
    if ((i % 3 === 0) && (i % 5 === 0)) {   
        // log alla console
        console.log("FizzBuz");
        // Inserisco la stinga solo nei div che soddisfano questa condizione
        boxElem.innerHTML = `FizzBuzz`;
        // Associo la classe creata in css per il background
        bgClass = "fizz-buzz"
        
        // Gestione per numeri divisibili per 3
    } else if (i % 3 === 0){                
        // log alla console
        console.log("Fizz");
        // Inserisco la stinga solo nei div che soddisfano questa condizione
        boxElem.innerHTML = `Fizz`;
        // Associo la classe creata in css per il background
        bgClass = "fizz"

        // Gestione per numeri divisibili per 5
    } else if (i % 5 === 0){                
        // log alla console
        console.log("Buzz");
        // Inserisco la stinga solo nei div che soddisfano questa condizione
        boxElem.innerHTML = `Buzz`;
        // Associo la classe creata in css per il background
        bgClass = "buzz"

        // Gestione tutti gli altri numeri
    } else {                                
        console.log("number")
        // Inserisco il numero nei div che non fanno parte di nessuna condizione precedente
        boxElem.innerHTML = i;
        // Associo la classe creata in css per il background
        bgClass = "number"
    }

    // Creo tutti gli item nel div "row"
    rowElem.append(boxElem);

    // Aggiungo la classe "box" al div di ogni singolo item
    boxElem.classList.add("box");

    // Aggiungo la variabile "bgClass" al div di ogni singolo item per impostare il colore di background
    boxElem.classList.add(bgClass);

    // log alla console
    console.log(boxElem);
}