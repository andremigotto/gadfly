import Link from "next/link";

export default function HomePage({ materia }) {
  return (
    <main>
      <div className="box-center">
        <Link href="/chapter">
            <button className="btn-green">Quimica</button>
        </Link>
      </div>
    </main>
  )
}
