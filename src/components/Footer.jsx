import React from 'react'

import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="max-h-[640px] mt-8 p-8 text-white bg-black mx-auto">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[350px] uppercase py-4">
          <div>
            <h2 className="font-bold">Suporte</h2>
            <ul>
              <li className="text-sm py-2">Centro de ajuda</li>
              <li className="text-sm py-2">Contate-nos</li>
              <li className="text-sm py-2">Status da API</li>
              <li className="text-sm py-2">Documentação</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Informações</h2>
            <ul>
              <li className="text-sm py-2">Sobre nós</li>
              <li className="text-sm py-2">Carreiras</li>
              <li className="text-sm py-2">Investir</li>
              <li className="text-sm py-2">Jurídico</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[350px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
              </div>
              <p className="text-center">Inscreva-se para receber mais notícias</p>
              <div className="py-4">
                <form>
                  <input className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email" placeholder="Digite seu e-mail" />
                  <button className="bg-button text-btnText px-2 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">Inscrever-se</button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-2xl">
                <AiOutlineInstagram />
                <FaTwitter />
                <FaFacebookF />
                <RiLinkedinFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Copyright &copy; {year} Paulo Araújo. Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer