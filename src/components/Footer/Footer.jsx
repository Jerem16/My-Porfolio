import React from "react";
import { Link } from "react-router-dom";
import useLangData from "../../utils/useLangData";
import FooterDataLoader from "./FooterDataLoader";
import FooterServiceItem from "./FooterServiceItem";
import FooterServiceLink from "./FooterServiceLink";
import FooterTypedText from "./FooterTypedText";
import FooterFollowUs from "./FooterFollowUs";

const Footer = ({ handleClick }) => {
    const footerData = useLangData("dataFooter.json");

    return (
        <FooterDataLoader>
            {(dataFooter) => (
                <footer className="main-content section" id="footer">
                    <div className="container">
                        <div className="row-center">
                            <div className="service_container center-footer">
                                <FooterServiceItem
                                    title={dataFooter.services.title}
                                    items={dataFooter.services.items}
                                />

                                <FooterServiceLink
                                    title={dataFooter.siteMap.title}
                                    links={dataFooter.siteMap.links}
                                    handleClick={handleClick}
                                />

                                <FooterServiceItem
                                    title={dataFooter.about.title}
                                    items={dataFooter.about.items}
                                />
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
