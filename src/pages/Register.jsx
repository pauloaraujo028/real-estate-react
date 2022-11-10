import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai"

import RegisterImg from '../assets/img/register.png'

const Register = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        {/* Right side */}
        <div className='hidden flex-1 lg:flex justify-center items-start'>
          <img src={RegisterImg} alt="Banner" />
        </div>

        <div className='xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <div className="w-full mx-auto min-h-[600px] px-0 py-0 md:px-10 md:py-20 lg:py-0">
            <h1 className="text-2xl font-bold">Registre-se</h1>
            <form>
              <div className="my-4">
                <label>Nome</label>
                <div className="my-2 w-full relative rounded-2xl shadow-xl">
                  <input
                    className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" />
                  <AiOutlineUser className="absolute right-2 top-5 text-gray-400" />
                </div>
              </div>
              <div className="my-4">
                <label>Email</label>
                <div className="my-2 w-full relative rounded-2xl shadow-xl">
                  <input
                    className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="email" />
                  <AiOutlineMail className="absolute right-2 top-5 text-gray-400" />
                </div>
              </div>
              <div className="my-4">
                <label>Senha</label>
                <div className="my-2 w-full relative rounded-2xl shadow-xl">
                  <input
                    className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="password" />
                  <AiFillLock className="absolute right-2 top-5 text-gray-400" />
                </div>
              </div>
              <div className="my-4">
                <label>Confirmar a Senha</label>
                <div className="my-2 w-full relative rounded-2xl shadow-xl">
                  <input
                    className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="password" />
                  <AiFillLock className="absolute right-2 top-5 text-gray-400" />
                </div>
              </div>
              <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Criar Conta</button>
            </form>
            <div className='flex w-full justify-center items-center py-4 text-base'>
              <p className="">Já tem uma conta?<Link to="/login" className='text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 w-full transition'>Entrar</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register