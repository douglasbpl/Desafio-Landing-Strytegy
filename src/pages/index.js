import React from 'react';
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
      }
`;

export const query = graphql`
query {
  alldata {
    projects {
      blog
      faq
      buttonenter
      lang
      subtitle
      paragraph
      divtitle
      imgtopmain {
        url
        id
      }
      logoimg {
        id
        url
      }
      buttonstart
      divParagraph
      menucenter1
      menucenter2
      menucenter3
      menucenter4
      gifparagraph
      gif {
        url
        id
      }
      titlegif
      ucpttl
      ucpP
      ucpP2
      ucpImg {
        url
        id
      }
      slide1
      imgSlide1 {
        id
        url
      }
      slide2
      slide3
      slide4
      imgSlide4 {
        id
        url
      }
      slide5
      imgSlide5 {
        id
        url
      }
      slide6
      ttlSectionFive
      paragraphSectionFive
      divParagraphTwo
    divParagraphtree
    tittleSecurity
    imgSecurity {
      id
      url
    }
    paragraphSecurity1
    paragraphSecurity2
    paragraphSecurity3
    titleUser
    opinionuser
    imgUser {
      id
      url
    }
    functionUser
    nameUser
    titleCollaborate
    pCollaborate
    pCollaborate2
    titleAbout
    prAbout
    logoFooter {
      url
      id
    }
    pLogo
    pCompany
    titleNetwork
    listItemNetwork1
    listItemNetwork2
    listItemNetwork3
    listItemNetwork4
    titleNetwork2
    listItemNetwork5
    listItemNetwork6
    listItemNetwork7
    listItemNetwork8
    }
  }
}  
`

export default function Index({ data }) {

const dataHeader = data.alldata.projects[0] 
// resumindo  o caminho data.alldata.projects[0]

  return (
    <div>
      <GlobalStyle/>
      {console.log(data)}
      <Header
        blog={dataHeader.blog}
        faq={dataHeader.faq}
        lang={dataHeader.lang}
        logo={dataHeader.logoimg.url}
        enter={dataHeader.buttonenter}
      />
      <Main 
      TTL={dataHeader.subtitle}
      PGH={dataHeader.paragraph}
      BtStart={dataHeader.buttonstart}
      ImgFiSection={dataHeader.imgtopmain.url}  
      Sbtt={dataHeader.divtitle}
      ParagraphFeat={dataHeader.divParagraph}
      ParagraphFeatt={dataHeader.divParagraphTwo}  
      ParagraphFeattt={dataHeader.divParagraphtree} 
      ListItemOne={dataHeader.menucenter1}
      ListItemTwo={dataHeader.menucenter2}
      ListItemTree={dataHeader.menucenter3}
      ListItemFour={dataHeader.menucenter4}
      TitleGif={dataHeader.titlegif}
      ParagraphGif={dataHeader.gifparagraph}
      Gif={dataHeader.gif.url}
      Ucpttl={dataHeader.ucpttl}
      UcpP={dataHeader.ucpP}
      UcpP2={dataHeader.ucpP2}
      UcpImg={dataHeader.ucpImg.url}
      TtlSection5={dataHeader.ttlSectionFive}
      ParagraphSection5={dataHeader.paragraphSectionFive}
      Slide1={dataHeader.slide1}
      ImgSlide1={dataHeader.imgSlide1.url}
      Slide2={dataHeader.slide2}
      Slide3={dataHeader.slide3}
      ImgSlide4={dataHeader.imgSlide4.url}
      Slide4={dataHeader.slide4}
      ImgSlide5={dataHeader.imgSlide5.url}
      Slide5={dataHeader.slide5}
      Slide6={dataHeader.slide6}
      TittleSecurity={dataHeader.tittleSecurity}
      ImgSecurity={dataHeader.imgSecurity.url}
      PSecurity={dataHeader.paragraphSecurity1}
      PSecurity2={dataHeader.paragraphSecurity2}
      PSecurity3={dataHeader.paragraphSecurity3}      
      />

      <Footer
      TitleUser={dataHeader.titleUser}
      Opinion={dataHeader.opinionuser}
      ImgUser={dataHeader.imgUser.url}
      NameUser={dataHeader.nameUser}
      FunctionUser={dataHeader.functionUser}
      TitleCollaborate={dataHeader.titleCollaborate}
      PCollaborate={dataHeader.pCollaborate}
      PCollaborate2={dataHeader.pCollaborate2}
      BtStart={dataHeader.buttonstart}
      TitleAbout={dataHeader.TitleAbout}
      PrAbout={dataHeader.prAbout}
      LogoFooter={dataHeader.logoFooter.url}
      PLogo={dataHeader.pLogo}
      PCompany={dataHeader.pCompany}
      TitleNetwork={dataHeader.titleNetwork}
      Instagram={dataHeader.listItemNetwork1}
      Facebook={dataHeader.listItemNetwork2}
      Linkedin={dataHeader.listItemNetwork3}
      Blog={dataHeader.listItemNetwork4}
      FAQ={dataHeader.listItemNetwork5}
      TermsOfUse={dataHeader.listItemNetwork6}
      PrivacyPolicy={dataHeader.listItemNetwork7}
      Support={dataHeader.listItemNetwork8}
      TitleNetwork2={dataHeader.titleNetwork2}
      />
      
    </div>
  )
}

