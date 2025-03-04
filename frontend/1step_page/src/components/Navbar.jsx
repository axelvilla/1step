import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='w-full mx-auto text-center m-3 mb-7'>
          <Link className="text-2xl xl:text-4xl font-bold" to={'/'}>1Step - Soluciones Digitales</Link>
    </div>
  );
};

