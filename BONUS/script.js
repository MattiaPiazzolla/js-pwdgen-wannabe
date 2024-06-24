function generatePassword (){

// Get data using prompt
const name = prompt('Inserisci il tuo nome');
const surname = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const password = `${name}${surname}${color}23`;

// output phrase
document.getElementById('passwordPhrase').innerHTML = `La tua password è <span class="text-danger fw-bold not-safe" data-bs-toggle="tooltip" title="Questa password non è sicura!">${password}</span>`;

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

}

