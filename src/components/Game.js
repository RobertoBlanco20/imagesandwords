import React, {Fragment} from 'react'
import Time from './Time'

const Game = ({photos, key}) => {

return (
    <Fragment>
            
            <h1 className='text-center text-3xl font-bold my-10'>what is the word</h1> 
                        
            <Time />

            
            <div className='grid grid-cols-2   gap-32 md:mx-10'>

                {photos.map( (photo, index) => (

                    <div key={index} className='border-2 border-slate-600 rounded'>
                        <img src={photo.largeImageURL} alt='Juego'/>
                    </div>
                        
                         

                ) )}

            </div>
    </Fragment>
    );
} 
export default Game;