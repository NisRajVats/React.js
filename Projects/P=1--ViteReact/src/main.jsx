import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Hooks from './Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hooks />
  </StrictMode>,
)


// createRoot(document.getElementById('root')).render  : createRoot('Container') connects DOM to React's VirtualDOM.
// .render() : Renders the JSX code into HTML.
// <App /> : JSX Code. It is a component which will be rendered by ReactDOM.render() into the root container on index.html file.
//Behind the scenes, it uses createElement() method of React library to convert JSX code into HTML.

// Actually the Main.jsx is similar to javascript file and index.html is similar to html file , we used to use in all normal files ..
// so what does react does is , it connects html DOM with react virtual DOM using createRoot() method ..  then render() method adds the jsx code into html code.. how? react have bundlers )that converts jsx code into html code.. then  it renders the html code into browser..


// index.html -> <div id="root"></div>

// main.jsx -> createRoot(document.getElementById('root'))
// 👉 Connects real DOM to React’s virtual DOM engine (Fiber).

// .render(<App />)
// 👉 Tells React to render the <App /> component into #root.

// <App /> returns JSX (developer-friendly syntax).
// 👉 JSX is NOT valid JavaScript. Browsers cannot read it.

// Babel (compiler) takes JSX and transpiles it into plain JavaScript.
// 👉 JSX: <h1>Hello</h1>
// 👉 Babel Output: React.createElement("h1", null, "Hello")

// React.createElement() creates a Virtual DOM object (a JS object describing UI).

// React compares Virtual DOM with previous one (diffing).
// 👉 Only updates the real DOM where changes happened.

// Browser finally paints the updated HTML on screen.
