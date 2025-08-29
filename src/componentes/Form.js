// componente para criar formulario para inserir uma nova tarefa 
//funçao para adicionar tarefa (arrow function)
import "./Form.css"; //importa a estilização

import { useState } from "react"

const Form = ({addTarefa}) => {
    

    // vetor para armazenar o valor do input no ---> useState
    const [tarefa, setTarefa] = useState("");
    //useState ===> usa a memoria local do navegador para armazenar as mudanças de estado 
    //primeiro elemento do [] armazena as tarfas,
    // segundo elemento armazena as mudanças de estado


    // funçaõ para atualizar o estado do valor do input
    //função vai criar uma nova tarefa ao ser clicado o botão de enviar o formulario
    const handleSubmit = (e) => { //arrowFunction
        //impedir o funcionamento padrao do botão de submit
        e.preventDefault(); // nao permite o recarregamento da pagina
        // verificar se o campo nao esta vazio 
        if(tarefa.trim() !== ""){
            //adicionar a tarefa ao vetor de tarefas
            addTarefa(tarefa);
            //limpo o campo do input
            setTarefa("");
        }
     };
     //logica por tras do design 
     //view
     return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Inserir Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                />
                <button className="btnEnviar" type="submit">
                    Adicionar
                </button>
        </form>
     );

}
export default Form;
//componente cria o formulario das tarefas
//pode ser reutiliados em outros componentes da aplicação (export)
