import React from 'react'
import { Link } from 'react-router-dom'
import Visa from '../Icons/Visa'




function Footer() {
  const tab = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/" },
    { name: "Features Products", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "About Us", link: "/" },
  ]


  return (
    <>
      <div className='bg-[#1E1E1E] pt-[45px] pb-[64px]'>
        <div className='container m-auto'>

          <div className='text-[18px] font-bold pb-[26px]'>
            <Link to={'/'}>
              <span className='text-[#BFBEBE]'>RIGHT</span><span className='text-white'>FIT.COM</span>
            </Link>
          </div>
          <div className='grid grid-cols-5 text-black'>
            <div className='col-span-1 '>
              {tab.map((item, index) => (
                <div className='text-white mb-5 text-[14px] cursor-pointer w-fit hover:font-bold'>
                  {
                    item.name
                  }
                </div>
              ))}

            </div>

            <div className='col-span-2'>
              <span className='text-white text-[14px]'>We are a registered E-Commerce seller and we support a variety of Local and International payment modes</span>
                  {/* <div className='flex'>
                  <Visa/>
                  
                  </div> */}
                  <img className='h-[55px] w-[329px]' src="https://res.cloudinary.com/dgyudczza/image/upload/v1680854018/zezo.in/paymentIcons_itazsw.png" alt="" />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
            <span className='text-white text-[14px]'>Website protected by</span>
            <img className='h-[53px] w-[220px] mt-8' src="https://res.cloudinary.com/dgyudczza/image/upload/v1680854139/zezo.in/image_2_ymkoyw.png" alt="" />           
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer