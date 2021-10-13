import styled from 'styled-components'

export const ContainerFooter = styled.div`
width:100%;
background-color: white;
display:flex;
justify-content: space-around;
align-itens: center;
flex-direction: column;
background-image: linear-gradient(rgba(83, 33, 196, 0.1) 10%, rgba(34, 37, 75, 0.1) 100%);
`
export const SectionUser = styled.section`
    color: white;
    font-family: Paralucent;
    font-size: 1.3vw;
    background-color: rgb(34, 37, 75);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleUser = styled.h2`
font-family: Paralucent;
font-size: 3.1vw;
font-weight: bolder;
`

export const ImgUser = styled.img`
height: 8vh;
border-radius: 50%;
`
export const BoxOpinion = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Opinion = styled.p`
width: 75%;
text-align: center;
`

export const BoxUser = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 75%;

`
export const BoxImgUser = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 7%;
`
export const BoxInfoUser = styled.div`
margin-left:2rem;
`
export const NameUser = styled.h3`
font-size: 0.8vw;
`
export const FunctionUser = styled.p`
font-size: 0.8vw;
`
export const BoxImgslide = styled.div`
height:5vh;
width:10%;
`
export const Wave = styled.div`
height: 14vh;
width: 100%
`
export const ImgWave = styled.img`
` 
export const Collaborate = styled.section`
    font-family: Paralucent;
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    text-align: center; 
`
export const BoxTxtCollaborate = styled.div`
`
export const BtStart = styled.button`
border:0;
margin-top: 2rem;
cursor: pointer;
background-color: #ffce06;
width: 180px;
height: 55px;
border-radius:5%;
color: rgb(34, 37, 75);
font: 500 1.125rem Soleto, sans-serif;
&:hover {
    transform: scale(1.1);
    transition: all 0.1s ease 0s;
  }
`

export const TitleCollaborate = styled.h2`
font-size: 5rem;
color: rgb(34, 37, 75);
height:3vh;

`
export const PCollaborate = styled.p`
width: 48%;
color: #898b9f;
`

export const Contato = styled.section`
display: flex;
    justify-content: space-between;
    width: calc(100% - 238px);
    max-width: 1440px;
    margin: 0px auto;
    padding: 3rem 0px 7rem;
    border-top: 1px solid rgba(34, 37, 75, 0.05);`

    export const About = styled.div`
    width: 40%;
    min-width: 320px;
    `
    export const TitleAbout = styled.h3`
    font: 600 1.25rem Paralucent, sans-serif;
    color: rgb(34, 37, 75);`

    export const PrAbout = styled.span`
    display: inline-block;
    margin: 0px;
    font: 400 0.875rem / 1.5625rem Soleto, sans-serif;
    color: rgb(34, 37, 75);`

    export const LogoFooterBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    `

    export const LogoFooter = styled.img`
    width: 3.3125rem;`

    export const PLogo = styled.p`
    margin: 0px 0px 0px 1rem;
    font: 300 1.0625rem Paralucent, sans-serif;
    color: rgb(34, 37, 75);`

    export const Company = styled.div`
    margin-top: 1rem;
    `

    export const PCompany = styled.p`
    margin: 0px;
    font: 300 0.75rem / 1.125rem Soleto, sans-serif;
    color: rgb(34, 37, 75);
    width:8vw;
    `

    export const BoxLinks = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 35%;
    `
    export const BoxSocialNetwork = styled.div`
    width: 50%;
    `
    export const TitleNetwork = styled.h3`
    font: 600 1.25rem Paralucent, sans-serif;
    color: rgb(34, 37, 75);`

    export const ListNetwork = styled.ul`
    width: 100%;
    margin: 0px;
    padding: 0px;
    list-style: none;`

    export const ListItemNetwork = styled.li`
    font: 400 0.875rem / 1.5625rem Soleto, sans-serif;
    color: rgb(34, 37, 75);
    cursor: pointer;
    `