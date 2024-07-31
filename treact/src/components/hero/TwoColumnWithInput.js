import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// eslint-disable-next-line
import { css } from "styled-components/macro";
import { FaWhatsapp } from "react-icons/fa";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import Header from "../headers/light.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import Logo0 from '../../images/Logo0.png';
import ProfessionalImageSrc from '../../images/safe.jpg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const imageSrc = ProfessionalImageSrc;
const imageRounded = true;
const imageBorder = false;
const imageShadow = false;

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const Action = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0 my-5 `}
  
  a {
    ${tw`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`}
    ${tw`flex items-center justify-center sm:w-auto sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
    font-size: 0.875rem; /* Reduced font size */
    padding: 1rem 1.5rem; /* Increased padding */
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;

export default ({ roundedHeaderButton }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (function($) {
        window.fnames = new Array(); 
        window.ftypes = new Array(); 
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[5] = 'BIRTHDAY';
        window.ftypes[5] = 'birthday';
      })(window.jQuery);
      window.$mcj = window.jQuery.noConflict(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Pro<span tw="text-primary-500">Kutumb</span>
            </Heading>
            <Paragraph>
              <span tw="text-primary-500 font-bold">Connect: </span> Build meaningful relationships with mentors, collaborators, and industry leaders.
            </Paragraph>
            <Paragraph>
              <span tw="text-primary-500 font-bold">Learn:</span> Access curated content, workshops, and events to fuel your professional development.
            </Paragraph>
            <Paragraph>
              <span tw="text-primary-500 font-bold">Empower: </span> Take control of your career with personalized guidance and opportunities.
            </Paragraph>
            <Actions>
              <form
                action="https://prokutumb.us14.list-manage.com/subscribe/post?u=38b944d8319b70a747cf87389&amp;id=69e2203d20&amp;f_id=00c6c2e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="Your E-mail Address"
                    required
                  />
                  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                    <input type="text" name="b_38b944d8319b70a747cf87389_69e2203d20" tabIndex="-1" value="" />
                  </div>
                  <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                    Get Started
                  </button>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
              </form>
            </Actions>
            <Action>
              <a href="https://chat.whatsapp.com/DIhEGszZh3m6UlVknIc4QP">
                <FaWhatsapp size={24} tw="mr-2" /> Join WhatsApp Community
              </a>
            </Action>
            <CustomersLogoStrip>
              <p>Supported By</p>
              <img src={Logo0} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
