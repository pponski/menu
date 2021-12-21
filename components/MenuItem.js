import React from 'react'

const MenuItem = ({name, setText}) => {



    return (
        <button onClick={() => setText(name)} className='block mx-[5px] text-xs p-3 py-1 rounded-full text-amber-600 border-[1px] border-amber-600 hover:shadow-md hover:shadow-amber-600/40 hover:bg-amber-600 hover:text-white transition ease-out duration-[0.3s]'>
            {name}
        </button>
    )
}

export default MenuItem
