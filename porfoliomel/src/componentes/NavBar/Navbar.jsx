import { ImgStyled, LinkbtnStyled, LinksConteinerStyled, LinksStyled, LogoStyled, NavWrapperStyled, NavbarHeaderStyked } from "./NavbarStyled";
import Logo from "../../Image/4_Logo Blanco.png";

function  Navbar() {
    return (
        <NavbarHeaderStyked>
            <NavWrapperStyled>
                <LogoStyled> <ImgStyled src={Logo} alt="logo" /> </LogoStyled>
                <LinksConteinerStyled>
                    <LinksStyled>
                        <LinkbtnStyled>INICIO</LinkbtnStyled>
                    </LinksStyled>
                    <LinksStyled>
                        <LinkbtnStyled>INFORMACIÓN</LinkbtnStyled>
                    </LinksStyled>
                    <LinksStyled>
                        <LinkbtnStyled>SERVICIOS</LinkbtnStyled>
                    </LinksStyled>
                    <LinksStyled>
                        <LinkbtnStyled>CONTACTO</LinkbtnStyled>
                    </LinksStyled>
                </LinksConteinerStyled>
            </NavWrapperStyled>
        </NavbarHeaderStyked>
        
    )
}


export default Navbar;