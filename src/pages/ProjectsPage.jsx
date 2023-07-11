import ArrowBack from "../components/ArrowBack";
import "../styles/components/projectspage.sass";

import CV_resized from "./../img/Projetos/CV_resized.png";
import MoviesLib_resized from "./../img/Projetos/MoviesLib_resized.png";
import primeiroProjeto_resized from "./../img/Projetos/primeiroProjeto_resized.png";
import tasklist_resized from "./../img/Projetos/tasklist_resized.png";

const pageIndex = [
    {name: "pageIndex", link: "https://yuri-tokio.github.io/Page-Index/"}
]

const ProjectsPage = () => {
    return(
        <section id="projects-page">
            <ArrowBack />
            <h1 className="title">Projetos</h1>
            <div className="projects-grid">
                <div className="projects-card">
                    <img src={primeiroProjeto_resized} alt="Primeiro Projeto"></img>
                    <div className="projects-info">
                        <h2>Primeiro Projeto</h2>
                        <p>Projeto Portfolio básico com Html, Css, JavaScript e algumas requisições via API</p>
                        <p><span>Tecnologias utilizadas:</span> Html, Css, JavaScript</p>
                        {pageIndex.map((portfolio) =>
                        <a href={portfolio.link}
                        target="_blank" id={portfolio.name} key={portfolio.name}
                        >Saber mais</a>)}
                    </div>
                </div>
                <div className="projects-card card-reverse">
                    <img src={MoviesLib_resized} alt="Movies Library"></img>
                    <div className="projects-info">
                        <h2>Biblioteca de filmes</h2>
                        <p>Uma biblioteca dos mais diversos filmes e animações desenvolvido para pesquisas e analises de dados com funcionalidades puramente observatórias e que abordam conceitos como Gerenciamento de API do TMDB, responsividade e desenvolvimento com diversos recursos do React</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API (TMDB)</p>
                        <a href="https://github.com/Yuri-Tokio/movies_lib" target="_blank">Saber mais</a>
                    </div>
                </div>
                <div className="projects-card">
                    <img src={tasklist_resized} alt="tasklist"></img>
                    <div className="projects-info">
                        <h2>Lista de tarefas</h2>
                        <p>Lista de tarefas responsiva que aborda tecnologias do React Js e do Node.Js. Este projeto conta com uma api rodando em um servidor local para criação, alteração e exclusão dos dados informados</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, API e Banco Locais</p>
                        <a href="https://github.com/Yuri-Tokio/react-tasklist" target="_blank">Saber mais</a>
                    </div>
                </div>
                <div className="projects-card card-reverse m-1">
                    <img src={CV_resized} alt="Template Curriculum vitae"></img>
                    <div className="projects-info">
                        <h2>Template Curriculum vitae</h2>
                        <p>Template responsivo criado por mim de um projeto pessoal desenvolvido com tecnologias como React e SASS, além de conter meu curriculo em pdf</p>
                        <p><span>Tecnologias utilizadas:</span> React, Vite, SASS</p>
                        <a href="https://yuri-tokio.github.io/CV/" target="_blank">Saber mais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;