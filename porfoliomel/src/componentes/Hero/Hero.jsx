import { DatpsContStyled, ExpContStyled, FotoContStyled, HablilitisContStyled, HeroContStyked, ImgFotoStyled } from "./HeroStyled"
import Foto from "./image/foto.png";


function Hero() {
    return (
        <HeroContStyked>
            <FotoContStyled>
                <ImgFotoStyled src={Foto} alt="logo" />
                <h1>Centellegher Melina</h1>
                <DatpsContStyled>
                    <h3>Mail: </h3> <p>melnqn@gmail.com</p>
                </DatpsContStyled>
                <DatpsContStyled>
                    <h3>Telefono:</h3> <p>299-5936891</p>
                </DatpsContStyled>
            </FotoContStyled>
            <HablilitisContStyled>
                <h3>Hablidades y Conocimiento</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non doloribus vitae, vero eos quos quod repudiandae sequi perspiciatis cum suscipit id accusantium a, odio aperiam ullam assumenda voluptate quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, inventore quasi! Cum architecto iste eos cumque ea nam distinctio est optio non quod, molestias voluptates deleniti fugit magnam? Iste, ipsam.</p>
            </HablilitisContStyled>
            <ExpContStyled>
                <h3>Experiencia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non doloribus vitae, vero eos quos quod repudiandae sequi perspiciatis cum suscipit id accusantium a, odio aperiam ullam assumenda voluptate quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, inventore quasi! Cum architecto iste eos cumque ea nam distinctio est optio non quod, molestias voluptates deleniti fugit magnam? Iste, ipsam.</p>
            </ExpContStyled>
        </HeroContStyked>
    )
}

export default Hero