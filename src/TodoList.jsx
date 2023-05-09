import React from "react";
import './TodoList.css';

function TodoList(){
    return (
    <div>
        <h1>Lista de Tarefas</h1>
        <form action="">
            <input type="text" placeholder="Adicione uma tarefa" />
            <button type="submit" className="add">Add</button>
        </form>
        <div className="listaTarefas">
            <div className="item">
                <span>Tarefa exemplo</span>
                <button className="del">Deletar</button>
            </div>
            <div className="item completo">
                <span>Tarefa exemplo</span>
                <button className="del">Deletar</button>
            </div>
            <button className="deleteAll">Deletar Todas</button>
        </div>
    </div>   
    )
}

export default TodoList