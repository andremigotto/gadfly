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
  let alternativaEscolhida = null
  let listaValidacao = Object.values(respostas[subContador])

  return (
    <main>
      <div className="box-center">
        <p>{listaPerguntas}</p>
        <button onClick={() => alternativaEscolhida = 0}>
          {listaResposta[contadorAlternativas ++]}
        </button>
        <button onClick={() => alternativaEscolhida = 1}>
          {listaResposta[contadorAlternativas ++]}
        </button>
        <button onClick={() => alternativaEscolhida = 2}>
          {listaResposta[contadorAlternativas ++]}
        </button>
        <button onClick={() => alternativaEscolhida = 3}>
          {listaResposta[contadorAlternativas ++]}
        </button>
        <button onClick={() => toast.success(alternativaEscolhida)}>
         <a>LOG</a>
        </button>
      </div>
    </main>
  )
}
