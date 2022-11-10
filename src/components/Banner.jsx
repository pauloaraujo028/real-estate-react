import React from 'react';

import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Alugue</span> a casa dos seus sonhos com a gente.
          </h1>
          <p className='max-w-[480px] mb-4'>
            Precisa de um lugar para morar, mas fica cansado só de ver a lista de documentos exigidos para locação? Aqui é diferente! Com experiência no mercado imobiliário, nós encontramos o seu lugar e resolvemos tudo com facilidade e rapidez.
          </p>
          <p className='max-w-[480px] mb-8'>
            Entre em contato agora com (nome da imobiliária) e verá como é fácil alugar! Vem com a gente!
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt="Banner" />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;
