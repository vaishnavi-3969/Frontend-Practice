package main

import (
	"fmt"
	"time"
	"vaishnavi/go/data"
)

type User struct {
	Id   int
	Name string
}

func (u User) PrettyPrint(){
	fmt.Printf("%d : %s", u.Id, u.Name)
}

func main() {
	max:=data.Instructor {Id: 3, LastName: "Kale", FirstName:  "Vaishnavi"}
	fmt.Println(max.Print())

	goCourse := data.Course{Id:2, Name:"Go Fundamentals", Instructor: max}
	fmt.Println(goCourse)

	swiftWS := data.Workshop{Course: goCourse,Instructor: max,Date:time.Now()}
	fmt.Println(swiftWS)
	

	kyle := data.NewInstructor("Kyle", "Simpson")
	fmt.Println(kyle.Print())

	var u1 User
	u1 = User{Id: 1, Name: "Vaishnavi Kale"}
	u2 := User{2, "Vaishnavi"}
	fmt.Println(u1)
	fmt.Println(u2)
	u2.PrettyPrint()
}