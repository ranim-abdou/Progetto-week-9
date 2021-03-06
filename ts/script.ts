class Smartphone {                    //classe smartphone
    private _nome : string            //utenti
    private _ricarica : number = 10;  // ricarica credito
    private _minuti : number = 0;     // durata in minuti
    private _chiamate : number = 0;   // numero chiamate

    constructor ( nome:string, ricarica:number, minuti:number, chiamate:number) {
        this._nome = nome;
        this._ricarica = ricarica;
        this._minuti = minuti;
        this._chiamate = chiamate;
    }

    get nome() :string{
        return this._nome;
    }
    get ricarica() :number {
        return this._ricarica;
    }
    get minuti() : number{
        return this._minuti;
    }
    get chiamate():number{
        return this._chiamate;
    }

    set nome(nome:string) {
        this._nome = nome
        console.log("Utente")
    }
    set ricarica(ricarica:number) {
        this._ricarica = ricarica
        console.log("Ricarica avvenuta!")
    }
    set minuti(minuti:number) {
        this._minuti = minuti 
        console.log("Durata della chiamata")
    }
    set chiamate(chiamate:number) {
        this.chiamate = chiamate
        console.log("chiamate effetutate")
    }

    public Ricarica(Ricarica:number): void {
        this._ricarica = Ricarica
    }

    public Minuti(Minuti:number): void {
        this._minuti= Minuti
    }
    public Chiamata(Chiamata:number) :void {
        this._chiamate = Chiamata
    }
    public Riparti():void {     //azzera la chiamata 
        this.chiamate = 0;
        this._minuti = 0;
        this._ricarica = 0;
    }
    //const price:number = 0.20;
    public numero404(): number {
        this._ricarica - this._minuti*0.2;
        return (this._ricarica - this._minuti*0.2)
    }
}
// utenti
let utente1 = new Smartphone("Mario", 10, 0, 0);
let utente2 = new Smartphone("Maria", 10, 0, 0);
let utente3 = new Smartphone("Genoveffa", 10, 0, 0);





