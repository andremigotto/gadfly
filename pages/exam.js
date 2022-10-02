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

  function validaResposta(resposta, id) {
    if(listaValidacao[resposta] == true) {
      const validacao = "sucesso"
      return validacao
    }
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
    
  <div className="pergunta-box">
    <div className="pergunta-box-img-area"><img src={'/Professor_Soren_Peter_parado.png'} id="proff" className="pergunta-box-img"
      onClick={() => animacao()}/></div>
    <div className="pergunta-box-text-area"><div className="pergunta-box-text" id="pergunta">pergnta aqui</div></div>
  </div>

    
  <div className="Cartao">
    <div className="Cartao-alternativas">
      <h3 className="anuncio-alternativas">Alternativas</h3>
      <div className="cartao-alternativas-selector" onClick={typeWriter}><p className="testo-alternativas">a)</p></div>
      <div className="cartao-alternativas-selector" onClick={typeWriter}><p className="testo-alternativas">b)</p></div>
      <div className="cartao-alternativas-selector" onClick={typeWriter}><p className="testo-alternativas">c)</p></div>
      <div className="cartao-alternativas-selector" onClick={typeWriter}><p className="testo-alternativas">d)</p></div>
    </div>
    <div className="Cartao-divisoria"><button className="botao-confirmar-resposta">➡</button></div>
    <div className="Cartao-xp">
      <div className="explicacao_pergunta"><h5 className="testo-explicacao" id="demo"></h5></div>
    </div>
  </div>
  </div>







    // <main>
    //   <div className="box-center">
    //     <h3>{listaPerguntas}</h3>
    //         <button variant="outline-primary" active onClick={() => alternativa = validaResposta(0, "a")}>
    //           {listaResposta[contadorAlternativas ++]}
    //         </button>
    //         <button variant="outline-primary" active onClick={() => alternativa = validaResposta(1, "b")}>
    //           {listaResposta[contadorAlternativas ++]}
    //         </button>
    //         <button variant="outline-primary" active onClick={() => alternativa = validaResposta(2, "c")}>
    //           {listaResposta[contadorAlternativas ++]}
    //         </button>
    //         <button variant="outline-primary" active onClick={() => alternativa = validaResposta(3, "d")}>
    //           {listaResposta[contadorAlternativas ++]}
    //         </button>
    //         <button id="specialbutton" onClick={() => toast.success(alternativa)}>
    //             DEBUG
    //         </button>
    //     </div>
    // </main>
  )
  }