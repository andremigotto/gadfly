import toast from "react-hot-toast";
import { getMateria } from "../lib/firebase";
import Button from 'react-bootstrap/Button';

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
      return true
    }
  }

  return (
    <main>
      <div className="box-center">
        <h3>{listaPerguntas}</h3>
            <Button variant="outline-primary" active onClick={() => alternativa = validaResposta(0, "a")}>
              {listaResposta[contadorAlternativas ++]}
            </Button>
            <Button variant="outline-primary" active onClick={() => alternativa = validaResposta(1, "b")}>
              {listaResposta[contadorAlternativas ++]}
            </Button>
            <Button variant="outline-primary" active onClick={() => alternativa = validaResposta(2, "c")}>
              {listaResposta[contadorAlternativas ++]}
            </Button>
            <Button variant="outline-primary" active onClick={() => alternativa = validaResposta(3, "d")}>
              {listaResposta[contadorAlternativas ++]}
            </Button>
            <button id="specialbutton" onClick={() => toast.success(alternativa)}>
                DEBUG
            </button>
        </div>
    </main>
  )
  }