import Link from "next/link";

export default function HomePage({ materia }) {
  return (
    <main>
      <div className="box-center">
        <Link href="/exam">
            <button className="btn-green">Quimica</button>
        </Link>
      </div>
    </main>
  )
}
