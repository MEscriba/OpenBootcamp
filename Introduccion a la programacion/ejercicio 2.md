**Enunciado del ejercicio:**

En este ejercicio practicarás las estructuras de control, para ello deberás crear:

a)Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

b)Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

c)Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

d)Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

e)Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.


**Resolucion:**

a)
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      int num1= 10;
      if (num1>0){
        System.out.println("el numero " + num1 + " es positivo");
      }
      else if (num1<0){
      System.out.println("el numero " + num1 + " es negativo");
      }
      else {
        System.out.println("el numero " + num1 + " es cero");
      }
    }
  }

```
b)

```
public class Main {
    public static void main(String[] args) {
      int numwhile= 0;
      while (numwhile<3){
        System.out.println(" este es el numero " + numwhile);
        numwhile++;
      }
    }
  }
```

c)
```
public class Main {
    public static void main(String[] args) {
      int numwhile= 10;
    do {
        System.out.println(numwhile);
        numwhile--;
        } while (numwhile<3);{
        System.out.println(numwhile);
        numwhile++;
      }
    }
  }
```
d)
```
public class Main {
    public static void main(String[] args) {
      
      for (int numeroFor=0; numeroFor <= 3; numeroFor++){ 
        System.out.println(numeroFor);
    }
  }
}
```

e)

```
public class Main {
    public static void main(String[] args) {
      var estacion= "verano";
      switch (estacion){
        case "otonio":
          System.out.println("es otonio");
        break;
        case "primavera":
          System.out.println("es primavera");
        break;
        case "verano":
          System.out.println("es verano");
        break;
        case "invierno":
          System.out.println("es invierno");
        break;
        default:
        System.out.println("no es ninguna estacion");
        }
      }
    }
 ```
