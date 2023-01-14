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
     public static void ejerciciob(String[] args) {
      int numwhile= 0;
      while (numwhile<3){
        System.out.println(" este es el numero " + numwhile);
        numwhile++;
      }
    }
    public static void ejercicioc(String[] args) {
      int numwhile= 10;
    do {
        System.out.println(numwhile);
        numwhile--;
        } while (numwhile<3);{
        System.out.println(numwhile);
        numwhile++;
      }
    }

    public static void ejerciciod(String[] args) {
      
      for (int numeroFor=0; numeroFor <= 3; numeroFor++){ 
        System.out.println(numeroFor);
    }
  }
    public static void ejercicioe(String[] args) {
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
