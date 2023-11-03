import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

//link web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async() => {
    // const menu = await API.fetchMenu();
    loadData();
    console.log(app.store.menu);
    app.router.init();
    
});






// =========================================
//it's better to wait for the event for manipulation
// window.addEventListener("DOMContentLoaded", () => {
//     let nav = $("nav");
//     console.log(nav);
//     nav.innerHTML = `
//     <h2>Hello DOM</h2>
//     <p>This is html within a js string</p>
//     `
//     nav.on("Click")
// });


// _.domready = 

// const $ = function(args){ return document.querySelector(args);}
// const $$ = function(args){ return document.querySelectorAll(args);}
// const _ = {
//     domready: (e) =>{
//         if (document.readyState === "complete" || document.readyState === "interactive") {
//             e();
//         } else {
//             document.addEventListener("DOMContentLoaded", e);
//         }
//     }
// }
// HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
// HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
// HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
// HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }
