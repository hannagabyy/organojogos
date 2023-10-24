import './Jogos.css'


const Jogo = ({nome,imagem,categoria,corDeFundo}) =>{
    return (
        <div className='jogo'>
            <div className='cabecalho'style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt ={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
            </div>

        </div>

    )
}

export default Jogo