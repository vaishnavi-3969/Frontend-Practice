class Main {
    public static void main(String[] args) {
        launchTestsAndPrint(ExchangeAppTest.class);
    }
}

class ExchangeAppTest {

    @Test
    void convertEuroTo_convertsTRY() {
        // Create a EuropeanCentralBankServer object
        EuropeanCentralBankServer bank = new EuropeanCentralBankServer(); 
        // Pass the dependency to the constructor of ExchangeApp
        ExchangeApp exchangeApp = new ExchangeApp(bank);
        double euroAmount = 100;
        double tryAmount = exchangeApp.convertEuroTo("TRY", euroAmount);
        System.out.println("Converted " + euroAmount + " EUR to " + tryAmount + " TRY.");
        // Write down a meaningful assertion that matches the expression in the parentheses
        assertTrue(tryAmount > 0);
    }
}