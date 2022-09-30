import Link from "next/link";
import { getMateria } from "../lib/firebase";

export async function getServerSideProps({ query }) {
  const { materias } = query;

  const materiaDoc = await getMateria('materias');

    // JSON serializable data
    let mat = null;

  if (materiaDoc) {
    mat = listaMaterias(materiaDoc)
    console.log(mat)
  }

  function listaMaterias(materiaDoc) {
    const materias = Object.keys(materiaDoc)
    return materias
  }

  return {
    props: { mat },
  };
}

export default function ChapterPage({ mat }) {
  return (
    <main>
      <div className="box-center">
          <Link href="/exam">
            <button className="btn-green">{mat}</button>
          </Link>
      </div>
    </main>
  )
}
