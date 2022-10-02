import Link from "next/link";
import { useRouter } from 'next/router'



const animacao = () => {
  document.getElementById("materia").src='/PH_icone.gif'
  setTimeout(() =>document.getElementById("materia").src='/PH_icone_parado.png', 1000)
}




export default function HomePage({ materia }) {
  return (
    <div className="menu-background">


      <img src={'/PH_icone_parado.png'} id="materia" className="menu-box-imagem-materia"
      onClick={() => animacao()}/>

      
      <div className="Cartao">
        <div className="Cartao-materias">
          <Link href="/exam">
            <button className="cartao-materia-selector"><h2 className="testo-materia">PH</h2></button>
          </Link>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Isomeria</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Química Nuclear</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Química Inorganica</h2></button>
          <button className="cartao-materia-selector"><h2 className="testo-materia">Voltar</h2></button>
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
