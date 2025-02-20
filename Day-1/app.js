const heading = React.createElement(
    "h1",
    {id : "head1"},
    "Hello REACT!"
);
console.log(heading);
//the heading here is not a html tag but a JS object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//nested elements
/* <div id = "parent">
    <div id="child1">
        <h1>child1's H1</h1>
        <h2>child1's H2</h2>
    </div>
    <div  id="child2">
    <h1>child1's H1</h1>
    <h2>child1's H2</h2>
    </div>
</div> */


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [
//         React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"child1's h1"),
//         React.createElement("h2",{},"child1's h2")

//         ]),

//         React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"child2's h1"),
//         React.createElement("h2",{},"child2's h2")
//         ]),
    

//     ]);

//  const root2 = ReactDOM.createRoot(document.getElementById("root"));
//  root2.render(parent)   ;
