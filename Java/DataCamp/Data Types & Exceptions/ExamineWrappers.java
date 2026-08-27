public class ExamineWrappers {

	public static void main(String[] args) {
		Double pi = 3.14;
		Double eulers = 2.71828;
		// Compare pi's value to euler's
		int x = pi.compareTo(eulers);
		System.out.println(x);

		// Use Short to print out the maximum short
		System.out.println(Short.MAX_VALUE);

		// Use Boolean to turn string "true" to a boolean
		boolean y = Boolean.parseBoolean("true");
		System.out.println(y);
	}
}
