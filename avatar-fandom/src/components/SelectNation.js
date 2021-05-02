import React from 'react'
import style from '../components/styles.module.css'
import air from '../components/images/air.jpg'
import water from '../components/images/water.jpg'
import fire from '../components/images/fire.jpg'
import earth from '../components/images/earth.jpg'

import {withRouter} from 'react-router-dom';
import history from './history'



class SelectNation extends React.Component{

    nextPath(path) {
        this.props.history.push(path);
      }


    render(){

        return(
            <div >
                <div className={style.nationTitle}>Select Your Nation!</div>
                <div className={style.nation}>
                    <div>
                        <div>
                            <img src={air} alt="" className={style.nationImg} onClick={()=> this.nextPath('/air-nomads')}/>
                            <span className={style.nationName}>Air</span>
                        </div>
                        <div>
                            <img src={water} alt="" className={style.nationImg} onClick={()=> this.nextPath('/water-tribe')}/>
                            <span className={style.nationName}>Water</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={earth} alt="" className={style.nationImg} onClick={()=> this.nextPath('/earth-kingdom')}/>
                            <span className={style.nationName}>Earth</span>
                        </div>
                        <div>
                            <img src={fire} alt="" className={style.nationImg} onClick={()=> this.nextPath('/fire-nation')}/>
                            <span className={style.nationName}>Fire</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(SelectNation)