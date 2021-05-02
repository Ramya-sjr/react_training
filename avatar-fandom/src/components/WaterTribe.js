import React from 'react'
import Character from './Character'
import style from './styles.module.css'

class WaterTribe extends React.Component {
  constructor() {
    super();
    this.state = { characters: [] };
    this.getCharacters = this.getCharacters.bind(this);

  }

  componentDidMount() {
    this.getCharacters();

  }

  getCharacters() {
    console.log("func")
    fetch("https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe")
      .then(response => response.json())
      .then(data => {
        console.log("Response", data);
        this.setState({ characters: data });
      })
  }

  render() {

    const items = this.state.characters.map(char => {
      return char.photoUrl ? <div ><Character key={char._id} character={char} /></div> : "";
    });

    return (
      <div>
        <div>
          <div className={style.grid}>
            {items}
          </div>
        </div>

      </div>
    );

  }
}

export default WaterTribe