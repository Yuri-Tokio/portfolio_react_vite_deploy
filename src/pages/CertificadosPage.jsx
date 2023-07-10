import "../styles/components/certificadospage.sass";

import Web_Responsive from "../img/certificados/Responsive_Web_Development.png";
import Wordpress from "../img/certificados/Wordpress_na_pratica.png";
import Python from "../img/certificados/Python.png";
import Gestao_Infraestrutura from "../img/certificados/Gestao_de_Infraestrutura_de_TI.png";
import FormacaoSocial_Sustentabilidade from "../img/certificados/Formacao_Social_e_Sustentabilidade.png";
import Computacao_Marketing from "../img/certificados/Computacao_Cognitiva_Aplicada_ao_Marketing.png";
import Business_Analyst from "../img/certificados/Business_Analyst.jpg";
import Mastering_Bots from "../img/certificados/Mastering_Bots.jpg";
import Leadership_Communication from "../img/certificados/Leadership_Communication.png";
import ArrowBack from "../components/ArrowBack";


const CertificadosPage = () => {
    return (
        <section id="certificados-page">
            <ArrowBack />
            <h1 className="title">Certificados</h1>
            <div className="certificados-grid">
                <div className="certificados-card">
                    <img src={Web_Responsive} alt="Responsive Web Development"></img>
                    <h2>Desenvolvimento Web Responsivo</h2>
                </div>
                <div className="certificados-card">
                    <img src={Wordpress} alt="Wordpress na pratica"></img>
                    <h2>Wordpress</h2>
                </div>
                <div className="certificados-card">
                    <img src={Python} alt="Python"></img>
                    <h2>Python</h2>
                </div>
                <div className="certificados-card">
                    <img src={Gestao_Infraestrutura} alt="Gestao de Infraestrutura de TI"></img>
                    <h2>Gestão de Infraestrutura de T.I</h2>
                </div>
                <div className="certificados-card">
                    <img src={FormacaoSocial_Sustentabilidade} alt="Formacao Social e Sustentabilidade"></img>
                    <h2>Formação Social e Sustentabilidade</h2>
                </div>
                <div className="certificados-card">
                    <img src={Computacao_Marketing} alt="Computacao Cognitiva Aplicada ao Marketing"></img>
                    <h2>Computação Cognitiva aplicada ao Marketing</h2>
                </div>
                <div className="certificados-card">
                    <img src={Business_Analyst} alt="Business Analyst"></img>
                    <h2>Business Analyst</h2>
                </div>
                <div className="certificados-card">
                    <img src={Leadership_Communication} alt="Leadership Communication"></img>
                    <h2>Comunicação de Liderança</h2>
                </div>
                <div className="certificados-card">
                    <img src={Mastering_Bots} alt="Mastering Bots"></img>
                    <h2>Mastering Bots</h2>
                </div>
            </div>
        </section>
    )
}

export default CertificadosPage;