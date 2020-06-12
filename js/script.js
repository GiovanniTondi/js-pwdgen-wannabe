// Chiedere il nome
var name = prompt("Inserisci il tuo nome:");

// Chiedere il cognome
var surname = prompt("Inserisci il tuo cognome:");

// Chiedere il colore preferito
var color = prompt("Inserisci il tuo colore preferito");

// Concatenare variabili
var pwd = name + surname + color + '19';

// Stampa pwd
document.getElementById('pwd').innerHTML = pwd;
