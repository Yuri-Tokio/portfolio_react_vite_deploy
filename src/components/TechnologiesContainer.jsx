import "../styles/components/technologiescontainer.sass";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiPython,
} from "react-icons/di";

import {SiDotnet} from "react-icons/si"

const technologies = [
  { id: "js", name: "JavaScript", text:"Linguagem versátil para criar interatividade e funcionalidade.", icon: <DiJsBadge /> },
  { id: "dotnet", name: ".NET", text:"Framework útil para criar aplicativos e serviços web.", icon: <SiDotnet /> },
  { id: "react", name: "React", text:"Biblioteca moderna e responsiva baseada em componentes", icon: <DiReact /> },
  { id: "python", name: "Python", text:"focado em desenvolvimento web, automação e inteligência artificial.", icon: <DiPython /> },
  { id: "node", name: "Node.js", text:"Ambiente que possibilita criar back-end escalável e de alto desempenho.", icon: <DiNodejsSmall /> },
  { id: "postgresql", name: "PostgreSQL", text:"Gerenciamento de banco de dados relacional de código aberto.", icon: <DiPostgresql /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Principais Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
