//Importação componentes Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form";

//Importando o hook do produto
import { useListaCategorias, useListaMedidas, useInserirProduto } from "../../hooks/useProdutos";

const FormularioProduto = (props) => {

  // Importação das funções vindas do hook useprodutos
  //Usando a função de inserir produto

  const { inserirProduto } = useInserirProduto()




  // register = cria um objeto com os valores retirados dos inputs
  // handleSumbit = envia os dados formulário, caso dê erro ou sucesso
  // formState { errors } = objeto que guarda uma listaF de erros que aconteceram na tentativa do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  //Lista de categorias
  const cates = useListaCategorias()

  // Lista de medidas
  const medis = useListaMedidas()

    // Variavel de produto sem imagem
  const linkImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA13yHQQqIo0itjIvx5np_T1BJcqtKSwErqQ&s"

  //Variável para armazenar o link da imagem, vindo do input
  const imagemAtual = watch("imagemUrl")

  //Funções que lidam com o sucesso ou erro do formulário
  //Função pra caso dê certo na validação do formulário
  // data é o objeto com as informações dos campos do formulário

  const onSubmit= (data) => {
    console.log("Dados:", data)
    if(props.page === "cadastro"){
      //Envia o objeto data para o hook inserir produto
      inserirProduto(data)
      alert("Produto cadastrado com sucesso")
    }else{
      //Depois nóis vê
    }
  }

  //Caso tenha algum erro no formulário, mostra as mensagens de erro nos campos
  const onError = (errors) => {
    console.log("Erros:", errors);
  }

  return (
    <div className="text-center">
      <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Col md={12} lg={6}>
            {/* Caixinha de SKU */}
            <FloatingLabel controlId="FI-SKU" label="SKU" className="mb-5">
              <Form.Control 
              type="text"
              {...register("sku", {
                required: "O SKU é obrigatório",
                minLength: {
                    value: 2,
                    message:"O SKU deve ter pelo menos dois caracteres"
                },
                maxLength: {
                    value: 10,
                    message:"O SKU deve ter no máximo 10 caracteres"
                }
              })}
              >
              </Form.Control>
               { errors.sku && <p className="error"> {errors.sku.message} </p> }
            </FloatingLabel>
            {/* Fim de caixinha de SKU */}


            {/* Caixinha de Nome */}
            <FloatingLabel controlId="FI-NOME" label="Nome" className="mb-5">
              <Form.Control 
              type="text"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: {
                    value: 2,
                    message:"O nome deve ter pelo menos dois caracteres"
                },
                maxLength: {
                    value: 30,
                    message:"O nome deve ter no máximo 10 caracteres"
                }
              })}
              >
              </Form.Control>
               { errors.nome && <p className="error"> {errors.nome.message} </p> }
            </FloatingLabel>
            {/* Fim de caixinha de Nome */}

            {/* Caixinha de Descrição */}
            <FloatingLabel controlId="FI-DESCRIÇAO" label="Descrição" className="mb-5">
              <Form.Control 
              type="text"
              {...register("descricao", {
                required: "A descrição é obrigatória",
                minLength: {
                    value: 2,
                    message:"A descrição deve ter pelo menos dois caracteres"
                },
                maxLength: {
                    value: 100,
                    message:"A descrição deve ter no máximo 10 caracteres"
                }
              })}
              >
              </Form.Control>
               { errors.descricao && <p className="error"> {errors.descricao.message} </p> }
            </FloatingLabel>
            {/* Fim de caixinha de Descrição */}
            {/* Caixinha de categoria */}
            <FloatingLabel controlId="FI-CATEGORIAS" label="Categoria" className="mb-5">
              <Form.Select {...register("categoria", {
                validate: (value) => value !== "0" || "Escolha uma categoria"
              })}
              >
                <option value="0">Escolha uma categoria</option>
                {cates.map((cat)=> (
                  <option key={cat.id} value={cat.nome}>{cat.nome}</option>
                ))}
              </Form.Select>
              {errors.categoria && <p className="error"> {errors.categoria.message} </p>}
            </FloatingLabel>
            {/* Fim de caixinha de categoria */}

            {/* Caixinha de marca */}
            <FloatingLabel controlId="FI-MARCA" label="Marca" className="mb-5">
              <Form.Control
                type="text"
                {...register("marca", {
                  required: "A marca é obrigatória",
                  minLength: {
                    value: 2,
                    message: "A marca deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "A marca deve ter no máximo 30 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.marca && <p className="error"> {errors.marca.message} </p>}
            </FloatingLabel>
            {/* Fim de caixinha de marca */}

            {/* Caixinha de fornecedor */}
            <FloatingLabel controlId="FI-FORNECEDOR" label="Fornecedor" className="mb-5">
              <Form.Control
                type="text"
                {...register("fornecedor", {
                  required: "O Fornecedor é obrigatório",
                  minLength: {
                    value: 2,
                    message: "O Fornecedor deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "O Fornecedor deve ter no máximo 30 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.fornecedor && <p className="error"> {errors.fornecedor.message} </p>}
            </FloatingLabel>
            {/* Fim de caixinha de fornecedor */}
          </Col>
          <Col md={12} lg={6}>
          {/* Caixinha de quantidade */}
           <FloatingLabel controlId="FI-QUANTIDADE" label="Quantidade" className="mb-5">
              <Form.Control
                type="number"
                {...register("quantidade", {
                  required: "A quantidade é obrigatória",
                  min: {
                    value: 1,
                    message: "A quantidade deve ser maior que 0",
                  },
                })}
              ></Form.Control>
              {errors.fornecedor && <p className="error"> {errors.fornecedor.message} </p>}
            </FloatingLabel>
            {/* Fim da caixinha de quantidade */}


            <Row>
              <Col>
              {/* Caixinha de tamanho */}
           <FloatingLabel controlId="FI-TAMANHO" label="Tamanho" className="mb-5">
              <Form.Control
                type="number"
                {...register("tamanho", {
                  required: "O tamanho é obrigatório",
                  min: {
                    value: 1,
                    message: "A tamanho deve ser maior que 0",
                  },
                })}
              ></Form.Control>
              {errors.tamanho && <p className="error"> {errors.tamanho.message} 
                </p>}
            </FloatingLabel>
            {/* Fim da caixinha de tamanho */}
            </Col>
              <Col>
               {/* Caixinha de medidas */}
                <FloatingLabel
                  controlId="FI-MEDIDAS"
                  label="Medida"
                  className="mb-5"
                >
                  <Form.Select
                    {...register("medida", {
                      validate: (value) =>
                        value !== "0" || "Escolha uma medida",
                    })}
                  >
                    <option value="0"> Escolha uma medida </option>
                    {medis.map((med) => (
                      <option key={med.id} value={med.nome}>
                        {" "}
                        {med.nome}{" "}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.medida && (
                    <p className="error"> {errors.medida.message} </p>
                  )}
                </FloatingLabel>
                {/* Fim de caixinha de medidas */}
              </Col>
            </Row>
            <Row>
              <Col>
              {" "}
                {/* Primeira coluna */}
                {/* Caixinha de preco de custo */}
                <FloatingLabel
                  controlId="FI-PC"
                  label="Preço de custo"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("precoCusto", {
                      required: "O preço de custo é obrigatório",
                      min: {
                        value: 0.01,
                        message: "O preço de custo deve ser maior que 0",
                      },
                    })}
                  ></Form.Control>
                  {errors.precoCusto && (
                    <p className="error"> {errors.precoCusto.message} </p>
                  )}
                </FloatingLabel>
                {/* Fim de caixinha de preco de custo */}
              </Col>
              <Col>
              {/* Segunda coluna */}
                {/* Caixinha de preco de venda */}
                <FloatingLabel controlId="FI-PV" label="Preço de venda" className="mb-5">
                  <Form.Control
                    type="number"
                    {...register("precoVenda", {
                      required: "O preço de venda é obrigatório",
                      min: {
                        value: 0.01,
                        message: "O preço de venda deve ser maior que 0",
                      },
                    })}
                  ></Form.Control>
                  {errors.precoVenda && (<p className="error"> {errors.precoVenda.message} </p>)}
                </FloatingLabel>
                {/* Fim de caixinha de preco de venda */}
              </Col>
            </Row>
            {/* Caixinha de imagem */}
              <Form.Group controlId="FI-IMAGEM" className="mb-5">
                    <FloatingLabel controlId="FI-IMAGEM-LINK" label="Link da imagem" className="mb-5">
                      <Form.Control
                        type="url"
                        { ...register("imagemUrl", {
                          required: "O link é obrigatório",
                          pattern: {
                            value: /^(http|https):\/\/[^ "]+$/,
                            message: "Insira um link válido"
                          }
                        })}>
                      </Form.Control>
                      {errors.imagemUrl && (<p className="error"> {errors.imagemUrl.message}</p>)}
                    </FloatingLabel>
                    <Image 
                    width={200} 
                    height={200} 
                    rounded 
                    src={imagemAtual == "" ? linkImagem : imagemAtual}
                    />
              </Form.Group>
            {/* Fim de caixinha de imagem */}
            </Col>
        </Row>
        {/* Botão para envio do formulário */}
        <Button variant="primary" size="lg" type="submit">
            {props.page === "editar" ? "Atualizar" : "Cadastrar"}
        </Button>
      </Form>
    </div>
  );
};

export default FormularioProduto;
