//cutsom render for rendering the react element
// function customRender (reactElement,container) {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// }

//doing the same above things using loop for setattribute
function customRender (reactElement,container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//reactelement means react is tarah se ek element ko dekhta h
const reactElement = {
    type: 'a',
    props : {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')//kis container me element jayega

customRender(reactElement,mainContainer)//render karane ke lie ek container aur element hoga