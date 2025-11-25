// importando components do bootstrap
import Container from "react-bootstrap/Container";


// Importando o componente de formulário
import FormularioCliente from "../../components/FormularioCliente/FormularioCliente";

const CadastrarCliente = () => {

  return (
    <div>
      <Container>
        <h1>Cadastrar Cliente</h1>
        <FormularioCliente page="cadastro" />
      </Container>
    </div>
  );
};

export default CadastrarCliente;
