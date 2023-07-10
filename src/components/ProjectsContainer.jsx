import "./../styles/components/projectscontainer.sass";
import { useNavigate } from "react-router-dom";

const ProjectsContainer = () => {

  const navigate = useNavigate();

  const goToProjects = () =>{
    navigate("/projects");
  }

  return (
    <section id="projects-container">
      <h2>Projetos</h2>
      <p>
        Venha ver meus projetos concluídos até agora.
      </p>

      <button 
      type="button"
      className="btn"
      onClick={goToProjects}>
        Ver Projetos
      </button>
    </section>
  );
};

export default ProjectsContainer;
