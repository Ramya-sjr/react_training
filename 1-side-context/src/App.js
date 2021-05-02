import React from 'react'
import Provider from './Provider'
import Agents from './Agents'


const App = () => {
   return (
     <div>
       <h1>Context Api</h1>
       <Provider>
         <Agents/>
       </Provider>
     </div>
   )
}

export default App