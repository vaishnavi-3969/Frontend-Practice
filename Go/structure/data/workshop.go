package data

import "time"

type Workshop struct {
	Course Course
	Date   time.Time
	Instructor Instructor
}

func NewWorkshop(name string, instructor Instructor) Workshop {
	return Workshop{Course: Course{Name: name}, Instructor: instructor, Date: time.Now()}
}

func (c Workshop) SignUp() bool {
	return true
}