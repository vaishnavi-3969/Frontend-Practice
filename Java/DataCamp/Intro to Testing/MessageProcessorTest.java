public class Main {
    public static void main(String[] args) {
		launchTestsAndPrint(MessageProcessorTest.class);
    }
}

class MessageProcessorTest {

    @Test
    void processMessage_returnsUppercase() {
        String message = "error!";
        String expected = "ERROR!";

        String actual = MessageProcessor.processMessage(message);
		
        // Assert the message is converted to uppercase
        assertEquals(expected, actual);
    }

    @Test
    void processMessage_throwsException_whenMessageIsNull() {
        String message = null;
        Exception expectedException = null;

        try {
        	MessageProcessor.processMessage(message);
        } catch (Exception e) {
        	expectedException = e;
        }
        // Assert the correct type of exception
        assertInstanceOf(RuntimeException.class, expectedException);
        // Assert the correct exception message
        assertEquals("Message cannot be null.", expectedException.getMessage());
    }
}