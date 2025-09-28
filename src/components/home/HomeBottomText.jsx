import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>
      <p className='absolute lg:w-[30vw] w-64 lg:right-10 right-0 bottom-28  lg:bottom-36 font-[font1] lg:text-[1.1vw] text-xs lg:leading-relaxed leading-tight'>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase px-3 lg:px-13 pt-1 flex items-center'>
  <Link className='text-[6vw] lg:leading-[5.5vw] lg:mt-3' to='/project'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-3 lg:px-13 pt-1  border-white rounded-full uppercase'>
  <Link className='text-[6vw] lg:leading-[5.5vw] lg:mt-3' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText