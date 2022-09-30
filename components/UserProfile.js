export default function UserProfile({ user }) {
    return (
      <div className="caixona">
        <div className="caixa-escura-vertical"></div>
          <div className="box-center-profile">
            <div className="caixa-escura-horizontal"></div>
            <img src={user.photoURL} className="card-img-center" />
            <p>
              <i>@{user.username}</i>
            </p>
            <h1>{user.displayName}</h1>
            <div className="descritor-profile">aaa</div>
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
            <h1>Conhecimento acido</h1>
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
            <div className="teste-box-sombra"></div>
            <div className="caixa-escura-horizontal"></div>
          </div>
        <div className="caixa-escura-vertical"></div>
      </div>
    );
  }