package main

import (
	"fmt"
	"time"
)

func printMessage(text string) {
	for i:=0; i<10; i++{
		fmt.Println(text)
		time.Sleep(800*time.Millisecond)
	}
}

func main() {
	go printMessage("Go is great")
	go printMessage("I'm rocking")
	go printMessage("We miss classes")
	time.Sleep(time.Minute)
}