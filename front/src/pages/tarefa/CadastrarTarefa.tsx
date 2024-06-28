import { useEffect, useState } from "react"
import { Tarefa } from "../../models/Tarefa"
import { Categoria } from "../../models/Categoria";
import { Navigate } from "react-router-dom";

function CadastrarTarefa() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        carregarCategorias();
    }, []);


    function carregarCategorias() {
        //FETCH ou AXIOS
        fetch("http://localhost:5000/categoria/listar")
            .then((resposta) => resposta.json())
            .then((categorias: Categoria[]) => {
                setCategorias(categorias)
                console.log(categorias)
            });
    }

    function handleSubmit(e: any) {
        const tarefa: Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId
        };

        fetch("http://localhost:5000/tarefas/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tarefa),
          })
            .then((resposta) => resposta.json())
            .then((tarefa: Tarefa) => {

            });

        e.preventDefault();
    }

    return (
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input type="text" placeholder="Digite o titulo da tarefa" onChange={(e: any) => setTitulo(e.target.value)} required />
                <br />
                <label>Descricao</label>
                <input type="text" placeholder="Digite a descricao da tarefa" onChange={(e: any) => setDescricao(e.target.value)} required />
                <br />

                <label>Categorias:</label>
                <select onChange={(e: any) => setCategoriaId(e.target.value)}>
                    {categorias.map((categoria) => (
                        <option value={categoria.categoriaId} key={categoria.categoriaId}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastrarTarefa