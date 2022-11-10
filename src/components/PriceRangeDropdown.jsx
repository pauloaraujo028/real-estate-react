import React, { useState, useContext } from 'react'

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'Faixa de Preço (todos)',
    },
    {
      value: 'R$ 10.000 - 13.000',
    },
    {
      value: 'R$ 13.000 - 16.000',
    },
    {
      value: 'R$ 16.000 - 19.000',
    },
    {
      value: 'R$ 19.000 - 22.000',
    },
    {
      value: 'R$ 1.000 - 3.000',
    },
    {
      value: 'R$ 3.000 - 4.000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px ]'>Selecione a faixa</div>
        </div>
        {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown;