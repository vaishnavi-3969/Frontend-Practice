// Define Phone class extending Device
class Phone extends Device { 
    // Override the turnOn() method
    @Override
    void turnOn() {
        System.out.println("Phone is turning on");
    }
    public static void main(String[] args) {
    	// Create instance of Phone
        Phone p = new Phone(); 
        
        //Call turnOn() from phone instance
        p.turnOn();
    }
}

class Device {
    void turnOn() {
        System.out.println("Device is turning on");
    }
}