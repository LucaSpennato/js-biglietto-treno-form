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
let ticketPrice;

// due variabili ora inutilizzate, servono a definire il discount in assenza di selettore di età libero con numeri
// let discountMinor = 15;
// let discountElder = 35;

// diciamo a submitBtn di ascoltare il click in pagina
submitBtn.addEventListener('click', function(){  

    // diciamo a traveldistance e userage che il loro valore è il value dellinput, 
    // ergo qualsiasi cosa l'utente scriverà
    let travelDistanceKm = parseInt (document.getElementById("km_input").value);
    console.log (travelDistanceKm);

    // utilizato in assenza di selezione libera di età, sbloccare anche le due variabili discount sopra
    // let userAge = parseInt (document.getElementById('age_input').value);
    // console.log (userAge);

    let userName = document.getElementById('name_input').value;
    console.log (userName);
    document.getElementById('user_name_info').innerHTML += `<div>${userName}</div>`;

    let ageSelector = document.getElementById('age_choose').value;
    // ageSelector = parseInt(ageSelector);
    // per altro metodo, dare le variabili di sconto direttamente nel value e fare il parseint, successivamente vanno messe nella condizione sotto
    console.log (ageSelector);

    let cabNumberGenerator = (Math.floor(Math.random() * 10) + 1 );
    document.getElementById('cab_number').innerHTML += `<div>${cabNumberGenerator}</div>`;

    let ticketNumberGenerator = (Math.floor(Math.random() * 999999) + 1 );
    document.getElementById('ticket_number').innerHTML += `<div>${ticketNumberGenerator}</div>`;
    // prezzo del biglietto!
    let ticketPrice = travelDistanceKm * pricePerKm;
    ticketPrice = ticketPrice.toFixed(2);
    console.log (ticketPrice);

    // facciam vedere in pagina i km da percorrere (chiedere domani, perchè non si vedono i decimali?)
    document.querySelector('main .info_display_wrapper .user_taught_km').append(` ${travelDistanceKm} Km!`);

    // con if isnan(travelDistanceKm) verifichiamo che l'utente abbia inserito dei numeri, altrimenti parte un alert
    if (isNaN(travelDistanceKm)){
        alert('Non hai inserito un numero nella selezione kilometri, ricarica la pagina');
        location.reload();
    } else{
        if (ageSelector == 'minor'){
            ageSelector = 15;
            discountApply = ((ticketPrice * ageSelector) / 100);
            discountedTicketPrice = (ticketPrice - discountApply);

            discountApply = discountApply.toFixed(2);
            discountedTicketPrice = discountedTicketPrice.toFixed(2);

            console.log ('Prezzo del biglietto con sconto under 18: ' + discountedTicketPrice);
    
            // facciam vedere i dati con la scontistica applicata:
            // in questo caso rimuoviamo d-none, tanto per provarle tutte (e credo sia anche più corretto dato che d-none resta se inseriamo d-block)
            // NEL CASO IN CUI VOLESSIMO AGGIUNGERE CLASSI:
            // document.querySelector('main .user_pricing_infos div').classList.add ('text-danger', 'text-center', 'active'); E CI PERMETTE DI METTERNE PIù DI UNA
            document.querySelector('main .user_pricing_infos div').classList.remove ('d-none');
    
            // inseriamo i valori nei div appositi
            document.querySelector('main .user_pricing_infos>div>div:first-child').append(` ${ticketPrice} €`);
            document.querySelector('main .user_pricing_infos>div>div:nth-child(2)').append(` 'Under 18'`);
            document.querySelector('main .user_pricing_infos>div>div:nth-child(3)').append(` ${discountApply} €`);
    
            // prezzo finale:
            document.getElementById('user_ticket_price').append(` ${discountedTicketPrice} €`);
    
        } else if (ageSelector == 'elder') {
            ageSelector = 35;
            discountApply = ((ticketPrice * ageSelector) / 100);
            discountedTicketPrice = (ticketPrice - discountApply);
            
            discountApply = discountApply.toFixed(2);
            discountedTicketPrice = discountedTicketPrice.toFixed(2);
    
            console.log('Prezzo del bbiglietto con sconto over 65: ' + ticketPrice);
            
            // facciam vedere i dati di scontistica applicata:
            document.querySelector('main .user_pricing_infos div').classList.remove ('d-none');
    
             // inseriamo i valori nei div appositi
             document.querySelector('main .user_pricing_infos>div>div:first-child').append(` ${ticketPrice} €`);
             document.querySelector('main .user_pricing_infos>div>div:nth-child(2)').append(` 'Over 65'`);
             document.querySelector('main .user_pricing_infos>div>div:nth-child(3)').append(` ${discountApply} €`);
    
              // prezzo finale:
            document.getElementById('user_ticket_price').append(` ${discountedTicketPrice} €`);
    
        } else {
            console.log('Prezzo del biglietto: ' + ticketPrice);
            
    
            // facciamo in modo che appaia un messaggio di scontistica non applicata nel caso in cui non rientri nei parametri
    
            // 1 METODO, GLI DIAMO D-NONE IN HTML E POI D-BLOCK NELLE CLASSI
            // let noDiscount = document.getElementById('no_discount');
            // noDiscount.classList = 'd-block';
            // OPPURE: document.querySelector('main .user_pricing_infos #no_discount').className += 'd-block';
    
            //NOTE BENE: usando però un classList('') o className(''),
            // OPPURE class.List('') o className ('') += 'qualcosa' STAI AGGIUNGENDO
            //   AGGIUNGI SOLO CLASSI, 
            // ne vuoi rimuovere? classList o ClassName .remove('')
    
            // ALTRO DI INFINITI MEDOTI, MA IN QUESTO CREIAMO IL DIV
            document.querySelector('main .user_pricing_infos').innerHTML += '<div>Nessuna Scontistica è stata applicata.</div>'
    
            // prezzo finale:
            document.getElementById('user_ticket_price').append(` ${ticketPrice} €`);
        }
    }

})

