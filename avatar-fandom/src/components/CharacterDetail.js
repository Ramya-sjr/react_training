import React from 'react';
import style from './styles.module.css'
import {withRouter} from 'react-router-dom';


class CharacterDetail extends React.Component { 

    nextPath(path) {
        this.props.history.push(path);
    }

    componentDidMount(){

        console.log(this.props.location.state)
       
    }

    render() {

    const styles = { width:"100%", height : 'inherit' };
    let character = this.props.location.state;

    
    return(            
         <div style={{ marginTop : '4rem' }}>
            <div className={style.detailImg}>
                <img src={character.photoUrl} style={styles} />
            </div>
            <div className={style.detail}>
                <p className={style.title}>{character.affiliation}</p>
                <p>Allies : {character.allies} </p>
                <p>Enemies : {character.enemies}</p>
            </div>
         </div>
    )
    }    
}

export default withRouter(CharacterDetail)
