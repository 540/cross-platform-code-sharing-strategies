import { FullPokemon } from '@540/core'

interface Props {
  currentPokemon?: FullPokemon
}

export const PokedexDetail: React.VFC<Props> = ({currentPokemon}) => {
  return (
    <div id="pokedex">
      <div className="container">
        <div id="left">
          <div id="bg_curve1_left"/>
          <div id="bg_curve2_left"/>
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"/>
            </div>
            <div id="miniButtonGlass1"/>
            <div id="miniButtonGlass2"/>
            <div id="miniButtonGlass3"/>
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"/>
              <div id="junction2"/>
            </div>
          </div>
          <div id="screen">
            <div id="topPicture">
              <div id="buttontopPicture1"/>
              <div id="buttontopPicture2"/>
            </div>
            <div id="picture">
              {currentPokemon && <img src={currentPokemon.picture} alt={currentPokemon.name} height="170"/>}
            </div>
            <div id="buttonbottomPicture"/>
            <div id="speakers">
              <div className="sp"/>
              <div className="sp"/>
              <div className="sp"/>
              <div className="sp"/>
            </div>
          </div>
          <div id="bigbluebutton"/>
          <div id="barbutton1"/>
          <div id="barbutton2"/>
          <div id="cross">
            <div id="leftcross">
              <div id="leftT"/>
            </div>
            <div id="topcross">
              <div id="upT"/>
            </div>
            <div id="rightcross">
              <div id="rightT"/>
            </div>
            <div id="midcross">
              <div id="midCircle"/>
            </div>
            <div id="botcross">
              <div id="downT"/>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="stats">
            <strong>Name:</strong> {currentPokemon && currentPokemon.name}<br/>
            <strong>Type:</strong><br/>
            {currentPokemon && currentPokemon.types && currentPokemon.types.map(type => (
              <p style={{marginLeft: 8}}>{type}<br/></p>
            ))}
            <strong>Height:</strong> {currentPokemon && currentPokemon.height / 10}m<br/>
            <strong>Weight:</strong> {currentPokemon && currentPokemon.weight / 10}kg<br/><br/>
          </div>
          <div id="blueButtons1">
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
          </div>
          <div id="blueButtons2">
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
            <div className="blueButton"/>
          </div>
          <div id="miniButtonGlass4"/>
          <div id="miniButtonGlass5"/>
          <div id="barbutton3"/>
          <div id="barbutton4"/>
          <div id="yellowBox1"/>
          <div id="yellowBox2"/>
          <div id="bg_curve1_right"/>
          <div id="bg_curve2_right"/>
          <div id="curve1_right"/>
          <div id="curve2_right"/>
        </div>
      </div>
    </div>
  )
}
