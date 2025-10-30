import React from 'react'
import FormularioProduto from '../../components/FormularioProduto/FormularioProduto'
import { Container } from 'react-bootstrap'

const CadastrarProdutos = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center">Cadastro Produto</h1>
      <FormularioProduto page="cadastro"/>
      </Container>
    </div>
  )
}

export default CadastrarProdutos