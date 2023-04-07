import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Icons/Cart'
import { useSelector } from 'react-redux'

function Header() {
  const Navtool = [
    { name: "All Products", link: "/" },
    { name: "Featured Products", link: "/" },
  ]

  const [open, setOpen] = useState(false)
  const {cart} = useSelector((item)=>item.cartData)
  // console.log(cart)
  

  return (
    <>
      <div className='bg-gradient-to-t from-transparent to-black'>

        <div className='container m-auto z-50'>
          <div className='grid grid-cols-2 lg:grid-cols-12 py-[31px]'>
            <div className='col-span-2 lg:col-span-2 flex justify-between'>
              <Link href='/'>
                <div className='text-[18px] font-bold'>
                  <span className='text-[#BFBEBE]'>RIGHT</span><span className='text-white'>FIT.COM</span>
                </div>
              </Link>
              <div className='lg:hidden z-10 mx-10 my-auto' onClick={() => setOpen(!open)}>
                {!open ?
                  <svg
                    className="stroke-primary w-14 cursor-pointer stroke-black"
                    viewBox="0 0 512 512"
                  >
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    ></path>
                  </svg>
                  :
                  <svg
                    className="stroke-primary w-14 cursor-pointer stroke-black"
                    viewBox="0 0 512 512"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M368 368L144 144m224 0L144 368"
                    ></path>
                  </svg>}
              </div>
            </div>

            <div className={`${!open && 'hidden'} z-20 lg:block  col-span-2 lg:col-span-10 bg-white text-white sm:bg-transparent mx-3 lg:mx-0 lg:my-auto`}>
              <ul className="lg:flex lg:justify-end text-center lg:mx-10 gap-20">
                {Navtool.map((link) => (
                  <li key={link.name} className=" hover:font-bold my-6 lg:my-auto hover:text-primary text-2xl lg:text-lg">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
                }
                <div className='flex gap-7 my-auto'>
                  <Cart />
                  <span className=' text-[14px]'>
                  {cart.length}
                  </span>

                </div>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
