package data

import "fmt"

type Duration float32 // in hrs

type Course struct {
	Id         int
	Name       string
	Slug       string
	Legacy     bool
	Duration   Duration
	Instructor Instructor
}

//string reprn of our structure 
func (c Course) String() string {
	return fmt.Sprintf("----%v----(%v)", c.Name, c.Instructor.FirstName)
}