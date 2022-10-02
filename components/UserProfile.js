function Mudafoto_normal() {
  if(aparencia_fullset_nove_azul.checked){
    document.getElementById("perfil").src='/Nove_azul.png';
  }else if(aparencia_fullset_soren_peter.checked){
    document.getElementById("perfil").src='/Soren_Peter.png';
  }else{
    document.getElementById("perfil").src='/Normal.png';
  }

  if(aparencia_oculos_technoculos.checked){
    document.getElementById("perfil_cosmetico").style='visibility: visible;'
}else{
  document.getElementById("perfil_cosmetico").style='visibility: hidden;'
}
}


export default function UserProfile({ user }) {
    return (
      <div className="caixona">
        <div className="caixa-escura-vertical"></div>
          <div className="box-center-profile">
            <div className="caixa-escura-horizontal"><div className="bola-escura"></div></div>

            <div class="box_espaco">
              <section class="grid grid-area-1">
                <div class="item item-1"><div class="box_image_perfil"><img src={'/Normal.png'} id="perfil" className="card-img-center"/><img src={'/Scouter.png'} id="perfil_cosmetico" className="card-img-cosmetico"/></div></div>
                <div class="item item-2"><h1>{user.displayName}</h1></div>
                <div class="item item-3"></div>
                <div class="item item-4"><h3><img src={'/brasil_icon.png'} className="pais_icon"/> Atibaia, São Paulo, Brasil</h3></div>
                <div class="item item-5"></div>
                <div class="item item-6"><div className="descritor-profile">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem</div></div>
              </section>
            </div>


            <div className="barra-branca"></div>


            <div>
            <div className="ach-box">
            <h1>Mais de oito mil !</h1>
            <img src={'/Achivement_1.png'} className="achv-icon"/>
            <h5 className="ach-descriptor">Consiga pontuação maxima em qualquer materia pela primeira vez</h5>
            </div>
            </div>

            <div>
            <div className="ach-box">
            <h1>Da cerveja ao acido</h1>
            <img src={'/Achivement_3.png'} className="achv-icon"/>
            <h5 className="ach-descriptor">Consiga pontuação maxima na materia de PH</h5>
            </div>
            </div>

            <div>
            <div className="ach-box">
            <h1>Começando o estudo</h1>
            <img src={'/Achivement_2.png'} className="achv-icon"/>
            <h5 className="ach-descriptor">Crie uma conta no Gadfly</h5>
            </div>
            </div>

            <div className="barra-branca"></div>

            <h1>Aparencias</h1>
            <div className="scroll-container">
            <div>
            <div className="aparencia-box">
            <h1>Oculos - Technoculos</h1>
            <h5>Recompensa por "Mais de oito mil !" - Consiga pontuação maxima em qualquer materia pela primeira vez</h5>
            <img src={'/Scouter_icon.png'} className="aparencia_icon"/>
            <input type="checkbox" id="aparencia_oculos_technoculos" name="technoculos" onChange={Mudafoto_normal}></input>
            </div>
            </div>
            <div>
            <div className="aparencia-box">
            <h1>Fullset - Nove Azul</h1>
            <h5>Recompensa por "Começando o estudo" - Crie uma conta no Gadfly</h5>
            <img src={'/nine_icon.png'} className="aparencia_icon"/>
            <input type="checkbox" id="aparencia_fullset_nove_azul" name="nove_azul" onChange={Mudafoto_normal}></input>
            </div>
            </div>
            <div>
            <div className="aparencia-box">
            <h1>Fullset - Søren Peter</h1>
            <h5>Recompensa por "Da cerveja ao acido" - Consiga pontuação maxima na materia de PH</h5>
            <img src={'/Soren_Peter_icon.png'} className="aparencia_icon"/>
            <input type="checkbox" id="aparencia_fullset_soren_peter" name="soren_peter" onChange={Mudafoto_normal}></input>
            </div>
            </div>
            </div>


            <div className="barra-branca"></div>


            <div className="caixa-escura-horizontal-baixo"></div>
          </div>

        <div className="caixa-escura-vertical"></div>
      </div>
    );
  }

  //<div>
  //<img src={'/Updown.png'} className="scroll_icon"/>
  //</div>