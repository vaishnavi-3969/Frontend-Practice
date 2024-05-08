package main

import "fmt"

func main() {
	var operation string
	var number1, number2 int

	fmt.Println("calculator 1.0")
	fmt.Println("==============")
	fmt.Println("Which operation you wish to perform? +,-,*,/")
	fmt.Scanf("%s", &operation)
	fmt.Scanln()
	fmt.Println("Enter first number: ")
	fmt.Scanf("%d", &number1)
	fmt.Scanln()
	fmt.Println("\nEnter second number: ")
	fmt.Scanf("%d", &number2)
	fmt.Print("Result: ")
	switch operation {
	case "+":
		fmt.Println(number1+number2)
	case "-":
		fmt.Println(number1-number2)
	case "*":
		fmt.Println(number1*number2)
	case "/":
		fmt.Println(number1/number2)
	default:
		fmt.Println("Invalid operation")
	}
}
