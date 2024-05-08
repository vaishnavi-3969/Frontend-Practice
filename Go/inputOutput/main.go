package main

import "fmt"
// import "frontendmasters.com/go/io/data"

var url = "www.vaishnavikale.us"

// func init() {
// 	fmt.Println("A")
// }

// func init() {
// 	fmt.Println("B")
// }

// pass by value
func incrementAge(age *int){
	*age++
	fmt.Println("Incremented age",*age)
}
func calculate(price float32) (float32, float32) {
	return price * 0.09, price * 0.02
}

func main() {

	stateTax,cityTax :=calculate(39.4)
	fmt.Println(stateTax,cityTax)
	age :=21
	incrementAge(&age)
	fmt.Println("Age",age)

	// message := "hello from module"
	// var price = 30.4
	// println("Mesage: "+message)
	// // println(price, url)
	// PrintData()
	// fmt.Println()
	// fmt.Println(data.MaxSpeed)

}
