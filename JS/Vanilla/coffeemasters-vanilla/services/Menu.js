import API from "./API.js";

export async function loadData(){
    API.fetchMenu();
    app.store.menu = await API.fetchMenu();
    
}