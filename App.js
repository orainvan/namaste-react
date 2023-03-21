let heading1 = React.createElement("h1", {}, "heading 1");
// by using React

let heading2 = React.createElement("h2", {}, "heading 2");
let div = React.createElement("div", {}, [heading1, heading2]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
