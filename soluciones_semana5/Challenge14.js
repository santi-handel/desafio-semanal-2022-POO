class armstrong{
    constructor(numero){
        this.numero=numero;
    }
    calcular(){
        let suma=0;
        let temp=this.numero;
        while(temp>0){
            let remainder=temp%10;
            suma+=remainder*remainder*remainder;
            temp=parseInt(temp/10); 
        }
        if(suma==this.numero){
            console.log("el numero "+this.numero+" es numero de armstrong");
        }
        else if(suma != this.numero){
            console.log("el numero "+this.numero+" NO es numero de armstrong");
        }
    }
}
var num1=new armstrong(153);
num1.calcular();