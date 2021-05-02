import React, {useState} from 'react'
import PackageContext from './Context'

const Provider = (props) => {
    
    const[mission, setMission] = useState({
        mName : "Go to Russia",
        agent : 7,
        accepted : "Not Accepted"

    })
      
    return (
        <PackageContext.Provider
            value={{
                data: mission,
                isMissionAccepted: () => { 
                    setMission({ ...mission, accepted: "ACCEPTED" }); 
                }
            }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider