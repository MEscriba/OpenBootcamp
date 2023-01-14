import java.util.*;

public class Main {
    public static void main(String[] args) {
      int param1= 10;
      int param2= 30;
      int param3= 25;
      var resultado = suma(param1, param2, param3);
        System.out.println("la suma dio " + resultado);
    Coche MiCoche = new Coche();
    MiCoche.CantPuertas();
    System.out.println("mi coche tiene " + MiCoche.puertas + " puertas");
    }
  public static int suma (int a, int b, int c){
    return a + b + c;
    }
  }

 class Coche {
   public int puertas = 0;
   public void CantPuertas(){
     this.puertas++;
   }
  }  
