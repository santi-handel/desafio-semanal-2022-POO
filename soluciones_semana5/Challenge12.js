class palindromo{
    constructor(expresion){
        this.expresion=expresion;    
    }
    //analizar si es palíndromo
    analizar(){
        this.reves=[];
        this.expresion=this.expresion.split("");
        for (let i=this.expresion.length;i>=0;i--){
            this.reves.push(this.expresion[i]);
        }
        this.expresion=this.expresion.join("");
        this.reves=this.reves.join("");
    if(this.expresion == this.reves){
            console.log("La palabra "+ this.expresion + " es un palíndromo");
                }
    else if(this.expresion != this.reves){
            console.log("La palabra " + this.expresion +" no es un palíndormo");
        }
    }
}

var palabra=new palindromo("oso");
palabra.analizar();
var palabra2=new palindromo("perro");
palabra2.analizar();
