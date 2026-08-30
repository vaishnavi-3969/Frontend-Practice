public class AsyncDashboard {
    public static void main(String[] args) throws Exception {        
        CompletableFuture<UserSummary> userSummaryFuture = CompletableFuture
            // Fetch the user data
            .supplyAsync(() -> fetchUserData("user123"))
            
            // Create summary based on fetched data
            .thenApply(userData -> createSummary(userData))
            
            // Add exception handling
            .exceptionally(ex -> new UserSummary(new UserData("error", "Error User"))); 
        Thread.sleep(5000);
    }
    
    private static UserData fetchUserData(String userId) {
        simulateNetworkLatency(300);
        return new UserData(userId, "John Doe");
    }
    
    private static UserSummary createSummary(UserData userData) {
        simulateNetworkLatency(200);
        return new UserSummary(userData);
    }
    
    private static void simulateNetworkLatency(int millis) {
        try { Thread.sleep(millis); } catch (InterruptedException e) {}
    }
}