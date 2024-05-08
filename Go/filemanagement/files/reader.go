package fileutils

import "os"

func ReadFile(filename string) (string, error) {
	content, error := os.ReadFile(filename)
	if error != nil {
		//we couldn't read the file
		return "", error
	} else {
		return string(content), nil
	}
}
