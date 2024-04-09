import styled, { keyframes } from "styled-components";

const scaleInAnimation = keyframes`
    from {
    transform: scale(1);
    } 
    to {
    transform: scale(0.9);
    }
`;
const scaleOutAnimation = keyframes`
    from {
    transform: scale(0.9);
    }
    to {
        transform: scale(1);
    }
`;

export const HeroContStyked = styled.div`
    width:100%;
    max-width:1400px;
    background-color: var(--blue);
    border-radius:10px;
    margin:auto;
    display: grid;
    grid-template-columns: 2fr 2fr 1.5fr;
    padding: 1rem;
    gap: 2rem;
`
export const FotoContStyled = styled.div `
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    border-radius:10px;
    h1 {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 5px;
        border-radius:10px;
        margin:0;
    }
    &:hover,
    &:focus {
    animation: ${scaleInAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al aumentar */
    }

    &:not(:hover):not(:focus) {
    animation: ${scaleOutAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al disminuir */
    }
`
export const ImgFotoStyled= styled.img `
    height: 250px;
    width: 200px;
    border-radius:100%;
    background-color: grey;
    margin: 15px;
`
export const DatpsContStyled= styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    h3{
        margin: 0;
    }
    p{
        margin: 5px 15px;
    }
    
`
export const HablilitisContStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    color: black;
    border-radius:10px;
    h3{
        margin: 0;
    }
    p{
        margin: 5px 15px;
    }
    &:hover,
    &:focus {
    animation: ${scaleInAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al aumentar */
    }

    &:not(:hover):not(:focus) {
    animation: ${scaleOutAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al disminuir */
    }
`
export const ExpContStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    color: black;
    border-radius:10px;
    h3{
        margin: 0;
    }
    p{
        margin: 5px 15px;
    }
    &:hover,
    &:focus {
    animation: ${scaleInAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al aumentar */
    }

    &:not(:hover):not(:focus) {
    animation: ${scaleOutAnimation} 0.5s ease forwards; /* Aplicar la animación de escala al disminuir */
    }
`