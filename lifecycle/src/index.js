import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })

    /* Declarando desse modo funciona, mas não vai alterar na prática a sua app. Então o jeito correto é acima.
    this.state.copo = 'refrigerante';
    */
  }

  render() {
    const { clock, copo } = this.state
    /* 
      this.state.clock
      this.state.copo
      é o mesmo que a constante declarada acima
    */
    return(
      <div>
        <h1>{ clock }</h1>
        <button onClick= { () => this.alterarCopo() }>
            <h1>{ copo }</h1>
        </button>
      </div>
    )  
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)