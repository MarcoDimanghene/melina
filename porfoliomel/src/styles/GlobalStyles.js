import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle `
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
    font-family: 'Onest Variable', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;  
