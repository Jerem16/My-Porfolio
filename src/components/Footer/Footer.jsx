import React, { useEffect } from "react";
import FooterNAvIcons from "./FooterNAvIcons";
import Typed from "../../utils/typed";

const Footer = () => {
    useEffect(() => {
        // Options pour Typed.js
        const options = {
            strings: [
                "<strong>Un grand merci !</strong>",
                "<strong>Aux <em>Créateurs & Contributeurs</em></strong>",
                "<strong>Des <em>Bibliothèques & Framworks</em> que nous utilisons !</strong>",
                '<em>Framework :</em> <strong>"React"</strong>',
                '<em>Gestion de l\'état :</em> <strong>"Redux"</strong>',
                '<em>Animations :</em> <strong>"React-awesome-reveal"</strong>',
                "",
                "",
                '<em>Animation de particules :</em> <strong>"Tsparticles"</strong>',
                "",
                '<em>Animation de texte :</em> <strong>"Typed.js"</strong>',
                '<em>Défilement fluide :</em> <strong>"React-scroll"</strong>',
                '<em>Icônes :</em> <strong>"FontAwesome"</strong>',
                '<em>Police de caractères :</em> <strong>"Google Font"</strong>',
            ],

            typeSpeed: 50, // Vitesse de frappe
            backSpeed: 15, // Vitesse de suppression
            loop: true, // Boucler le défilement
        };

        // Initialisation de Typed.js
        const typed = new Typed(".scrolling-credits", options);

        // Nettoyage de Typed.js lors du démontage du composant
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <footer className="main-content section" id="footer">
            <div className="container">
                <div className="row-center">
                    <div className="service_container center-footer">
                        <div className="service-item ">
                            <h3 className="h3-item">Services</h3>
                            <ul>
                                <li>
                                    <a href="#">Web design</a>
                                </li>
                                <li>
                                    <a href="#">Development</a>
                                </li>
                                <li>
                                    <a href="#">Hosting</a>
                                </li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3 className="h3-item">Plan du site</h3>
                            <ul>
                                <li>
                                    <a href="#">Accueil</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3 className="h3-item">About</h3>
                            <ul>
                                <li>
                                    <a href="#">Company</a>
                                </li>
                                <li>
                                    <a href="#">Team</a>
                                </li>
                                <li>
                                    <a href="#">Legacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-item center-footer">
                        <p className="h3-item">Suivez-nous :</p>
                        <FooterNAvIcons />
                    </div>
                    <div className="credit-blk">
                        <h3 className="f-h3-In">Crédits :</h3>
                        <span className="scrolling-credits"></span>
                    </div>
                </div>

                <p className="copyright center-footer footer-text">
                    wii-design.com &copy; {new Date().getFullYear()}. Tout droit
                    réservé.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
