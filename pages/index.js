import Head from 'next/head'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import { useState } from 'react';
import Footer from '../components/Footer';
import Dish from '../components/Dish';

export default function Home() {

  const [text, setText] = useState('');


  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* animate-[bounce_8s_linear_infinite]  */}
    {/* DESKTOP INFORMATION */}
        <div className='fixed left-0 bottom-0 right-0 top-0 hidden sm:block pt-[150px]'>
          <p className='text-[100px] text-center mb-10 animate-[bounce_3s_linear_infinite]'>📱</p>
          <p className='mb-10 text-xl text-center'>Strona dostępna tylko na <span className='font-bold text-orange-500 text-shadow-md underline decoration-wavy decoration-[3px] decoration-sky-500 underline-offset-[10px]'>urządzeniach mobilnych!</span></p>
        </div>
    {/* / DESKTOP INFORMATION */}

    {/* MOBILE WEBSITE */}
        <div className='sm:hidden'>
          <Header/>
            <div className="shadow-md sticky top-0 scrollbar flex py-4 px-1 w-screen whitespace-nowrap overflow-x-scroll bg-white">
              <MenuItem setText={setText} name="pełne menu"/>
              <MenuItem setText={setText} name="dania wegańskie"/>
              <MenuItem setText={setText} name="przystawki"/>
              <MenuItem setText={setText} name="dania główne"/>
              <MenuItem setText={setText} name="desery"/>
              <MenuItem setText={setText} name="alkohole"/>
              <MenuItem setText={setText} name="dla dzieci"/>
            </div>
            <div className="">
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
            </div>
            <Footer/>
        </div>
    {/* / MOBILE WEBSITE */}
    </div>
  )
}
