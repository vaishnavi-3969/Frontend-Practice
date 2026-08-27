public class Test {
  public static void main (String[] args){
  	SavingsAccount account = new SavingsAccount();
    account.setAccountNo("12345");
    account.setBalance(50000.00);
    System.out.println("Account " + account.getAccountNo() + " has balance of: " + account.getBalance());
  }
}

public class SavingsAccount {
	private String accountNo;
    // Add a balance field
	private double balance;

	public String getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

    // Define a balance getter method
	public double getBalance() {
		return balance;
	}

    // Define a balance setter method
	public void setBalance(double balance) {
    	// Set the balance field
		this.balance = balance;
	}
}
