package main

import (
	"fmt"
	"go/project/api"
	"go/project/data"
	"html/template"
	"net/http"
)

func handleHello(w http.ResponseWriter, r *http.Request) {
	w.Write([] byte("Hello from a go program"))
}

func handleTemplate (w http.ResponseWriter, r *http.Request){
	tmpl, err := template.ParseFiles("templates/index.tmpl")
	if err != nil {
		w.Write([]byte ("Internal Server Error"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, data.GetAll())
}

func main() {
	server := http.NewServeMux()
	server.HandleFunc("/hello",handleHello)
	server.HandleFunc("/template", handleTemplate)
	server.HandleFunc("/api/exhibitions", api.Get)
	server.HandleFunc("/api/exhibitions/new", api.Post)

	fs := http.FileServer(http.Dir("./public"))
	server.Handle("/", fs)
		
	err := http.ListenAndServe(":3333", server)
	if err != nil {
		fmt.Println("Error while opening the server")
	}
}
