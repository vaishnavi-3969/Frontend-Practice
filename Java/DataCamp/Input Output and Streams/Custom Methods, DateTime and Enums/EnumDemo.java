public class EnumDemo {
	// Define enum
    enum Direction { 
        NORTH, EAST, SOUTH, WEST
    }

	// Method with enum parameter
    static void printDirection(Enum direction) { 
        System.out.println("Direction: " + direction);
    }

	// Call method with EAST
    public static void main(String[] args) {
        printDirection(Direction.EAST);
    }
}