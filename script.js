// Get data using prompt
const name = prompt('Inserisci il tuo nome');
const surname = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const password = `${name}${surname}${color}23`;

// output phrase
document.getElementById('passwordPhrase').innerHTML = `La tua password è ${password}`;