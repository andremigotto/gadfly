import { getMateria } from "../lib/firebase";

export async function getServerSideProps({ query }) {
  const { materias } = query;

  const materiaDoc = await getMateria('materias');

    // JSON serializable data
    let materia = null;

  if (materiaDoc) {
    materia = materiaDoc;
  }

  return {
    props: { materia },
  };
}

export default function ExamPage({ materia }) {
  const contador = 0;
  return (
    <main>
      <div className="box-center">
        <p>{materia.ph[contador]['pergunta']}</p>
        <button>
            {materia.ph[contador]['respostas']['1']}
        </button>
        <button>
            {materia.ph[contador]['respostas']['2']}
        </button>
        <button>
            {materia.ph[contador]['respostas']['3']}
        </button>
        <button>
            {materia.ph[contador]['respostas']['4']}
        </button>
        <button>
            {materia.ph[contador]['respostas']['5']}
        </button>
      </div>
    </main>
  )
}
