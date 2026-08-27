public class Main {
    
    static class Tesla {
        public String model;
        public String color;
        public boolean isInsured;
        
       public Tesla(String model, String color){
           this.model = model;
           this.color = color;
       }
       
       // Complete second constructor
        public Tesla(String model, String color, boolean isInsured){
           this.model = model;
           this.color = color;
           // Set the isInsured property
           this.isInsured = isInsured;
       }
       
    }

    public static void main(String[] args) {
        Tesla myFirstTesla = new Tesla("modelX", "red");
        // Create object instance with second constructor
        Tesla mySecondTesla = new Tesla("modelY", "black", false);
    }
}
