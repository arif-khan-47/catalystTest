import React from 'react'
import Header from '../Shared/Header'

function Hero() {
    return (
        <div className="h-[40rem] bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dgyudczza/image/upload/v1680854058/zezo.in/muscular-model-man-in-khaki-t-shirt-on-background-2022-06-06-21-32-14-utc_1_ssczzr.png')]">
            <Header />
            <div className=' container m-auto'>
                <div className='mx-[146px] mt-[121px] leading-none text-white'>
                    <div className='text-[60px]' style={{ fontWeight: 900 }}>Latest Styles</div>
                    <div className='text-[20px] mb-[18px]'>At Yesterday’s Prices</div>
                    <button className='px-[15px] py-[12px] text-[16px] font-semibold bg-[#CA4022] rounded-lg'>BROWSE ALL STYLES</button>
                </div>

            </div>

        </div>
    )
}

export default Hero



