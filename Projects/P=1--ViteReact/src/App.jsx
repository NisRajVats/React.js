
import Chai from "./Chai";
function App() {
  const name = "John";

  return (
    <>                    // This is a fragment. It allows us to write multiple elements in one component.                           

      <h1>Hello World! {name}</h1>   
      <a href="https://www.google.com" target="_blank"></a> 
      <Chai/>

    </>
  );
}

export default App


// App.js is a component that is just a function that returns jsx.
// {name} this is evaluated expression.. evaluated means it will contain only the final value of the variable. 
// bable converts this into object that is then converted by react dom into html and rendered on the page., so as we dont use if else in inside if-else , similarly in return statement we cannot write if -else , only evaluated expression 