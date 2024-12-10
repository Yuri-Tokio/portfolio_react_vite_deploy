import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Perfil from "../img/eu_perfil_dez_2024.jpg";
import CV from "../pdf/Yuri_Tokio_CV.pdf";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Perfil} alt="Yuri Tokio" />
      <p className="title">Desenvolvedor de Software</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={CV} target="_blank"
        className="btn cvx">
        Curriculum Vitae (PDF)
      </a>
    </aside>
  );
};

export default Sidebar;
