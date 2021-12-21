import React from 'react'

const Header = () => {
    return (
        <div className="bg-image">
            <header className='bg-header py-6 px-3 text-center'>
                <h1 className='font-black text-2xl mb-7'>Restauracja <span className='underline decoration-wavy underline-offset-[8px] decoration-amber-600'>"Pod Cizemką"</span></h1>   
                {/* <img src="restaurant.jpeg" alt="restaurant" /> */}
                <p className='text-xs italic mb-3 leading-5'>Świadcząc najwyzsza jakość usług, nie przyspieszamy czasu gotowania, stąd czas podania jest realnym czasem przyrządzania dania. Prosimy pytać kelnera o czas oczekiwania na zamówione danie.</p>  
                <h3 className='text-md font-bold'>Zapraszamy do obejrzenia naszego menu!</h3> 
            </header>
        </div>
    )
}

export default Header
