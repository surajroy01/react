import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import First from './first.jsx'

function MyApp(){
  return(
    <h1>Function inside app.jsx</h1>
  )
}

// const reactElement = {
//     type: 'a',
//     props : {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const vari = "after trees"
const reactElement1 = React.createElement(
  'a',
  {href:'https://google.cpom',target:'_blank'},
  'click to visit google',
  vari
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App /> 
    // <MyApp />

    // MyApp()//is tarah se v run kr sakte hain
    // <First/>

    // reactElement//this will not run as it requires custom render

    // anotherElement //isko call kr sakte hain

    reactElement1 //like custom reactelement

    //a fragment is passed inside which many element can be put
    // <>
    //   <h1>One parent element</h1>
    //   <p>can add more elements inside a fargment</p>
    // </>
)
