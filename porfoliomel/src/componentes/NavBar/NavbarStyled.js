import styled, { keyframes } from "styled-components";

const scaleInAnimation = keyframes`
    from {
    transform: scale(1);
    } 
    to {
    transform: scale(1.1);
    }
`;
const scaleOutAnimation = keyframes`
    from {
    transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

export const NavbarHeaderStyked = styled.header`
    border-bottom: solid 3px white;
    width:100%;
    background-color: rgba(49, 39, 131, 0.5);
    
`
export const NavWrapperStyled = styled.div `
    width:100%;
    max-width:1400px;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
`
export const LogoStyled= styled.div`
    
`
export const ImgStyled= styled.img `
    height: 100px;
    
`
export const LinksConteinerStyled = styled.div `
    display: flex;
    
`
export const LinksStyled = styled.div `
    margin: 15px;
    padding: 15px;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius:20px;
    &:hover,
    &:focus {
        background-color: white;
        
        color:black;
    animation: ${scaleInAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al aumentar */
    }

    &:not(:hover):not(:focus) {
    animation: ${scaleOutAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al disminuir */
    }
`
export const LinkbtnStyled = styled.a`
    cursor: pointer;
    font-weight: 600px;
    letter-spacing: 1px;
    font-size: 14px;
`