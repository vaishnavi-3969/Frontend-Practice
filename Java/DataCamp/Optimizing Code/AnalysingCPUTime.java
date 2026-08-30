public class Main {
    public static long getCpuTimeNano() {
        // Retrieve the ThreadMXBean instance
ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();if (threadMXBean.isThreadCpuTimeSupported()) {
            threadMXBean.setThreadCpuTimeEnabled(true);
            // Return the current thread CPU time
            return threadMXBean.getThreadCpuTime(Thread.currentThread().threadId());
        } else {
            System.out.println("CPU time measurement not supported");
            return 0;
        }
    }
    
    public static long calculateSum(long n) {
        long sum = 0;
        for (long i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    
    public static long calculateSquareSum(long n) {
        long sum = 0;
        for (long i = 1; i <= n; i++) {
            sum += i * i;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        long n = 100_000_000; // 100 million
        long startSum = getCpuTimeNano();
        long sum = calculateSum(n);
        long endSum = getCpuTimeNano();
        System.out.println("CPU time for sum: " + 
                          ((endSum - startSum) / 1_000_000.0) + " ms");
        long startSquareSum = getCpuTimeNano();
        long squareSum = calculateSquareSum(n);
        long endSquareSum = getCpuTimeNano();
        System.out.println("CPU time for square sum: " + 
                          ((endSquareSum - startSquareSum) / 1_000_000.0) + " ms");
        double ratio = (endSquareSum - startSquareSum) / (double)(endSum - startSum);
        System.out.println("Square sum takes " + ratio + 
                          " times more CPU time than regular sum");
    }
}