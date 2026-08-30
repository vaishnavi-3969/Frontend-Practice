public class TransactionProcessor {
    public static void main(String[] args) throws InterruptedException {
        List<Transaction> transactions = generateTransactions(1000);
        List<Thread> threads = new ArrayList<>();
        for (int t = 0; t < 4; t++) {
            int start = t * 250;
            int end = (t == 3) ? transactions.size() : (t + 1) * 250;

            // Create thread that will run processTransaction()
            Thread thread = new Thread(() -> {
                for (int i = start; i < end; i++) {
                    processTransaction(transactions.get(i));
                }
            });
            threads.add(thread);
            // Start the thread
            thread.start(); 
        }

        // Wait for all threads to complete
        for (Thread thread : threads) {
            thread.join();
        }
    }

    static void processTransaction(Transaction tx) {
        double result = 0;
        for (int i = 0; i < 1000; i++) {
            result += Math.sqrt(tx.amount * i);
        }
        tx.result = result;
    }

    static List<Transaction> generateTransactions(int n) {
        List<Transaction> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(new Transaction(Math.random() * 1000));
        }
        return list;
    }
}