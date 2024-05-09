package main

import (
	"fmt"
	"time"
)

func printMessage(text string, channel chan string) {
	for i := 0; i < 10; i++ {
		fmt.Println(text)
		time.Sleep(800 * time.Millisecond)
	}
	channel <- "Done!"
}
func main() {
	// var channel chan string
	channel := make(chan string)
	go printMessage("Frontend Masters rocks!", channel)
	// <-channel
	fmt.Println(<-channel)
}