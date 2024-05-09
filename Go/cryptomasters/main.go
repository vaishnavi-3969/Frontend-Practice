package main

import (
	"fmt"
	"go/cryptomasters/api"
)

func main() {
	rate, err := api.GetRate("INR")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("Currency: %s, Price: %f\n", rate.Currency, rate.Price)
}