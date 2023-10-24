
import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';

function App() {
  const categorias = [
    {
      nome:'Terror',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Ação',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome:'Rpg',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Simulação',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Estratégia',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5'
    },
    {
      nome:'Jogo de Tiro',
      corPrimaria:'#FEBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Aventura',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]
  const [jogos, setJogos] =  useState([])

  const aoNovoJogoAdicionado= (jogo) =>{
    setJogos([...jogos,jogo])
    console.log(jogos)
    
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}/>
      {categorias.map(categoria => <Categoria
      key={categoria.nome} 
      nome={categoria.nome} 
      corPrimaria={categoria.corPrimaria} 
      corSecundaria={categoria.corSecundaria}
      jogos={jogos.filter(jogos => jogos.categoria === categoria.nome)}/>)}
     <Rodape/>
    </div>
  );
}

export default App;
