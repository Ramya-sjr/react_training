import React from 'react';
import style from './styles.module.css'
import { useHistory } from "react-router-dom";

function Character (props){ 

    let history = useHistory();

    const styles = { width:"100%", height : 'inherit' };

    console.log(props.character._id)
    
    return(            
         <div>
            <div className={style.card}>
                <img src={props.character.photoUrl} alt="" style={styles}/>
                    <h1>{props.character.name}</h1>                  
                     <p><button onClick={()=> history.push("/character-detail", props.character)}>Click Me!</button></p>            
            </div>
         </div>
    )
    
}

export default Character
