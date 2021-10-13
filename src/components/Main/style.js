import styled from 'styled-components'

export const ContainerMain = styled.div`
width:100%;
background-color: white;
display:flex;
justify-content: center;
align-itens: center;
flex-direction: column;
`

export const FirstSectionM = styled.section`
display:flex;
justify-content: center;
align-itens: center;
width: 100%;
padding-top: 8rem;

`
export const BoxIdeas = styled.div`
display:flex;
justify-content: center;
align-itens: center;
background-color:#ffffff;
`
export const BoxTxtIdeas = styled.div`
display:flex;
justify-content: center;
align-itens: center;
flex-direction: column;
width: 38%;
`
export const TtlIdeas = styled.h1`
width: 100%;
color: #22254b;
font-family: paralucent, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 50px;`

export const PrghIdeas = styled.p`
display: inline-block;
width: 90%;
margin-top: 0.25rem;
font-family: soleto, sans-serif;
font-style: normal;
font-weight: 300;
font-size:20px;
color: #898b9f;
letter-spacing: 0.33px;
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

export const BoxImgIdeas = styled.div`
display:flex;
justify-content: center;
align-itens: center;
flex-direction: column;
width: 51%`

export const ImgIdeas = styled.img`
width: 100%;
height:100%;
`
export const SecondSection = styled.section`
display:flex;
justify-content: center;
align-itens: center;
width: 100%;
background-image: linear-gradient(rgb(255, 255, 255) 10%, rgb(255, 250, 228) 100%);
`

export const Features = styled.div`
display:flex;
justify-content: center;
align-itens: center;
flex-direction: column;
text-align: center;
height: 40vh;
`

export const SbttFeat = styled.h2`
margin-bottom: 0.5rem;
color: rgb(34, 37, 75);
text-align: center;
font: 500 3.4375rem Paralucent, sans-serif;
animation: 2s ease 0s 1 normal none running lbWRkT;
opacity: 1`


export const ParagraphFeat = styled.p`
    max-width: 90vh;
    font: 300 1.200rem / 1.875rem Soleto, sans-serif;
    color: rgb(34, 37, 75);
    letter-spacing: 0.33px;
    margin-top: 0.1rem;
    
`
export const ThirdSection = styled.section`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:75vh;
background-color: rgb(34, 37, 75);
`
export const MenuBoxTS = styled.div`
width: 100%;
display: flex;
align-items: center;`

export const Item = styled.ul`
    list-style: none;  
    align-itens: center;
    position: relative;
    left: 50%;
    bottom:50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 90%;
    height: 6.3125rem;
    margin: 0px;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    transform: translate(-50%, -50%);
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 20px;

`
export const ListItem = styled.li`
display:flex;
justify-content: center;
align-itens: center;
height: 100%;
width:25%;
border-right-center:1px solid black;
&:hover {
    background-color: rgb(255, 206, 6);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s ease 0s;
}`

export const Divide = styled.div`
width: 0.2%;
height: 40%;
background-color: rgb(34, 37, 75);
position: relative;
`

export const ButtonMC = styled.p`
display: flex;
justify-content: center;
align-items: center;
padding: 0px 1.5rem;
border-radius: 0.3125rem;
color: rgb(34, 37, 75);
font: 400 1.3125rem Paralucent, sans-serif;
text-align: center;
cursor: pointer;
}`

export const ContainerGifTxt = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 58%;
height: 50vh;
`
export const BoxTxtGif = styled.div`
width: 50%;

`
export const BoxGif = styled.div`
display: flex;
justify-content: space-around;
align-itens: center;
width: 47%;
height: 89%;
`
export const ImgGif = styled.img`
width: 100%;
height: 100%;
border-radius: 0.25rem;
`

export const SbtMenuC = styled.h3`
margin: 0px 0px 2rem;
color: rgb(255,255,255);
font: 600 2.5rem Paralucent, sans-serif;
`

export const ParagraphMenuC = styled.p`
color: rgb(255, 255, 255);
font: 400 1.0625rem / 1.375rem Soleto, sans-serif;`

export const FourthSection = styled.section`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:60vh;
background-color: white;
`
export const ContainerTxtUcpImg = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
height: 50vh;
`

export const BoxTxtUcpImg = styled.div`
display:flex;
width: 50%;
flex-direction: column;
`

export const UcpTtl = styled.h3`
margin: 0px 0px 0rem;
width: 71%;
color: #22254b;
font: 600 2.5rem Paralucent, sans-serif;
`

export const ParagraphUcpP = styled.p`
color: #898b9f;
font: 400 1.0625rem / 1.375rem Soleto, sans-serif;
height: 8px;
width: 70%;
`

export const BoxUcpImg = styled.div`
display: flex;
justify-content: space-around;
align-itens: center;
width: 47%;
height: 89%;
`
export const UcpImg = styled.img`
width: 75%;
height: 100%;
border-radius: 0.25rem;
`
export const FifthSection = styled.section`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:40vh;
background: rgb(34, 37, 75);
`

export const BoxTxtFft = styled.div`
display:flex;
justify-content:center;
align-itens: center;
flex-direction:column;
;`

export const TtlSF = styled.h4`
margin: 0px 0px 1.125rem;
color: rgb(255, 255, 255);
font: 500 3.4375rem Paralucent, sans-serif;
text-align: center;
`

export const ParagraphSF = styled.p`
margin: 0px 0px 2.375rem;
color: rgb(255, 255, 255);
font: 300 1.375rem / 1.875rem Soleto, sans-serif;
letter-spacing: 0.33px;
text-align: center;

`

export const SixthSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: row;
position: relative;
    bottom: 97px;
    
`
export const ContainerBoxCards = styled.div`
width: 450px;
height: 600px;
margin: 5px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`
export const BoxCards = styled.div`
width: 303px;
margin: 2px;
border: 2px solid rgb(34, 37, 75);
border-radius: 0.625rem;
padding: 2rem;
    
`

export const PboxCards = styled.p`
text-align: center;
    font: 400 0.9375rem / 1.35rem Soleto, sans-serif;
    color: rgb(34, 37, 75);
    opacity: 1
    
`

export const BoxImgCards = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 44%;
    padding: 2rem;
    border: 2px solid rgb(34, 37, 75);
    border-radius: 0.625rem;
    box-shadow: rgb(0 0 0 / 8%) 0px 5px 10px;
    background-color: rgb(255, 255, 255);
;`

export const ImgCards = styled.img`
width: 50%;
`

export const BoxCardTxt = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 20%;
    padding: 2rem;
    border: 2px solid rgb(34, 37, 75);
    border-radius: 0.625rem;
    box-shadow: rgb(0 0 0 / 8%) 0px 5px 10px;
    background-color: rgb(255, 255, 255);
    
`

export const SeventhSection = styled.section`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
background: rgb(34, 37, 75);
background-color:white`

export const Title = styled.h2`
    margin-bottom: 1rem;
    color: rgb(34, 37, 75);
    font: 500 3.4375rem Paralucent, sans-serif;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
      align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0px auto;
    padding: 0px 0px 7rem;
    max-width: 1440px;
`;


export const Image = styled.img`
width: 50%;
margin: 3rem 0px;
`;

export const ListP = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
height: 54vh;
justify-content: center;

`
export const ItemListP = styled.p`
font: 300 1.375rem / 1.875rem Soleto, sans-serif;
color: rgb(34, 37, 75);
text-align: center;
width:50vw;
`