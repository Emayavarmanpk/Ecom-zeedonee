import React, { Fragment, useEffect } from "react";
import HeaderOne from  "../../components/headers/header-one.js";
import HomeSlider from "../layouts/Basics/Fullpage/HomeSlider.js";
import Collections from "../../pages/layouts/Marketplace/components/Collections.js";
import Paragraph from "../../components/common/Paragraph.js";
import ProductSection from "../../components/common/Collections/Collection10";
// import { withApollo } from "../../../helpers/apollo/apollo";
import ProductSlider from "../../components/common/Collections/TabCollection7.js";
import ServiceLayout from "../../components/common/Service/service1";
import Instagram from "../../components/common/instagram/instagram1";
import ModalComponent from "../../components/common/Modal";
import Helmet from "react-helmet";
// import MasterParallaxBanner from "../";
import MasterFooter from "../../components/footers/common/MasterFooter";

const index = () => {
    useEffect(() => {
        document.documentElement.style.setProperty("--theme-deafult", "#3e5067");
      });
      return (
        <Fragment>
     <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              {/* <Head>
              <link rel="icon" type="image/x-icon" href={favicon} />
            </Head> */}
              <title>Zeedone -Shop </title>
            </Helmet>
          {/* <ModalComponent /> */}
          <HeaderOne logoName={"logo.png"} headerClass="marketplace" topClass="top-header" />
          {/* <HomeSlider /> */}
          <Collections />
          {/* <Paragraph title="title1 section-t-space" inner="title-inner1" line={false} /> */}
          <ProductSection type="marketplace" />
          {/* <MasterParallaxBanner bg="parallax-banner28" parallaxClass="text-center p-right" title="sale" subTitle1="fashion trends" subTitle2="special offer" /> */}
          <ProductSlider type="marketplace" />
          <ServiceLayout sectionClass={"service border-section small-section"} />
          {/* <Instagram type="fashion" /> */}
          <MasterFooter footerClass={`footer-light`} footerLayOut={"light-layout upper-footer"} footerSection={"small-section border-section border-top-0"} belowSection={"section-b-space light-layout"} newLatter={true} logoName={"logo.png"} />
        </Fragment>
      );
}

export default index