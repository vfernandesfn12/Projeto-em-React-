// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect, useContext } from "react";

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
