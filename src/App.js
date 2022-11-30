import React, {useEffect, useState} from 'react'
import Start from './components/Start'
import Game from './components/Game'

function App() {

  const [ conditional, setConditional] = useState(false)



  useEffect(() =>{ 

    const ApiData = async () => {
  
      /* Comprueba que este en true (desde el form) y si lo está llama la API */
      if( conditional ){
        const url = `https://random-words-api.vercel.app/word/noun`;
  
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado)
  
      }
    }
  
    ApiData();
  
  }, [conditional]);
  
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
