import Link from "next/link";
import toast from "react-hot-toast";
import { getMateria } from "../lib/firebase";

export async function getServerSideProps({ query }) {
  const { materias } = query;

  const materiaDoc = await getMateria('materias');

    // JSON serializable data
    let questoes = null;
    let respostas = null;

  if (materiaDoc) {
    questoes = listaQuestoes(materiaDoc)
    respostas = listaRespostas(materiaDoc)
  }

  function listaQuestoes(materiaDoc) {
    const lista = Object.values(materiaDoc)[0]
    const listaQuestoes = Object.keys(lista)
    return listaQuestoes
  }

  function listaRespostas(materiaDoc) {
    const lista = Object.values(materiaDoc)[0]
    const listaRespostas = Object.values(lista)
    return listaRespostas
  }

  return {
    props: { questoes, respostas },
  };
}

export default function ExamPage({ questoes, respostas }) {
  let contador = 0
  let subContador = 0
  let contadorAlternativas = 0
  let listaPerguntas = questoes[contador]
  let listaResposta = Object.keys(respostas[subContador])
  let listaValidacao = Object.values(respostas[subContador])
  let alternativa = null
  let resultado = null

  function validaResposta(resposta) {
    if(listaValidacao[resposta] == true) {
      return true
    }
    return false
  }

  function confirmaResposta(alternativa){
    const validacao = validaResposta(alternativa)
    const textoResposta = textoResp(validacao)

    animacao()

    if(validacao == true) {
      document.getElementById("coin").className='coin-aparecer'
      document.getElementById("coin").src='/Coin.gif'
      setTimeout(() =>document.getElementById("coin").src='', 2000)
      setTimeout(() =>document.getElementById("coin").className='coin-desaparecer', 2000)
    }

    return textoResposta
  }

  function textoResp(validacao) {
    if(validacao == true) {
      const texto = "Parabéns, você acertou! ✔"
      return texto
    }
    const texto =  "Você errou, tente de novo! ❌"
    return texto
  }
  
  //Funcao de escrever algo onde o Element ID é demo
  var i = 0;
  var txt = "aqui eu explico a pergunta, dizendo que por esse lado a pergunta foi explicada, e isso significa que a pergunta de fato foi sim explicada";
  var speed = 50;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  //Funcao para testar animacao do Soren Peter
  const animacao = () => {
    document.getElementById("proff").src='/Professor_Soren_Peter.gif'
    setTimeout(() =>document.getElementById("proff").src='/Professor_Soren_Peter_parado.png', 1000)
  }

  return (
  <div className="menu-background">
  
  <img className="coin-desaparecer" id="coin" src=""/>

  <div className="pergunta-box">
    <div className="pergunta-box-img-area"><img src={'/Professor_Soren_Peter_parado.png'} id="proff" className="pergunta-box-img"
      onClick={() => animacao()}/></div>
    <div className="pergunta-box-text-area"><div className="pergunta-box-text" id="pergunta">{listaPerguntas}</div></div>
  </div>

    
  <div className="Cartao">
    <div className="Cartao-alternativas">
      <h3 className="anuncio-alternativas">Alternativas</h3>
      <button className="cartao-alternativas-selector" onClick={() => alternativa = 0}><div className="cartao-alternativas-selector-box"><p className="testo-alternativas">a) {listaResposta[contadorAlternativas ++]}</p></div></button>
      <button className="cartao-alternativas-selector" onClick={() => alternativa = 1}><div className="cartao-alternativas-selector-box"><p className="testo-alternativas">b) {listaResposta[contadorAlternativas ++]}</p></div></button>
      <button className="cartao-alternativas-selector" onClick={() => alternativa = 2}><div className="cartao-alternativas-selector-box"><p className="testo-alternativas">c) {listaResposta[contadorAlternativas ++]}</p></div></button>
      <button className="cartao-alternativas-selector" onClick={() => alternativa = 3}><div className="cartao-alternativas-selector-box"><p className="testo-alternativas">d) {listaResposta[contadorAlternativas ++]}</p></div></button>
    </div>
    <div className="Cartao-divisoria">
    <Link href={"/exam"}>
      <button onClick={() => toast(confirmaResposta(alternativa), {
        icon: '📚',
      })} className="botao-confirmar-resposta">➡</button>
    </Link>
    </div>
    <div className="Cartao-xp">
      <div id="explicacao" className="explicacao_pergunta"><h5 className="testo-explicacao" id="demo"></h5></div>
    </div>
  </div>
  </div>
  )
  }