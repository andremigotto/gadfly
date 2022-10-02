import Link from "next/link";
import { useRouter } from 'next/router'

export default function HomePage({ materia }) {

  const animacao = () => {
    document.getElementById("materia").src='/Quimica_icone.gif'
    setTimeout(() =>document.getElementById("materia").src='/Quimica_icone_parado.png', 1000)
  }

  return (
    <div className="menu-background">


      <img src={'/Quimica_icone_parado.png'} id="materia" className="menu-box-imagem-materia"
      onClick={() => animacao()}/>

      
      <div className="Cartao">
        <div className="Cartao-materias">
          <Link href="/chapter">
          <button className="cartao-materia-selector"><h2 className="testo-materia">Química</h2></button>
          </Link>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Matemática</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Biologia</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Física</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">História</h2></button>
        </div>
        <div className="Cartao-divisoria"></div>
        <div className="Cartao-xp">
          <div className="cartao-xp-selector"><h4 className="xp-porcentagem">0%</h4></div>
          <div className="cartao-xp-selector"><h4 className="xp-porcentagem">0%</h4></div>
          <div className="cartao-xp-selector"><h4 className="xp-porcentagem">0%</h4></div>
          <div className="cartao-xp-selector"><h4 className="xp-porcentagem">0%</h4></div>
          <div className="cartao-xp-selector"><h4 className="xp-porcentagem">0%</h4></div> 
        </div>
      </div>
    </div>

  )
}

//import Link from "next/link";
