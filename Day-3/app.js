import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement("h1",{id:"heading"},"Hello React");
console.log(heading); 


const elem = "Learning:";

//React Functional Component
const Heading = () => 
(
    <div id = "container">
 
    <h1>Hello React Components</h1>
   </div>
);

//JSX element
const Title = ( 
    <h1>{elem}
    <Heading/>
    {/*{Heading()}
    <Heading></Heading> */ }
    Hello React using jsx</h1>
)




const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);


root.render(Title);
 
