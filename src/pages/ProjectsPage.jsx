import ArrowBack from "../components/ArrowBack";
import "../styles/components/pages/projectspage.sass";

import CV_resized from "./../img/Projetos/CV_resized.png";
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
                        <img src={primeiroProjeto_resized} alt="Primeiro Projeto"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Primeiro projeto</h2>
                        <p>Meu primeiro portfolio Web e Mobile em HTML, CSS e JavaScript foi uma experiência emocionante, onde pude aplicar meus conhecimentos básicos para criar uma página web interativa e atrativa</p>
                        <p><span>Tecnologias utilizadas:</span> Html, Css, JavaScript</p>
                        <div className="linksProjetos">
                            <a href="https://github.com/Yuri-Tokio/Page-Index" target="_blank">Ver Repositório</a>
                            <a href="https://yuri-tokio.github.io/Page-Index/" target="_blank">Ver Projeto</a>
                        </div>
                    </div>
                </div>
                <div className="projects-card card-reverse  m-1">
                    <div className="projects-info">
                        <img src={MoviesLib_resized} alt="Movies Library"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Biblioteca de filmes</h2>
                        <p>Biblioteca de filmes e animações com informações detalhadas sobre cada título através da API do TMDB (The Movie Database).</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API (TMDB)</p>
                        <div className="linksProjetos">
                            <a href="https://github.com/Yuri-Tokio/movies_lib" target="_blank">Ver Repositório</a>
                            <a href="https://yuri-tokio.github.io/movies_lib/" target="_blank">Ver Projeto</a>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
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
                <div className="projects-card card-reverse">
                    <div className="projects-info">
                        <img src={CV_resized} alt="Template Curriculum vitae"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Template Curriculum vitae</h2>
                        <p>Template responsivo do meu currículo baseado no tema desse portfolio e criado com as mesmas tecnologias</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, SASS</p>
                        <div className="linksProjetos">
                            <a href="https://github.com/Yuri-Tokio/CV" target="_blank">Ver Repositório</a>
                            <a href="https://yuri-tokio.github.io/CV/" target="_blank">Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;