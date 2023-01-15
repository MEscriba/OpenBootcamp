//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle 
//while, una bifurcación if y una sentencia break
var factorial= 10;
let num = 1;
let cont = 1;
while  (cont<=factorial) {
    num= num*cont;
    cont++;
    if (cont==factorial){
        console.log(num);  
        break; 
    } 
    
}
