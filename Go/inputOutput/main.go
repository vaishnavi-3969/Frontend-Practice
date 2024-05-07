package main
import "fmt"
import  "frontendmasters.com/go/io/data"

var url = "www.vaishnavikale.us"

func init() {
	fmt.Println("A")
}

func init() {
	fmt.Println("B")
}

func main () {
	// message := "hello from module"
	// var price = 30.4
	// println("Mesage: "+message)
	// println(price, url)
	PrintData()
	fmt.Println()
	fmt.Println(data.MaxSpeed)
	
}