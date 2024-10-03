import React from 'react';

/*React.createElement() expect few arguments in certain order.
    1. type- It takes a tagname as 1st argument.
    2. props- It takes an object containing attributes and their respective value as key-value pair as 2nd argument
    3. Children- Any additional arguments provided to createElement() after the props object are considered the children of the element. These can be nested elements, text nodes, or arrays of such elements.   */

const reactElement = React.createElement(
    'a',
    { href: "https://www.google.com", target: "_blank" },
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById("root")).render(
    reactElement
)