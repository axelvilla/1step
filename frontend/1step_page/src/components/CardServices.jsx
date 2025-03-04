import React from 'react'

export const CardServices = (props) => {
  return (
    <>
        <div className='flex justify-center'>
          <div className='bg-white  text-neutral-950 max-w-80 rounded-2xl min-h-55 shadow-md shadow-white'>
              <p className='text-3xl my-3 text-center font-bold'>{props.cardTitle}</p>
              <p className='text-xl text-center px-7'>{props.cardBody}</p>
          </div>
        </div>
    </>
  )
}
