import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ListarTarefa from './pages/tarefa/Listar';
import CadastrarTarefa from './pages/tarefa/CadastrarTarefa';
import ListarConcluido from './pages/tarefa/ListarConcluidos';
import ListarNaoConcluido from './pages/tarefa/ListarNaoConcluidos';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                          <Link to="/tarefa/listar">Lista de Tarefas</Link>
                      </li>
                      <li>
                          <Link to="/tarefa/cadastrar">Cadastro de Tarefas</Link>
                      </li>
                      <li>
                          <Link to="/tarefa/concluidas">Listar Tarefas Concluidas</Link>
                      </li>
                      <li>
                          <Link to="/tarefa/nao/concluidas">Listar Tarefas Não Concluidas</Link>
                      </li>
                  
                  </ul>
              </nav>
              <Routes>
                  <Route path="/tarefa/listar" element={<ListarTarefa />} />
                  <Route path="/tarefa/cadastrar" element={<CadastrarTarefa />} />
                  <Route path="/tarefa/concluidas" element={<ListarConcluido />} />
                  <Route path="/tarefa/nao/concluidas" element={<ListarNaoConcluido />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
