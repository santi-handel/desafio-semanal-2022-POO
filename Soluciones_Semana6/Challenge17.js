    class carrera{
        constructor(pista, acciones){
            this.pista=pista;
            this.acciones=acciones;
        }
        check(){
            this.pista.split("");
            this.acciones.split(",");
            let i=0
            this.completado=true
            this.pista2=this.pista
            while(i<=this.pista.lenght){
                if(this.pista[i]=="_" && this.acciones[i]=="run"){
                    this.pista2[i]=="_";
                }
                else if(this.pista[i]=="|" && this.acciones[i]=="jump"){
                    this.pista2[i]="|";
                }
                else if(this.pista[i]=="_" && this.acciones[i]=="jump"){
                    this.pista2[i]="x";
                }
                else if(this.pista[i]=="|" && this.acciones[i]=="run"){
                    this.pista2[i]="/"
                }
            }
            for (let i=0;i<=this.pista2.lenght;i++){
                if (this.pista2[i]=="x" || this.pista2=="/"){
                    this.completado=false;
                }
            }
            console.log(this.pista);
            console.log(this.pista2);
            console.log(this.completado); 

    }
}
var carrera0=new carrera("_|_","run,jump,run");
carrera0.check();