class calculodiferencia{
    constructor(expresion1,expresion2){
        this.expresion1=new Date(expresion1).getTime();
        this.expresion2=new Date(expresion2).getTime();
    }
    calcular(){
        this.diffecha=this.expresion1-this.expresion2;
        this.diffecha=Math.abs(this.diffecha);
        console.log(this.diffecha/(1000*60*60*24));

    }
}
let calculo1=new calculodiferencia("2020-02-20","2022-02-21");
calculo1.calcular()