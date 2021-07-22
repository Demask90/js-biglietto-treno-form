
// dichiaro la variabile che fa' riferimento al  button (id ='btn_price_ticket') 
var btnPrice = document.getElementById('btn_price_ticket');

// quando viene premuto al button (id ='btn_price_ticket')
// la sua variabile di riferimento (var btnPrice) inizializza la funzione
btnPrice.addEventListener('click',
    function() {

        // dichiaro le variabili che contengono i dati inseriti dall'utente 
        var name = document.getElementById('id_user').value;
        var km = document.getElementById('km_user').value;
        var age_user = document.getElementById('age_user').value;

        // IL BOX_TICKET NON VIENE VISUALIZZATO FINCHE' L' UTENTE NON CLICCA SUL PULSANTE GENERA
        var box_ticket = document.getElementById("box_ticket");
        box_ticket.style.display = "block";

        // NOME PASSEGGERO - STAMPA del nome-cognome passeggero
        document.getElementById("name_surname").innerHTML = name;

        // CARROZZA - Numero carrozza e posto utente
        // considero che il treno abbia 20 carrozze e ci siano 50posti a carrozza
        var train_carriages = 20;
        var carriage_seats = 50;
        var seat_carriage = Math.floor(Math.random() * carriage_seats) + 1;
        var carriage_train = Math.floor(Math.random() * train_carriages) + 1;    
        var carriage_seat_user = carriage_train + " " + seat_carriage;
        console.log (carriage_seat_user);

        //CARROZZA - STAMPA numero carrozza e posto utente 
        document.getElementById("carriage_seat_user").innerHTML = carriage_seat_user;

        // CODICE CP (numero casuale tra 90000 e 100000 escluso)
        var number_ticket_user = Math.floor(Math.random() * (99999 - 90000)) + 90000;
        console.log(number_ticket_user);

        // CODICE CP - STAMPA del codice cp (numero identificativo biglietto)
        document.getElementById("number_ticket_user").innerHTML = number_ticket_user;

        // COSTO BIGLIETTO - calcolo prezzo del biglietto in base ai Km e fasce d'età(offerta)
        // OFFERTA - STAMPA OFFERTA in base all'età dall'utente
        var Euro_km = 0.21;
        var price_ticket_standard = (km * Euro_km);

        if (age_user == "standard") {
            document.getElementById("offer_user").innerHTML = "Biglietto Standard";
        } else if (age_user == "underage") {
            var price_ticket_underage = (price_ticket_standard * 0.8);
            document.getElementById("offer_user").innerHTML = "Sconto Minorenni";
        } else if (age_user == "over65") {
            var price_ticket_over65 = (price_ticket_standard * 0.6);
            document.getElementById("offer_user").innerHTML = "Sconto Over 65";
        }

        // COSTO BIGLIETTO - costo del biglietto in base ai Km e fascia d'età(offerta)
        var price_ticket_user = price_ticket_underage || price_ticket_over65 || price_ticket_standard;
        console.log (price_ticket_user);

        // COSTO BIGLIETTO - STAMPA costo del biglietto
        document.getElementById("price_ticket_user").innerHTML = price_ticket_user + " €";

    }
)

var btn_cancel = document.getElementById("btn_calcel");

btn_cancel.addEventListener('click',
    function() {

        // AL CLIC IL BOX TICKET NON VIENE PIU' VISUALIZZATO
        var box_ticket = document.getElementById('box_ticket');
        box_ticket.style.display = "none";

        // I VALORI DEGLI INPUT VENGONO CALCELLATI
        document.getElementById("id_user").value = " ";
        document.getElementById("km_user").value = " ";
        document.getElementById("age_user").value = " ";
    }
)



// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla",
// se clicchiamo su annulla dobbiamo ripulire il form.

// BONUS: predisporre l'interfaccia grafica responsiva :faccia_leggermente_sorridente:
// Buon lavoro e buon... viaggio :occhiolino: