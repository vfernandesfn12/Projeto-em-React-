import styles from "./BarraNavegacao.module.css";
//Importar os componentes do bootstrap
import {
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Accordion,
  AccordionItem,
} from "react-bootstrap";
//Importando os links do router
import { NavLink } from "react-router-dom";
//Importar as informações do contexo autenticação de usuário
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";
//Importando os icones
import { BsBoxes } from "react-icons/bs";

const BarraNavegacao = () => {
  //Importar o nome de usuário logado e função logout
  const { usuarioNome, logout } = useContext(AuthContext);

  //Guarda o id do usuário atual
  const idAtual = localStorage.getItem("id");

  //Guarda a imagem do usuário atual
  const imagemAtual = localStorage.getItem("imagemPerfil");

  //Imagem padrão
  const semImagem =
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR1xpkWAYUfFHbW9cOqB6p2wxSAYZTEPjQfnxzR9MCJARrOY5jeRCrbR0S0Qz16wvUzq4P8a7vUtyz8qwc_tLqbNiM4sVI_eMPfCpEStivcwb5GaMCxUiJTjD7ci4m8TgYbb1FVjE7-_SE_";

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
      style={{ width: "250px" }}
    >
      {/* Logo da empresa */}
      <Navbar.Brand as={NavLink} to="/home">
        <BsBoxes className="fs-4" />
        <span className="fs-5 ms-2">C&G Solutions</span>
      </Navbar.Brand>
      {/* Opção de menu */}
      <Nav className="flex-column mb-auto">
        {/* Opção de home */}
        <Nav.Link as={NavLink} to="/home" className="text-white px-2">
          <BsBoxes className="fs-4" />
          <span className="fs-5 ms-2">Home</span>
        </Nav.Link>
        {/* Opção de Relatórios */}
        <Nav.Link as={NavLink} to="/relatorios" className="text-white px-2">
          <BsBoxes className="fs-4" />
          <span className="fs-5 ms-2">Relatórios</span>
        </Nav.Link>

        {/* Criando o arcordeon */}
        <Accordion flush className="flex-column mb-auto">
          {/* Páginas produtos */}
          <AccordionItem className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsBoxes className="fs-4" />
              <span className="ms-2">Produtos</span>
            </Accordion.Header>
            <Accordion.Body>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-while ps-4">
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/produtos/cadastrar"
                                           className="text-while ps-4">
                <BsBoxes className="fs-5" />
                <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </AccordionItem>
          {/* fim produtos */}
        </Accordion>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;
