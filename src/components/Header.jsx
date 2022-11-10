import React from 'react';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold'>Multi <span className='font-bold text-violet-900'>Home.</span></h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/login'>Entrar</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/register'>Inscreva-se</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
