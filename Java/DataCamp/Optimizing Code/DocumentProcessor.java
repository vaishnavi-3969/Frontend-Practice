public class DocumentProcessor {
    public static void main(String[] args) throws InterruptedException {
        List<String> documents = List.of("Doc1", "Doc2", "Doc3", "Doc4", "Doc5");
        List<Future<String>> futures = new ArrayList<>();
        
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (String doc : documents) {
            // Submit the processDocument() method to the executor
            futures.add(executor.submit(() -> processDocument(doc)));
        }
        
        // Shutdown the executor and wait for termination
        executor.shutdown();
        executor.awaitTermination(10, TimeUnit.SECONDS);
        
        try {
            for (Future<String> future : futures) {
                System.out.println(future.get());
            }
        } catch (ExecutionException e) {
            System.out.println("Error processing documents: " + e.getMessage());
        }
    }

    private static String processDocument(String docId) throws InterruptedException {
        System.out.println("Processing " + docId + " on thread " + Thread.currentThread().getName());
        Thread.sleep((long) (Math.random() * 1000));
        return docId + " Processed";
    }
}