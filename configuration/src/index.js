import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


const App = () => {

  return (
    <div className="App">
      <h2>Configurações inicias realizadas:</h2>
      <h5>npm init</h5>
      <h6>npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1</h6>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)