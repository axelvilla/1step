import React from 'react'
import { CardServices } from '../../components/cardServices'

export const Services = () => {
  return (
    <>
        <div className='p-6'>
          <p className='text-3xl font-bold text-center mb-4'>Nuestros Servicios</p>
          <div className="flex flex-cols-2 flex-wrap gap-10 justify-center">

            {/* Gestion de Stock*/}
            <CardServices cardTitle = "Gestión de Stock" cardBody = "Optimiza el control de tu inventario con un sistema inteligente que te permitirá gestionar productos en tiempo real."/>

            {/* Landing Pages */}
            <CardServices cardTitle = "Landing Pages" cardBody = "Impulsa tu presencia online con páginas diseñadas para captar clientes y aumentar conversiones."/>

            {/* E-commerce */}
            <CardServices cardTitle = "E-commerce" cardBody = "Transforma tu negocio con una tienda online optimizada para ventas y crecimiento."/>

            {/* Automatización */}
            <CardServices cardTitle = "Automatización" cardBody = "Ahorra tiempo y mejora la productividad con procesos automatizados adaptados a tu negocio."/>
          </div>
        </div>
    </>
  )
}
