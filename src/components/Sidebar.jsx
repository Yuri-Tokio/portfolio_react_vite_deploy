import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Perfil from "../img/eu_perfil_jun_2023.jpg";
import CV from "../pdf/CV_Yuri_Tokio.pdf"

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
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
