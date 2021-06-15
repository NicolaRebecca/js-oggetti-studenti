// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare 
// a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

var studente = {
    nome : 'pippo',
    cognome : 'franco',
    age : '26'

}

for(var i in studente) {
    if (studente.hasOwnProperty(i)) {
      console.log(i, '' + studente[i]);
    }
  }


// PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, 
// nome e cognome.  Ricordatevi, è un array, quindi? for.

var studentiArray = [

    studenteUno = {
        name: "gigi", 
        surname: "rossi",}, 
    
    studenteDue = {
        name: "maria", 
        surname: "verdi",},
    
    studenteTre = {
        name: "paolo", 
        surname: "bitta"},
    
    studenteQuattro = {
        name: "andrea", 
        surname: "pellegrino"},
    
    studenteCinque = {
        name: "anselmo", 
        surname: "pedone"}
]



for (var x = 0; x < studentiArray.length; x++) { 

    for (var k in studentiArray[x]) { 
        console.log(k, studentiArray[x][k]);
    }

}


// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
// di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.


var studenti = {
    generalità: []
}
    
    
    
while (studenti.generalità.length < 1) {
    
    var studenteNome = prompt('Inserisci il nome dello studente');
    var studenteCognome = prompt('Inserisci il cognome dello studente');
    var studenteEtà = prompt('Inserisci l\'età dello studente');

    
    
    studenti.generalità.push({
        name: studenteNome,
        surname: studenteCognome,
        age: studenteEtà
    });

}

console.log(studenti);

