import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      <br />
      {buttonB}
    </div>
  )

  const showCustomer = () => {

    if (!hasCustomer) return null

    return (
      <div>
        <h1>Nome do Cliente: Fulano Silva</h1>
      </div>
    )
  }

  console.log('hasCustomer', hasCustomer)


  return (
    <div>
      <p>Digital Innovation One - Renderização Condicional</p>
      <p>Seja bem vindo, Diego!</p>
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};
export default App;