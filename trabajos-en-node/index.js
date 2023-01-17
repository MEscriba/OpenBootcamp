import chalk from 'chalk';
import {suma, multiplica} from './controller.js' 

const sum1 = suma(1,2)
const sum2 = suma(4,5)
console.log("el resultado de la primera suma es: "+ sum1)
console.log("el resultado de la segunda suma es: "+ sum2)
const multiplicacion = multiplica(sum1,sum2)
console.log(chalk.green(`el resultado de la multiplicacion de ${sum1} y ${sum2} es: `+multiplicacion))