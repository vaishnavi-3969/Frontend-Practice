package api

import (
	"encoding/json"
	"go/project/data"
	"net/http"
	"strconv"
)

func Get(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	// api/exhibitions?id=3
	id := r.URL.Query()["id"] 

	if(id != nil){ //we'll try to serve only one
		finalId, err := strconv.Atoi(id[0])
		if err == nil && finalId < len(data.GetAll()) {
			json.NewEncoder(w).Encode(data.GetAll()[finalId])

		}	else{
			http.Error(w, "Invalid Exhibition", http.StatusBadRequest)
		}
	}else{
		json.NewEncoder(w).Encode(data.GetAll())
	}

	json.NewEncoder(w).Encode(data.GetAll())
}