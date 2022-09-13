class factorial{
    constructor(numero){
        this.numero=numero;
    }
    calcular(){
        this.factorial=1;
        for(let i=this.numero;i>0;i--){
            this.factorial=this.factorial*i;
        }
        console.log("el factorial de "+this.numero+" es "+this.factorial);
    }
}
var num=new factorial(5);
num.calcular();
