import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/yuri-tokio-1255331a4/",icon: <FaLinkedinIn /> },
  // { name: "instagram", link: "https://www.instagram.com/yuri-tokio/", icon: <FaInstagram /> },
  { name: "github", link: "https://github.com/Yuri-Tokio?tab=repositories", icon: <FaGithub /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
