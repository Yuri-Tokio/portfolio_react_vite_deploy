import "./../styles/components/certificadoscontainer.sass";
import { useNavigate } from "react-router-dom";

const CertificadosContainer = () => {

  const navigate = useNavigate();

  const goToCertificados = () =>{
    navigate("/certificados");
  }

  const goToProjects = () =>{
    navigate("/projects");
  }

  return (
    <section id="certificados-container">
      <h2>Certificados & Projetos</h2>
      <p>
        Venha conhecer todos os meus certificados e projetos concluídos atualmente
      </p>

      <div className="certificados-projetos">
        <button 
          type="button"
          className="btn"
          onClick={goToCertificados}>
          Ver Certificados
        </button>

        <button 
          type="button"
          className="btn"
          onClick={goToProjects}>
          Ver Projetos
        </button>
      </div>
    </section>
  );
};

export default CertificadosContainer;
