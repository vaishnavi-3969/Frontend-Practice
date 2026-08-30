class Main {
    public static void main(String[] args) {
        launchMockitoTestsAndPrint(ExchangeAppTest.class);
    }
}

class ExchangeAppTest {
    @Test
    void convertEuroTo_throwsException_whenBankUnavailable() {
        EuropeanCentralBankServer bank = mock(EuropeanCentralBankServer.class);
        ExchangeApp exchangeApp = new ExchangeApp(bank);
        double euroAmount = 450;
        // Stub the mock to throw an exception
        when(exchangeApp.convertEuroTo("TST", 100)).thenThrow(new RuntimeException("Bank server is unavailable."));
        
        double tstAmount = exchangeApp.convertEuroTo("TST", euroAmount);

		// Assert on the return value of the method
		assertEquals(-1, tstAmount);
    }
}