public class UserStateManager {
    enum UserState { 
        NEW, ACTIVE, SUSPENDED; 

        public boolean isActiveUser() {
        
        	// return if user is in ACTIVE state
            return this == ACTIVE;
        }
    }

    public static void main(String[] args) {
    	// Create a UserState with SUSPENDED status
    	UserState suspendUser = UserState.SUSPENDED;
        
        // Create a UserState with ACTIVE status
    	UserState activeUser = UserState.ACTIVE;
        
    	// check if suspendUser is an active user
        System.out.println(suspendUser.isActiveUser()); 
        System.out.println(activeUser.isActiveUser());
	}
}