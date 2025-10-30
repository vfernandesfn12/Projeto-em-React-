import React from 'react'
import { Container } from 'react-bootstrap'
import FormularioProduto from '../../components/FormularioProduto/FormularioProduto'

const EditarProduto = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center">Editar Produto</h1>
      <FormularioProduto page="editar"/>
      </Container>
    </div>
  )
}

export default EditarProduto