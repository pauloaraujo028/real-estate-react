import React from 'react'
import { AiFillLock, AiOutlineMail } from "react-icons/ai"
import { Link } from 'react-router-dom'

import LoginImg from '../assets/img/login.png'

const Login = () => {
  return (
    <div className='container'>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Login</h1>
        <form>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl" type="email" />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Senha</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl" type="password" />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-xl">Entrar</button>
        </form>
        <p className="my-4 flex justify-center">Não tem uma conta? <Link to="/signup" className="text-accent mx-1 uppercase">Inscreva-se</Link></p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={LoginImg} alt="Banner" />
      </div>
    </div>
  )
}

export default Login