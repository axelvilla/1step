import React from 'react'
import { CardServices } from '../../components/cardServices'

export const Beneficts = () => {
  return (
    <>
        <div className='mb-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Beneficios de trabajar con nosotros</h2>
            <div className="flex flex-cols-2 flex-wrap gap-10 justify-center">

            {/* Personalizacion */}
            <CardServices cardTitle='Personalización' cardBody='Desarrollamos soluciones a medida para cada tipo de negocio.' />

            {/* Eficiencia */}
            <CardServices cardTitle='Eficiencia' cardBody='Automatizamos procesos para ahorrar tiempo y mejorar la productividad.' />

            {/* Soporte Técnico */}
            <CardServices cardTitle='Soporte Técnico' cardBody='Brindamos asistencia continua para garantizar el éxito de tu software.' />
        </div>
        </div>
    </>
  )
}
