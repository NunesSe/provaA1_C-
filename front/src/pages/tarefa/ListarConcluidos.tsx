import { useEffect, useState } from "react";
import { Tarefa } from "../../models/Tarefa";

function ListarConcluido() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefas();
    }, [])


    function carregarTarefas() {
        fetch("http://localhost:5000/tarefas/concluidas")
            .then((resposta) => resposta.json())
            .then((t: Tarefa[]) => {
                setTarefas(t)
            })
    }
    
    return (
        <div>
            <h1>Listar tarefas Concluidas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Descricao</th>
                        <th>Criado em</th>
                        <th>Categoria Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.tarefaId}>
                            <td>{tarefa.tarefaId}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.criadoEm}</td>
                            <td>{tarefa.categoriaId}</td>
                            <td>{tarefa.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarConcluido