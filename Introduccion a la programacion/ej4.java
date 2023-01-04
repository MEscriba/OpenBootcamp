public class Ejercicio_4_Bootcamp {

	public static void main(String[] args) {
		Cliente cliente = new Cliente();
		Trabajador trabajador = new Trabajador();
		
		cliente.setEdad(20);
		cliente.setNombre("Ramiro");
		cliente.setTelefono(123456789);
		cliente.setCredito(20000);
		trabajador.setEdad(45);
		trabajador.setNombre("Ismael");
		trabajador.setTelefono(22334455);
		trabajador.setSalario(120000);
		
		System.out.println("el cliente tiene "+cliente.edad+" años");
		System.out.println("el nombre del cliente es: "+cliente.nombre);
		System.out.println("el numero de telefono es: "+cliente.telefono);
		System.out.println("su credito es de: "+cliente.credito+" pesos");
		System.out.println("el trabajador tiene "+trabajador.edad+" años");
		System.out.println("el nombre del trabajador es: "+trabajador.nombre);
		System.out.println("el numero de telefono es: "+trabajador.telefono);
		System.out.println("su credito es de: "+trabajador.salario+" pesos");
		
	}

}
	class Persona {
		int edad;
		String nombre;
		int telefono;
		
		public int getEdad(){
			return this.edad;
		}
		
		public void setEdad(int edad){
			this.edad = edad;
		}
		
		public String getNombre(){
			return this.nombre;
		}
		
		public void setNombre(String nombre){
			this.nombre = nombre;
		}
		
		public int getTelefono(){
			return this.telefono;
		}
		
		public void setTelefono(int telefono){
			this.telefono = telefono;
		}
			
	}
	
	class Cliente extends Persona {
		int credito;
		
		public int getCredito(){
			return this.credito;
		}
		
		public void setCredito(int credito){
			this.credito = credito;
		}
		
	}
	
	class Trabajador extends Persona {
		int salario;
		
		public int getSalario(){
			return this.salario;
		}
		
		public void setSalario(int salario){
			this.salario = salario;
		}
	}



