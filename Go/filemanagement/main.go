package main

import (
	"fmt"
	"os"

	fileutils "vaishnavi.us/go/files"
)

func main() {
	rootPath, _ := os.Getwd()
	filePath := rootPath + "\\data\\text.txt"
	fmt.Println(filePath)
	content, err := fileutils.ReadFile(filePath)

	if err != nil {
		fmt.Println(content)
		newContent := "Original: "+ content + "\n Double the Original: " + content + content
		fileutils.WriteToFile(filePath+".output.txt", newContent)

	} else {
		fmt.Printf("Error panic: %v", err)
	}
}
