import React, { useEffect } from "react";
import FooterNAvIcons from "./FooterNAvIcons";
import { Link } from "react-router-dom";
import useLangData from "../../utils/useLangData";
import FooterDataLoader from "./FooterDataLoader";
import FooterFollowUs from "./FooterFollowUs";
import FooterTypedText from "./FooterTypedText";

const Footer = ({ handleClick, value }) => {
    const footerData = useLangData("dataFooter.json");

    return (
        <FooterDataLoader>
            {(dataFooter) => (
                <footer className="main-content section" id="footer">
                    <div className="container">
                        <div className="row-center">
                            <div className="service_container center-footer">
                                <div className="service-item ">
                                    <h3 className="h3-item">
                                        {dataFooter.services.title}
                                    </h3>
                                    <ul>
                                        {dataFooter.services.items.map(
                                            (item, index) => (
                                                <li key={index}>
                                                    <a href="#">{item}</a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="service-item">
                                    <h3 className="h3-item">
                                        {dataFooter.siteMap.title}
                                    </h3>
                                    <ul>
                                        {dataFooter.siteMap.links.map(
                                            (link, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={`/${link.to}`}
                                                        onClick={handleClick}
                                                    >
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="service-item">
                                    <h3 className="h3-item">
                                        {dataFooter.about.title}
                                    </h3>
                                    <ul>
                                        {dataFooter.about.items.map(
                                            (item, index) => (
                                                <li key={index}>
                                                    <a href="#">{item}</a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <FooterFollowUs followUs={dataFooter.followUs} />
                            <div className="credit-blk">
                                <h3 className="f-h3-In">Crédits :</h3>
                                <FooterTypedText
                                    strings={
                                        footerData ? footerData.credits : []
                                    }
                                />
                            </div>
                        </div>
                        <p className="copyright center-footer footer-text">
                            {dataFooter.copyright.replace(
                                "{{year}}",
                                new Date().getFullYear()
                            )}
                        </p>
                    </div>
                </footer>
            )}
        </FooterDataLoader>
    );
};

export default Footer;
