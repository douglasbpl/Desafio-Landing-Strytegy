import React from 'react'
import * as S from  './style'

export  function Header({ blog, faq, enter, lang, logo }) {
    return (
        <S.ContainerHeader>
         <S.ContainerMenu>
            <S.ImgLogo src={logo} alt="logo" />
            <S.Menu>
                <S.BtInf>{blog}</S.BtInf>   
                <S.BtInf>{faq}</S.BtInf>
                <S.BtInf>{enter}</S.BtInf>
                <S.BtInf>{lang}</S.BtInf> 
            </S.Menu>
         </S.ContainerMenu>                
        </S.ContainerHeader>
    )
}
