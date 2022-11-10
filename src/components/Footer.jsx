import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto'>
        Copyright &copy; {year} Paulo Araújo. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer