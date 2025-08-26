function customRender(element,parent){
    const domElement = document.createElement(element.type)
    for(const prop in element.props){
        if(prop === 'children'){
            domElement.textContent=element.children
        }else{
            domElement.setAttribute(prop,element.props[prop])
        }
    }

    parent.appendChild(domElement);
}

const reactElement = {                 // This is what react see this the HTMl we give in App.jsx , this is what react converts from JSX to JS.
    type: 'a',
    props :{
        href:'https://www.google.com',
        target:'_blank'
    },
    children: 'Google' 

}

const mainContainer = document.querySelector('#root')  // accessing root div



// Now lets render the reactElement we created above to the HTML page . Means Add to the HTML page.

customRender(reactElement,mainContainer)   // customRender function will take two arguments first one is react element and second one is where you want to add it.
