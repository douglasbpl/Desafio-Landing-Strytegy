import styled from 'styled-components'

export const ContainerHeader = styled.div`
    width: 100%;
    height: 5rem;    
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    
`
export const ContainerMenu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;    
`
export const ImgLogo = styled.img`
width: 8.875rem;
margin: 0px;
`

export const Menu = styled.nav`
 display: flex;
 align-items: center;
 justify-content: space-around;
 width:24vw;
 `

export const BtInf = styled.button`
background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: .5rem;
   

       &:nth-child(1) {
        font: 400 1.3125rem Paralucent, sans-serif;
        color: rgb(37, 41, 76);    
    }
            &:nth-child(1):hover {
                border-bottom: 3px solid;    
            }
    
    
        &:nth-child(2) {
            font: 400 1.3125rem Paralucent, sans-serif;
            color: rgb(37, 41, 76);
        }
            &:nth-child(2):hover {
                border-bottom: 3px solid;            
                
            }
    
        &:nth-child(3) {
            background-color: rgb(255, 235, 151);
            width: 130px;
            height: 40px;
            border-radius:5%;
            
        }

        &:nth-child(3):hover {
            background-color: #ffce06;
            transition: background-color 1s 0s;    
            }
        

        &:nth-child(4) {
            width: 30px;
            height: 30px;
            border: solid 1px #000;
            border-radius: 50%;
            font-size: 10px;
        }
    
`
 
 