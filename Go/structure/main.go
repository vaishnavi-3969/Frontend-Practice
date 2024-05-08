package main

import "fmt"

type User struct {
	Id   int
	Name string
}

func (u User) PrettyPrint(){
	fmt.Printf("%d : %s", u.Id, u.Name)
}

func main() {
	var u1 User
	u1 = User{Id: 1, Name: "Vaishnavi Kale"}
	u2 := User{2, "Vaishnavi"}
	fmt.Println(u1)
	fmt.Println(u2)
	u2.PrettyPrint()
}