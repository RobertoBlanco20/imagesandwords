import React, {useState} from 'react'
import Start from './components/Start'
import Game from './components/Game'

function App() {

  const [ conditional, setConditional] = useState(false)

  return (
    <div className="font-mono">

      { !conditional ? 
      
      <Start
        setConditional={setConditional}
      />
      :
      <Game
      
     />

    
    }
      
    </div>

  );
}

export default App;
