public class Main {
    public static void main(String[] args) {
        launchMockitoTestsAndPrint(DurationMonitorTest.class);
    }
}

class DurationMonitorTest {

    @Test
    void recordDuration_triggersAlert_whenAboveLimit() {
        AlertService alertService = mock(AlertService.class);
        DurationMonitor monitor = new DurationMonitor(alertService);
        monitor.recordDuration(1500);

        // Verify alertService.trigger() was called with the expected message
        verify(alertService).trigger("Slow execution detected: 1500ms");
    }

    @Test
    void recordDuration_doesNotTriggerAlert_whenUnderLimit() {
        AlertService alertService = mock(AlertService.class);
        DurationMonitor monitor = new DurationMonitor(alertService);
        monitor.recordDuration(500);

        // Verify alertService was not used
        verify(alertService, times(0));
    }
}