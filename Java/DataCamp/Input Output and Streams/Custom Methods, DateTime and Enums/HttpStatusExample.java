public public class HttpStatusExample {
    enum HttpStatus { 
        OK(200), NOT_FOUND(404);

        private int code;
		
        // Constructor for the HttpStatus with status code
        HttpStatus(Enum code) { 
            this.code = code;
        }

        public int getCode() {
        	// Return the code for a specific HTTP status
            return code;
        }
    }

    public static void main(String[] args) {
    	// Call method to print the status code
        System.out.println(HttpStatus.OK.getCode()); 
    }
}