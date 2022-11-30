import React, {Fragment} from 'react'

const Game = () => {

return (
    <Fragment>
            <h1 className='text-center text-3xl font-bold mt-10'>Adivina la palabra</h1> 
            

            
            <div className='grid grid-cols-2 gap-4 md:mx-10'>
                <div className='border-2 border-slate-600 rounded'>
                    a
                </div>
                <div className='border-2 border-slate-600 rounded'>
                    b
                </div>
                <div className='border-2 border-slate-600 rounded'>
                    c
                </div>
                <div className='border-2 border-slate-600 rounded'>
                    d
                </div>

            </div>
    </Fragment>
    );
} 
export default Game;