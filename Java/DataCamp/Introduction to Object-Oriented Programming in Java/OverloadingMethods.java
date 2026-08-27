public class Main {
    
    static class Tesla {
        
        public void drive() {
            System.out.println("drive normally");
        }
        
        // Create second drive method with parameter isDrivingBackward
        public void drive(boolean isDrivingBackward){
            System.out.println("driving backward");
        }                   
       
    }

    public static void main(String[] args) {
        Tesla myTesla = new Tesla();
        myTesla.drive();
        // Call second drive method
        myTesla.drive(true);
    }
}
