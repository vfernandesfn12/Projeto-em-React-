// importando components do bootstrap
import Container from "react-bootstrap/Container";

// Importando o componente de formulário
import FormularioFuncionario from "../../components/FormularioFuncionario/FormulárioFuncionario"

const EditarFuncionario = () => {

  return (
    <div style={{ height: "93vh" }}>
      <Container>
        <h1>Editar Perfil</h1>
        <FormularioFuncionario page="editar" />
      </Container>
    </div>
  );
};

export default EditarFuncionario;
