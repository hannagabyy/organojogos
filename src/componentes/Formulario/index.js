import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import Botao from '../Botao'
import ListaCategoria from '../ListaCategoria'

const Formulario = (props)=>{
    const [nome,setNome] = useState('')
    const [imagem,setImagem] = useState('')
    const [categoria,setCategoria] = useState('')
   

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogoCadastrado({
            nome,
            imagem,
            categoria,   
        })
        setNome('')
        setImagem('')
        // setCategoria('')
        
    }   
    return(
        <section className='formulario'>
            
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card do seu jogo</h2>
                <CampoTexto label={'Nome'} valor={nome} obrigatorio={true} placeholder={'Nome do Jogo'} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto label={'Imagem'} valor={imagem} obrigatorio={true} placeholder={'Link da imagem do jogo'} aoAlterado ={valor => setImagem(valor)}/>
                <ListaCategoria
                obrigatorio={true} 
                label={'Categoria'} 
                itens={props.categorias} 
                value={categoria.nome} 
                aoAlterado={valor => setCategoria(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario