import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function soma(a,b) {
  alert("Resultado da soma: "+(a+b))
}

function App() {

  return (
    <div className="App">
      Bem vindo! <br />
      <Button onClick={ () => soma(2,4) } name="Soma" />
      <ComponentA>
        <ComponentB>
          <Button onClick={ () => soma(5, 4) } name="Soma dentro dos Componentes A e B" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)