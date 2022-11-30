import React from 'react'

const Start = ({setConditional}) => {

    
    const handleClick = (e) => {
        e.preventDefault();

        setConditional(true);
        return;

        /* llamar las palabras */
    }
    return ( 
        
        <div className='flex justify-center mt-40'>
            <button onClick={handleClick} className='inline-block font-bold text-slate-600 border-slate-600 hover:bg-slate-300  text-5xl border-2 rounded px-6 py-4' value= 'start'>Start</button>
        </div>
            

        );
}
 
export default Start;