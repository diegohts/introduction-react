import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element1 = 'Prazer, me chamo Diego Henrique,'
const element2 = <h1>E seja bem vindo a página! :)</h1>

function App() {
  return (
    <div>
      {element1}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)