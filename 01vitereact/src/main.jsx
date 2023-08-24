import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custommmmmmmm APp! </h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'

// }
const anotherUSer = "Chai aur React"


const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUSer
)


const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    reactElement
    // <App />
)
