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

import { BsFillHouseFill } from "react-icons/bs";

import { BsClipboardData } from "react-icons/bs";

import { BsFillGiftFill } from "react-icons/bs";

import { BsFillPeopleFill } from "react-icons/bs";

import { BsFillPersonVcardFill } from "react-icons/bs";

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
          <BsFillHouseFill className="fs-4" />
          
          <span className="fs-5 ms-2">Home</span>
        </Nav.Link>
        {/* Opção de Relatórios */}
        <Nav.Link as={NavLink} to="/relatorios" className="text-white px-2">
          <BsClipboardData className="fs-4" />
          <span className="fs-5 ms-2">Relatórios</span>
        </Nav.Link>

        {/* Criando o arcordeon */}
        <Accordion flush className="flex-column mb-auto" alwaysOpen>
          {/* Páginas produtos */}
          <AccordionItem eventKey="0" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsFillGiftFill  className="fs-4" />
              <span className="ms-2">Produtos</span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </AccordionItem>
          {/* Fim da página produtos */}

          {/* Páginas Clientes */}
          <AccordionItem eventKey="1" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsFillPeopleFill  className="fs-4" />
              <span className="ms-2">Clientes</span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </AccordionItem>
          {/* Fim clientes */}
          {/* Páginas Funcionários */}
          <AccordionItem eventKey="2" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsFillPersonVcardFill  className="fs-4" />
              <span className="ms-2">Funcionários</span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </AccordionItem>
          {/* Fim Funcionários */}
          {/* Páginas Pedidos */}
          <AccordionItem eventKey="2" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsFillPersonVcardFill  className="fs-4" />
              <span className="ms-2">Pedidos</span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsBoxes className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </AccordionItem>
          {/* Fim Pedidos */}
        </Accordion>
      </Nav>

      <hr className="border-secondary" />
      {/* Visualizar foto e nome do perfil, e opções */}
      <Nav className="dropdown pb-4">
        <NavDropdown
          title={
            <span className="text-white align-items-center">
              <Image src={imagemAtual == "null" ? semImagem : imagemAtual}
              width={66}
              height={66}
              roundedCircle
              className="me-2"
              />
              {usuarioNome}
            </span>
          }
          menuVariant="dark"
        >
          {/* Opção de editar o perfil */}
          <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>Editar</NavDropdown.Item>

          {/* Voltar pra tela de login */}
          <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>Sair</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;
