"use strict";
class Smartphone {
    constructor(nome, ricarica, minuti, chiamate) {
        this._ricarica = 10; // ricarica credito
        this._minuti = 0; // durata in minuti
        this._chiamate = 0; // numero chiamate
        this._nome = nome;
        this._ricarica = ricarica;
        this._minuti = minuti;
        this._chiamate = chiamate;
    }
    get nome() {
        return this._nome;
    }
    get ricarica() {
        return this._ricarica;
    }
    get minuti() {
        return this._minuti;
    }
    get chiamate() {
        return this._chiamate;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set ricarica(ricarica) {
        this._ricarica = ricarica;
    }
    set minuti(minuti) {
        this._minuti = minuti;
    }
    set chiamate(chiamate) {
        this.chiamate = chiamate;
    }
    Ricarica(Ricarica) {
        this._ricarica = Ricarica;
    }
    Minuti(Minuti) {
        this._minuti = Minuti;
    }
    Chiamata(Chiamata) {
        this._chiamate = Chiamata;
    }
    Riparti() {
        this.chiamate = 0;
        this._minuti = 0;
        this._ricarica = 0;
    }
    //const price:number = 0.20;
    numero404() {
        this._ricarica - this._minuti * 0.2;
        return (this._ricarica - this._minuti * 0.2);
    }
}
// utenti
let utente1 = new Smartphone("Mario", 10, 0, 0);
let utente2 = new Smartphone("Maria", 10, 0, 0);
let utente3 = new Smartphone("Genoveffa", 10, 0, 0);
