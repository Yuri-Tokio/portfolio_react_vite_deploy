import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import CertificadosContainer from "./CertificadosContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <CertificadosContainer />
    </main>
  );
};

export default MainContent;
