public class Main {
    public static void main(String[] args) {
        launchMockitoTestsAndPrint(DurationMonitorTest.class);
    }
}

class DurationMonitorTest {
	private AlertService alertService;
	private DurationMonitor monitor;
    
    // Use the correct annotation to make this method execute before every test
    @BeforeEach
    void setUp() {
    	// Set up the mock alertService and the monitor as you did in the earlier exercise
    	this.alertService = mock(AlertService.class);
        this.monitor = new DurationMonitor(alertService);
    }
    
    @Test
    void recordDuration_triggersAlert_whenAboveLimit() {
        this.monitor.recordDuration(1500);
        verify(this.alertService).trigger("Slow execution detected: 1500ms");
    }

    @Test
    void recordDuration_doesNotTriggerAlert_whenUnderLimit() {
        this.monitor.recordDuration(500);
        verifyNoInteractions(this.alertService);
    }
}