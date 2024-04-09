import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

    :root {

    --blue: #312783;
    --pink: #CF6766;
    --gradient: linear-gradient(to bottom, #FFC0CB, #FFFFFF);

    }

    html{
    scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    background: var(--gradient);
    background-repeat: no-repeat;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    }



`;  
