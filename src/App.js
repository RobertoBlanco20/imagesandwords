import React, {useEffect, useState} from 'react'
import Start from './components/Start'
import Game from './components/Game'

function App() {

  const [ conditional, setConditional] = useState(false)

  let palabra;



  useEffect(() =>{ 

    const ApiData = async () => {
  
      /* Traemos la palabra a resolver */
      if( conditional ){
        const url = `https://random-words-api.vercel.app/word/noun`;
  
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        palabra = resultado[0].word;

          APIPhoto() 

      }
    }
  
    ApiData();
  
  }, [conditional]);


  /* Traemos las imagenes que describen la palabra */
    const APIPhoto = async () => {

      if(palabra){
       
            const APIKey = `31711953-ed260a8ccebd2c4cd107b6fd4`
            const urlPhoto = `https://pixabay.com/api/?key=${APIKey}&q=${palabra}&image_type=photo`
            const respuestaPhoto = await fetch(urlPhoto);
            const resultadoPhoto = await respuestaPhoto.json();
            console.log(resultadoPhoto)
      }
    }
  

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
