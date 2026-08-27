public class Main {
    
    static abstract class Car {
        void steer() {
            System.out.println("steer");
        }
    }
    
    static class Tesla extends Car {
        
        // Override steer method
        @Override
        public void steer() {
            System.out.println("tesla steer");
        }
        
    }

    public static void main(String[] args) {
        Tesla myTesla = new Tesla();
        // Call steer method
        myTesla.steer();
    }
}
