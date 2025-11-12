// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect, useContext, use } from "react";

export function useListaCategorias() {
  //Váriavel para armazenar as categorias
  const [categorias, setCategorias] = useState([]);

  //Puxa os dados da API assim que o componene é iniciado
  useEffect(() => {
    async function fatchCategorias() {
      try {
        const req = await fetch(`${url}/categorias`);
        const res = await req.json();
        setCategorias(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fatchCategorias();
  }, []);
  return categorias;
}

export function useListaMedidas() {
  //Lista com medida
  const [medidas] = useState([
    { id: 1, nome: "mL" },
    { id: 2, nome: "L" },
  ]);
  return medidas;
}

//CRUD PRODUTOS

// C

export function useInserirProduto(){

    const inserirProduto = async(data) => {
        const req = await fetch(`${url}/produtos`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log("Produto inserido:", res);

        //Retornar o produto inserido
        return res
    }

    return {inserirProduto}
}

// R
export function useListaProdutos() {
  //Lista de produtos
  const [produtos, setProdutos] = useState([]);

  //UseEffect pra puxar os dados da API assim que o componente é renderizado
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/produtos`);
        const res = await req.json();
        setProdutos(res)
      }
      catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData()
  }, []);

  //Retornar a lista de produtos
  return produtos;
}

// D - Deletar
export function useDeletarProduto() {

  //Função para deletar produto
  const deletarProduto = async (idProduto) => {
    const req = await fetch(`${url}/produtos/${idProduto}`, {
      method: "DELETE"
    })
    const res = await req.json()
    return res
  }
  return {deletarProduto}
}

// U - Atualizar
// Hook para atualizar produto
export function useBuscarProdutoPorId(idProduto) {

  //Receber o id do produto e busca as informações
const buscarProdutoPorId = async () =>  {
  const req = await fetch(`${url}/produtos/${idProduto}`)
  const res = await req.json()
  console.log("Produto encontrado:", res);
  return res

  }
  return {buscarProdutoPorId} 
}

//Hook para atualizar produto
export function useAtualizarProduto() {
  //Envia os dados novos, para o produto específico
  const atualizarProduto = async (idProduto, data) => {
    const req = await fetch(`${url}/produtos/${idProduto}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(data)
    })
    const res = await req.json()
    return res
  }

  return {atualizarProduto}

}
