const App = () => {
    return React.createElement(
      "div",
      { id: "my-id" },
      React.createElement("h1", {}, "Adopt Me!")
    );
  };

  const container = document.getElementById("root");
  // ReactDOM.render(container, <App/>) => old way
  const root = ReactDOM.createRoot(container);
  // {} => attribute null -> children
  root.render(React.createElement(App, {}, null));
  