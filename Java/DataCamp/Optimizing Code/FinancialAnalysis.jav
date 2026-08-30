public class Main {
    public static String generateReportWithoutOptimization(double[] dataPoints) {
        String report = "";
        for (double value : dataPoints) {
            report += String.format("%.2f, ", value);
        }
        return report;
    }
    
    public static String generateReportWithOptimization(double[] dataPoints) {
        // Create a new string builder
        StringBuilder report = new  StringBuilder(dataPoints.length * 8);
        for (double value : dataPoints) {
            // For every value, add the formatted value to the string builder 
            report.append(String.format("%.2f, ", value));
        }
        // Convert to string before returning
        return report.toString();
    }
    
    public static void main(String[] args) {
        double[] testData = new double[10000];
        for (int i = 0; i < testData.length; i++) {
            testData[i] = Math.random() * 100;
        }
        
        long startWithoutOptimization = System.nanoTime();
        String reportWithoutOptimization = generateReportWithoutOptimization(testData);
        long endWithoutOptimization = System.nanoTime();
        
        long startWithOptimization = System.nanoTime();
        String reportWithOptimization = generateReportWithOptimization(testData);
        long endWithOptimization = System.nanoTime();
        
        System.out.println("Time taken without optimization: " + (endWithoutOptimization - startWithoutOptimization) / 1_000_000 + " ms");
        System.out.println("Time taken with optimization: " + (endWithOptimization - startWithOptimization) / 1_000_000 + " ms");
    }
}