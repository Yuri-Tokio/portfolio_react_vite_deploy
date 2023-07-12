import ArrowBack from "../components/ArrowBack";
import "../styles/components/pages/projectspage.sass";

import CV_resized from "./../img/Projetos/CV_resized.png";
import MoviesLib_resized from "./../img/Projetos/MoviesLib_resized.png";
import primeiroProjeto_resized from "./../img/Projetos/primeiroProjeto_resized.png";
import tasklist_resized from "./../img/Projetos/tasklist_resized.png";

const pageIndex = [
    { name: "pageIndex", link: "https://yuri-tokio.github.io/Page-Index/" }
]

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
                        <h2>Primeiro Projeto</h2>
                        <p>Meu primeiro portfolio em HTML, CSS e JavaScript foi uma experiência emocionante, onde pude aplicar meus conhecimentos básicos para criar uma página web interativa e visualmente atraente</p>
                        <p><span>Tecnologias utilizadas:</span> Html, Css, JavaScript</p>
                        {pageIndex.map((portfolio) =>
                            <a href={portfolio.link}
                                target="_blank" id={portfolio.name} key={portfolio.name}
                            >Saber mais</a>)}
                    </div>
                </div>
                <div className="projects-card card-reverse">
                    <div className="projects-info">
                        <img src={CV_resized} alt="Template Curriculum vitae"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Template Curriculum vitae</h2>
                        <p>Template responsivo criado por mim de um projeto pessoal desenvolvido com tecnologias como React e SASS, além de conter meu currículo em pdf</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, SASS</p>
                        <a href="https://yuri-tokio.github.io/CV/" target="_blank">Saber mais</a>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-info">
                        <img src={tasklist_resized} alt="tasklist"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Lista de tarefas</h2>
                        <p>Lista de tarefas responsiva que aborda tecnologias do React Js e do Node.Js. Este projeto conta com uma api rodando em um servidor local para criação, alteração e exclusão dos dados informados</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API e Banco Locais</p>
                        <a href="https://github.com/Yuri-Tokio/react-tasklist" target="_blank">Saber mais</a>
                    </div>
                </div>
                <div className="projects-card card-reverse  m-1">
                    <div className="projects-info">
                        <img src={MoviesLib_resized} alt="Movies Library"></img>
                    </div>
                    <div className="projects-info">
                        <h2>Biblioteca de filmes</h2>
                        <p>Biblioteca de filmes e animações</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API (TMDB)</p>
                        <a href="https://yuri-tokio.github.io/movies_lib/" target="_blank">Saber mais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;