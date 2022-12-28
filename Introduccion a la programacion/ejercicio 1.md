Enunciado del ejercicio:

Primera parte:
Crear una función con tres parámetros que sean números que se suman entre sí.
Llamar a la función en el main y darle valores.

Segunda parte:
Crear una clase coche.
Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
Una función que incremente el número de puertas que tiene el coche.
Crear un objeto miCoche en el main y añadirle una puerta.
Mostrar el número de puertas que tiene el objeto.

Resolucion:

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      int param1= 10;
      int param2= 30;
      int param3= 25;
      var resultado = suma(param1, param2, param3);
        System.out.println(resultado);
    }
  public static int suma (int a, int b, int c){
    return a + b + c;
    }
  }
  ```

