import React from 'react'

export const ContactUs = () => {
  return (
    <>
        <div className="grid grid-cols-1 text-3xl font-bold text-center mb-4 ">
          <h3 className='mb-4'>Contáctanos</h3>
              <div className="grid justify-center gap-3">
              <input className='placeholder-white border border-b-blue-100 w-100 p-2 rounded-xl text-xl' type="text" name="" id="" placeholder='Nombre' />

              <input placeholder='Correo' className='placeholder-white border border-b-blue-100 w-100 p-2 rounded-xl text-xl' type="email" name="" id="" />

              <textarea placeholder='Mensaje' className='placeholder-white border border-b-blue-100 w-100 p-2 rounded-xl text-xl' name="" id=""></textarea>
            </div>
        </div>
    </>
  )
}
