import ArrowBack from "../components/ArrowBack";
import "../styles/components/pages/projectspage.sass";

import Base from "./../img/Projetos/base.png";
import MoviesLib_resized from "./../img/Projetos/MoviesLib_resized.png";
import primeiroProjeto_resized from "./../img/Projetos/primeiroProjeto_resized.png";
import tasklist_resized from "./../img/Projetos/tasklist_resized.png";

const ProjectsPage = () => {
    return (
        <section id="projects-page">
            <ArrowBack />
            <h1 className="title">Projetos</h1>
            <div className="projects-grid">

                <div className="projects-card">
                    <div className="projects-info">
                        <img src={MoviesLib_resized} alt="Movies Library"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Biblioteca de filmes</h2>
                        <p>Desenvolvi uma aplicação em React usando Vite e a API do TMDB, que permite explorar filmes e animações com informações detalhadas sobre cada título. Utilizei React Router para navegação e React Hooks para gerenciamento de estado, criando uma experiência de usuário fluida</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API (TMDB)</p>
                        <div className="linksProjetos">
                            <a href="https://github.com/Yuri-Tokio/movies_lib" target="_blank">Ver Repositório</a>
                            <a href="https://yuri-tokio.github.io/movies_lib/" target="_blank">Ver Projeto</a>
                        </div>
                    </div>
                </div>

                <div className="projects-card card-reverse">
                    <div className="projects-info">
                        <img src={tasklist_resized} alt="tasklist"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Lista de tarefas</h2>
                        <p>Lista de tarefas com abordagem em Node.Js e React. O projeto conta com uma api rodando em um servidor local para criação, alteração e exclusão das tarefas informadas</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API e Banco Local</p>
                        <a href="https://github.com/Yuri-Tokio/react-tasklist" target="_blank">Ver Repositório</a>
                    </div>
                </div>

            </div>

            <h1 className="title">Projetos que estão por vir...</h1>

            <div className="projects-grid">

                <div className="projects-card">
                    <div className="projects-info">
                        <img src={Base} alt="Movies Library"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Area de login autenticado com JWT </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempora, exercitationem vitae nesciunt iure corporis ipsum ipsam animi quam accusamus perspiciatis neque quisquam iste veniam voluptatibus cum totam id quia atque facilis ut obcaecati error. Aperiam numquam perferendis quasi porro veritatis, cumque, aliquam maiores magnam rerum est harum nam itaque.</p>
                        <p><span>Tecnologias utilizadas:</span></p>
                        <div className="linksProjetos">
                            <a href="https://github.com/Yuri-Tokio/movies_lib" target="_blank">Ver Repositório</a>
                            <a href="https://yuri-tokio.github.io/movies_lib/" target="_blank">Ver Projeto</a>
                        </div>
                    </div>
                </div>

                <div className="projects-card  card-reverse">
                    <div className="projects-info">
                        <img src={Base} alt="tasklist"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Jogo da velha com WebSockets</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit labore molestiae blanditiis quam laborum ut ducimus! Magnam deserunt est id explicabo pariatur exercitationem laborum ad porro nemo? Unde illo hic aliquam molestiae ea quia ab, cupiditate praesentium sunt deserunt minus asperiores facere neque alias, necessitatibus error vitae et eius?</p>
                        <p><span>Tecnologias utilizadas:</span></p>
                        <div className="linksProjetos">
                            <a href="#">Ver Repositório</a>
                            <a href="#">Ver Projeto</a>
                        </div>
                    </div>
                </div>

                <div className="projects-card">
                    <div className="projects-info">
                        <img src={Base} alt="Movies Library"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Catalogo de Produtos otimizado com cloudflare</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempora, exercitationem vitae nesciunt iure corporis ipsum ipsam animi quam accusamus perspiciatis neque quisquam iste veniam voluptatibus cum totam id quia atque facilis ut obcaecati error. Aperiam numquam perferendis quasi porro veritatis, cumque, aliquam maiores magnam rerum est harum nam itaque.</p>
                        <p><span>Tecnologias utilizadas:</span></p>
                        <div className="linksProjetos">
                            <a href="#">Ver Repositório</a>
                            <a href="#">Ver Projeto</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectsPage;