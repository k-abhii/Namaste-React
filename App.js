
const heading = React.createElement(
  "h1",
  { id: "title", className: "root" },
  "Namaste Everyone From React"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", className: "root" },
  "Namaste Everyone From React"
);
const container = React.createElement(
  "div",
  { id: "container", className: "root" },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
