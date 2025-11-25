// importando components do bootstrap
import Container from "react-bootstrap/Container";


// Importando o componente de formulário
import FormularioFuncionario from "../../components/FormularioFuncionario/FormulárioFuncionario"

const CadastrarFuncionario = () => {

  return (
    <div>
      <Container>
        <h1>Cadastrar Funcionário</h1>
        <FormularioFuncionario page="cadastro" />
      </Container>
    </div>
  );
};

export default CadastrarFuncionario;
