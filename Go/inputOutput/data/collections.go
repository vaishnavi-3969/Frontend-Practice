package data

import "fmt"

var Countries [10]string
var Slice []int
var Codes map[int] string


func init() {
	Countries[0] = "Argentina"
	Countries[1] = "Brazil"
	Countries[2] = "USA"
	Countries[3] = "India"
	Countries[4] = "Japan"
	Countries[5] = "China"
	Countries[6] = "Russia"
	Countries[7] = "Germany"
	Countries[8] = "France"
	Countries[9] = "Italy"
	fmt.Println("Countries saved")
	fmt.Println(Countries)
}