import React from 'react'

const Dish = () => {
    return (
        <div className='flex justify-between px-3 py-3 odd:bg-gray-100'>
            <div>
                <p className='font-medium'>Spaghetti Carbonara</p>
                <p className='font-light text-sm'>makaron tagliatelle / jajko / ser peccorino / boczek</p>
            </div>
            <div className='px-1'>
                <p>40zł</p>
            </div>
        </div>
    )
}

export default Dish
