import React from 'react'
import { ButtonContact } from '../../components/ButtonContact'

export const Header = () => {
  return (
    <div className='grid xl:grid-cols-2'>
        <div className="m-6 xl:m-15">
            <h1 className='text-6xl font-bold xl:text-7xl mb-6'>Software a medida para impulsar tu negocio</h1>
            <p className='text-2xl mb-6'>Desarrollamos portales, herramientas internas y aplicaciones adaptadas a las necesidades de tu empresa. Optimiza procesos y aumenta tu eficiencia con nuestra tecnología.</p>
          <ButtonContact />
        </div>
        <div className="flex justify-center">
        <video className='rounded-4xl w-100 mb-6'
            src='https://res.cloudinary.com/glide/video/upload/c_scale,w_1400/v1691403628/glideapps.com/persona-pages/IT%20Header%20Final.mp4'
            
            muted
            loop
        />
        </div>
    </div>
  )
}
