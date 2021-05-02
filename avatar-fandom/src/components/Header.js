import React from 'react'
import image from './images/avatar_airbender_1440x400.jpg'
import style from './styles.module.css'
import history from './history'
import {withRouter} from 'react-router-dom';


class Header extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }
    
    render(){

        const center = {position : 'relative', left : '16%'};

       
        // const btn = {  height:'100px',   position: 'relative',     left: '42%',    top: '8%'    };

        return (            
            <div>
                <div className={style.background}>
                    <img src={image} alt="" style={center}></img>
                </div>
                
                <div className={style.background_bottom}>                    
                    <div className={style.center}>
                        <button className={style.yip} onClick={()=> this.nextPath('/select-nation')}>Watcha Wating For Let's Begin!!!</button>
                        {/* <img src={im} alt="" className={style.img_center}></img> */}
                    </div>
                </div>
            </div>         
        )
    }
  }

  export default withRouter(Header);
