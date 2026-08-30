public class Main {
    public static void main(String[] args) {
        launchMockitoTestsAndPrint(MessageProcessorTest.class);
    }
}

class MessageProcessorTest {

    @Test
    void process_savesNowhere_whenWrongMessageType() {
        InfoStore infoStore = mock(InfoStore.class);
        ErrorStore errorStore = mock(ErrorStore.class);
        MessageProcessor processor = new MessageProcessor(infoStore, errorStore);
        String message = "[WARN] The search is slow.";

        processor.process(message);

        // Verify infoStore was not called
        verifyNoInteractions(infoStore);
        // Verify errorStore.save was called 0 times
        verify(errorStore, times(0)).save(message);
    }
}