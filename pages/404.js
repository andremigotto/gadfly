import Link from 'next/link';

export default function Custom404() {
  return (
    <main>
      <h1>404 - A pagina não existe...</h1>
      <Link href="/">
        <button className="btn-blue">Voltar</button>
      </Link>
    </main>
  );
}