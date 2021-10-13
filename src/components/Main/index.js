import React from 'react'
import * as S from './style'

export function Main({ TTL, PGH, BtStart, ImgFiSection, Sbtt, ParagraphFeat, ParagraphFeatt, ParagraphFeattt, ListItemOne, ListItemTwo,
    ListItemTree, ListItemFour, Gif, TitleGif, ParagraphGif, Ucpttl, UcpP, UcpP2, UcpImg, TtlSection5, ParagraphSection5, Slide1, ImgSlide1, Slide2, Slide3, Slide4, ImgSlide4, Slide5, ImgSlide5, Slide6,
    TittleSecurity, ImgSecurity, PSecurity, PSecurity2, PSecurity3 }) {

    return (
        <S.ContainerMain>
            <S.FirstSectionM>
                <S.BoxIdeas>
                    <S.BoxTxtIdeas>
                        <S.TtlIdeas>{TTL}</S.TtlIdeas>
                        <S.PrghIdeas>{PGH}</S.PrghIdeas>
                        <S.BtStart>{BtStart}</S.BtStart>
                    </S.BoxTxtIdeas>
                    <S.BoxImgIdeas>
                        <S.ImgIdeas src={ImgFiSection} alt="Ideias" />
                    </S.BoxImgIdeas>
                </S.BoxIdeas>
            </S.FirstSectionM>

            <S.SecondSection>
                <S.Features>
                    <S.SbttFeat>{Sbtt}</S.SbttFeat>
                    <S.ParagraphFeat>{ParagraphFeat}</S.ParagraphFeat>
                    <S.ParagraphFeat>{ParagraphFeatt}{ParagraphFeattt}</S.ParagraphFeat>
                </S.Features>
            </S.SecondSection>

            <S.ThirdSection>
                
                    <S.Item>
                        <S.ListItem><S.ButtonMC>{ListItemOne}</S.ButtonMC></S.ListItem>
                        <S.Divide></S.Divide>
                        <S.ListItem><S.ButtonMC>{ListItemTwo}</S.ButtonMC></S.ListItem>
                        <S.Divide></S.Divide>
                        <S.ListItem><S.ButtonMC>{ListItemTree}</S.ButtonMC></S.ListItem>
                        <S.Divide></S.Divide>
                        <S.ListItem><S.ButtonMC>{ListItemFour}</S.ButtonMC></S.ListItem>
                    </S.Item>
                
                <S.ContainerGifTxt>
                    <S.BoxGif>
                        <S.ImgGif src={Gif} alt="Gif da Strytegy" />
                    </S.BoxGif>
                    <S.BoxTxtGif>
                        <S.SbtMenuC>{TitleGif}</S.SbtMenuC>
                        <S.ParagraphMenuC>{ParagraphGif}</S.ParagraphMenuC >
                    </S.BoxTxtGif>
                </S.ContainerGifTxt>
            </S.ThirdSection>

            <S.FourthSection>
                <S.ContainerTxtUcpImg>
                    <S.BoxUcpImg>
                        <S.UcpImg src={UcpImg} alt="Criatividade" />
                    </S.BoxUcpImg>
                    <S.BoxTxtUcpImg >
                        <S.UcpTtl>{Ucpttl}</S.UcpTtl>
                        <S.ParagraphUcpP>{UcpP}</S.ParagraphUcpP>
                        <S.ParagraphUcpP>{UcpP2}</S.ParagraphUcpP>
                    </S.BoxTxtUcpImg>
                </S.ContainerTxtUcpImg>
            </S.FourthSection>

            <S.FifthSection>
                <S.BoxTxtFft >
                    <S.TtlSF>{TtlSection5}</S.TtlSF>
                    <S.ParagraphSF>{ParagraphSection5}</S.ParagraphSF>
                </S.BoxTxtFft>
            </S.FifthSection>

            <S.SixthSection>
                <S.ContainerBoxCards>
                    <S.BoxImgCards>
                        <S.ImgCards src={ImgSlide1} alt="" />
                        <S.PboxCards>{Slide1}</S.PboxCards>
                    </S.BoxImgCards>
                    <S.BoxCardTxt>{Slide2}</S.BoxCardTxt>
                </S.ContainerBoxCards>
                <S.ContainerBoxCards>
                    <S.BoxCardTxt>{Slide3}</S.BoxCardTxt>
                    <S.BoxImgCards>
                        <S.ImgCards src={ImgSlide4} alt="" />
                        <S.PboxCards>{Slide4}</S.PboxCards>
                    </S.BoxImgCards>
                </S.ContainerBoxCards>
                <S.ContainerBoxCards>
                    <S.BoxImgCards>
                        <S.ImgCards src={ImgSlide5} alt="" />
                        <S.PboxCards>{Slide5}</S.PboxCards>
                    </S.BoxImgCards>
                    <S.BoxCardTxt>{Slide6}</S.BoxCardTxt>
                </S.ContainerBoxCards>
            </S.SixthSection>

            <S.SeventhSection>
                <S.Title>{TittleSecurity}</S.Title>
                <S.Image src={ImgSecurity} alt="strytegy security" />
                <S.ListP>
                    <S.ItemListP>{PSecurity}</S.ItemListP>
                    <S.ItemListP>{PSecurity2}</S.ItemListP>
                    <S.ItemListP>{PSecurity3}</S.ItemListP>
                </S.ListP>
            </S.SeventhSection>


        </S.ContainerMain>
    )
}