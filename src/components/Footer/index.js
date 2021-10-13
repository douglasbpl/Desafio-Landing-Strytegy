import React from 'react'
import * as S from './style'
import Wave from "../../images/wave.svg"

export function Footer({ TitleUser,Opinion,ImgUser,NameUser,FunctionUser,BtStart,TitleCollaborate,PCollaborate,PCollaborate2,TitleAbout,PrAbout,LogoFooter,PLogo,PCompany,TitleNetwork,Instagram,Facebook,Linkedin,Blog,TitleNetwork2,FAQ,TermsOfUse,PrivacyPolicy,Support }) {

    return (
        <S.ContainerFooter>
            <S.SectionUser>
                <S.TitleUser>{TitleUser}</S.TitleUser>
                <S.BoxOpinion>
                    <S.Opinion>{Opinion}</S.Opinion>
                </S.BoxOpinion>

                <S.BoxUser>
                    <S.BoxImgUser>
                        <S.ImgUser src={ImgUser} alt="foto do usuário" />
                    </S.BoxImgUser>
                    <S.BoxInfoUser>
                        <S.NameUser>{NameUser}</S.NameUser>
                        <S.FunctionUser>{FunctionUser}</S.FunctionUser>
                    </S.BoxInfoUser>                    
                </S.BoxUser >
                <S.BoxImgslide>                     
                </S.BoxImgslide>               
            </S.SectionUser>
            <S.Wave>            
                    <S.ImgWave src={Wave} alt="Onda"/>
            </S.Wave> 

            

            <S.Collaborate>                
                    <S.TitleCollaborate>{TitleCollaborate}</S.TitleCollaborate>
                    <S.PCollaborate>{PCollaborate}{PCollaborate2}</S.PCollaborate>
                    <S.BtStart>{BtStart}</S.BtStart>
                </S.Collaborate>
            <S.Contato>
                <S.About>
                    <S.TitleAbout>{TitleAbout}</S.TitleAbout>
                    <S.PrAbout>{PrAbout}</S.PrAbout>
                    <S.LogoFooterBox>
                        <S.LogoFooter src={LogoFooter} alt="Logo Footer"/>
                        <S.PLogo>{PLogo}</S.PLogo>
                    </S.LogoFooterBox>
                    <S.Company>
                        <S.PCompany>{PCompany}</S.PCompany>
                    </S.Company>
                </S.About>

                <S.BoxLinks>
                    <S.BoxSocialNetwork>
                        <S.TitleNetwork>{TitleNetwork}</S.TitleNetwork>
                        <S.ListNetwork>
                            <S.ListItemNetwork>{Instagram}</S.ListItemNetwork>
                            <S.ListItemNetwork>{Facebook}</S.ListItemNetwork>
                            <S.ListItemNetwork>{Linkedin}</S.ListItemNetwork>
                            <S.ListItemNetwork>{Blog}</S.ListItemNetwork>
                        </S.ListNetwork>
                    </S.BoxSocialNetwork>
                    <S.BoxSocialNetwork>
                        <S.TitleNetwork>{TitleNetwork2}</S.TitleNetwork>
                        <S.ListNetwork>
                            <S.ListItemNetwork>{FAQ}</S.ListItemNetwork>
                            <S.ListItemNetwork>{TermsOfUse}</S.ListItemNetwork>
                            <S.ListItemNetwork>{PrivacyPolicy}</S.ListItemNetwork>
                            <S.ListItemNetwork>{Support}</S.ListItemNetwork>
                        </S.ListNetwork>
                    </S.BoxSocialNetwork>
                </S.BoxLinks>
            </S.Contato>
        </S.ContainerFooter>
    )
}