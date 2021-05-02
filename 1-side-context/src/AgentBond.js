
import React, {Fragment} from 'react'
import Context from './Context'

const AgentBond = () => {
    return (
        <Context.Consumer>
            {
                (context) => (
                    <Fragment>
                        <h3>Agent Information</h3>
                        <p>Mission Name : {context.data.mname}</p>
                        <p>Agent : {context.data.agent}</p>
                        <p>Mission Status : {context.data.accepted}</p>
                        <button onClick= {context.isMissionAccepted}>Really!</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    );
}

export default AgentBond