import Jogo from '../Jogo'
import './Categoria.css'

const Categoria = (props) =>{
    const css = {backgroundColor : props.corSecundaria}
    return(
        props.jogos.length >0 && <section className='categoria'style={css}>
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <div className='jogos'>
            {props.jogos.map(jogo => <Jogo corDeFundo={props.corPrimaria} key={jogo.nome} nome={jogo.nome} imagem={jogo.imagem}/>)}
            </div>
        </section>
    )
}
export default Categoria