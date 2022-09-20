class mayusculas{
    constructor(expresion){
        this.expresion=expresion;
    }
    mayus(){
        this.lista=this.expresion.split(" ");
        for (let i = 0; i < this.lista.length; i++) {
            this.lista[i] = this.lista[i][0].toUpperCase() + this.lista[i].substr(1);
        }
        this.expresion=this.lista.join(" ")
        console.log(this.expresion);
    }
}
let palabra1=new mayusculas("hola soy juan");
palabra1.mayus();