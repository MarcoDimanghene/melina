import { LogoStyled, NavWrapperStyled } from "./NavbarStyled";
import Logo from "../../Image/1_Logo Negro.png";

function  Navbar() {
    return (
        <NavWrapperStyled>
            <LogoStyled> <img src={Logo} alt="logo" /> </LogoStyled>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab officiis voluptas iure necessitatibus eius voluptatem accusantium, eaque odio quae autem illo vitae saepe nulla earum itaque repellendus perferendis doloribus eos.</h1>
        </NavWrapperStyled>
    )
}


export default Navbar;