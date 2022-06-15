// Descrizione:
// Scrivere un programma che chieda all’utente:
//  -Il numero di chilometri da percorrere
//  -Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km -(0.26 € al km)
//  -va applicato uno sconto del 15% per i minorenni
//  -va applicato uno sconto del 35% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota: Se non vi sentite particolarmente creativi, questo screenshot potrebbe essere un’implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

// definiamo le varibili comuni a tutti
// submitBtn, questa variabile avrà ora come valore il bottone nell'html
let submitBtn = document.getElementById('submit_button');
let pricePerKm = 0.26;
let discountMinor = 15;
let discountElder = 35;
let ticketPrice;

// diciamo a submitBtn di ascoltare il click in pagina
submitBtn.addEventListener('click', function(){  
    // diciamo a traveldistance e userage che il loro valore è il value dellinput, 
    // ergo qualsiasi cosa l'utente scriverà
    let travelDistanceKm = parseInt (document.getElementById("km_input").value);
    let userAge = parseInt (document.getElementById('age_input').value);
    console.log (travelDistanceKm);
    console.log (userAge);
    
    // prezzo del biglietto!
    let ticketPrice = travelDistanceKm * pricePerKm;
    console.log (ticketPrice);

    // facciam vedere in pagina i km da percorrere (chiedere domani, perchè non si vedono i decimali?)
    document.querySelector('main .info_display_wrapper .user_taught_km').append(` ${travelDistanceKm} Km!`)

    if (userAge < 18){
        ticketPrice = (ticketPrice - (ticketPrice * discountMinor) / 100);
        ticketPrice = ticketPrice.toFixed(2)
        console.log ('Prezzo del biglietto con sconto under 18: ' + ticketPrice);
        
        // facciam vedere in html il risultato in base alla condizione soddisfatta
        document.querySelector('main .info_display_wrapper .user_taught_price').append(` ${ticketPrice} €`);
    } else if (userAge >= 65) {
        ticketPrice = (ticketPrice - (ticketPrice * discountElder) / 100);
        ticketPrice = ticketPrice.toFixed(2);
        console.log('Prezzo del bbiglietto con sconto over 65: ' + ticketPrice);
        document.querySelector('main .info_display_wrapper .user_taught_price').append(` ${ticketPrice} €`);
    } else {
        ticketPrice = ticketPrice.toFixed(2)
        console.log('Prezzo del biglietto: ' + ticketPrice);
        document.querySelector('main .info_display_wrapper .user_taught_price').append(` ${ticketPrice} €`);

        // facciamo in modo che appaia un messaggio di scontistica non applicata nel caso in cui non rientri nei parametri
        let noDiscount = document.getElementById('no_discount');
        noDiscount.classList = 'd-block';
        // OPPURE: document.querySelector('main .user_pricing_infos #no_discount').className ('d-block');
    }

})

