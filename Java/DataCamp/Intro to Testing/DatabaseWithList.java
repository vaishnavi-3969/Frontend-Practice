public class Main {
    public static void main(String[] args) {
		launchMockitoTestsAndPrint(MessageProcessorTest.class);
    }
}

class MessageProcessorTest {
    @Test
    void process_savesToCorrectDatabase_whenValidInputList() {
        List<String> sampleMessages = new ArrayList<>();
        sampleMessages.add("[INFO] An info message.");
        sampleMessages.add("[INFO] An info message.");
        sampleMessages.add("[ERROR] An error message.");
        sampleMessages.add("[INFO] An info message.");
        
    	// Create a mock for the InfoStore
        InfoStore infoStore = mock(InfoStore.class);
        // Create a mock for the ErrorStore
        ErrorStore errorStore = mock(ErrorStore.class);
        MessageProcessor processor = new MessageProcessor(infoStore, errorStore);
        processor.process(sampleMessages);

		// Verify how many times the infoStore has to store the message
        verify(infoStore, times(3)).save("[INFO] An info message.");
        // Verify how many times the errorStore has to store the message
        verify(errorStore, times(1)).save("[ERROR] An error message."); 
    }
}