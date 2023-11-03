const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("link clicked");
                const url1 = event.target.href;
                const url2 = event.target.getAttribute("href");
                Router.go(url2);
            });
        });

        //event handler for url changes
        window.addEventListener("popstate", event =>{
            Router.go(event.state.route,false);
        })
        
        //check the initial url
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement("menu-page");
                // pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                // pageElement.textContent = "Your Order";
                break;
            default:
                if (route.startsWith("/product-")) {
                    pageElement = document.createElement("details-page");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageElement.dataset.id = paramId;
                }
        }
        if (pageElement) {
            // document.querySelector("main").children[0].remove();
            //clearing first else the elements will keep on appending
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
            //we want to go to the top
            window.scrollX = 0;
            window.scrollY = 0;
        }
    },
};
export default Router;
