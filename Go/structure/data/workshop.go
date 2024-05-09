package data

import "time"

type Workshop struct {
	Course Course
	Date   time.Time
	Instructor Instructor
}