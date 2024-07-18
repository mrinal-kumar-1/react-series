
const reactElement = {
    type : 'a',
    props : {
       href : 'https://www.linkedin.com',
       target : '_blank'
    },
    children : 'Visit LinkedIn'

}

function createAndRender(reactElement, element){
    // const newElement = document.createElement(reactElement.type)
    // newElement.innerHTML = reactElement.children
    // newElement.setAttribute('href', reactElement.props.href)
    // newElement.setAttribute('target', reactElement.props.target)
    

    // element.appendChild(newElement)

    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children
    for(let prop in reactElement.props ){
        if(prop === 'children') continue
         newElement.setAttribute(prop, reactElement.props[prop])
    }

    element.appendChild(newElement)
}


const element = document.getElementById('root')

createAndRender(reactElement, element)