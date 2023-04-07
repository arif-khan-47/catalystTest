import React, { useEffect, useState } from 'react'
import { getColor, getMaterial } from '../../http'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../Redux/Slice/cartSystem'
import { toast } from 'react-hot-toast'

function ProductCard({ name, price, materialId, image, colorId, data }) {

  const dispatch = useDispatch()
  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')
  const [isHover, setIsHover] = useState(false)

  async function fetchColor(colorCode) {
    try {
      const res = await getColor(colorCode)
      setColor(res.data.color.name)
    } catch (error) {
      console.log(error)
    }

  }

  async function fetchMaterial(materialCode) {
    try {
      const res = await getMaterial(materialCode)
      setMaterial(res.data.material.name)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchColor(colorId)
    fetchMaterial(materialId)
  }, [])


  function addIntoCart(data) {
    try {
      dispatch(AddCart(data));
      toast.success('Item Added To Cart')

    } catch (error) {
      console.log(error)

    }
  }




  return (
    <>
      <div onClick={() => addIntoCart(data)} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className='cursor-pointer relative h-[442px] w-full'>
        {
          isHover ?
            <>
              <div className='absolute flex left-0 right-0 top-0 bottom-0 bg-black bg-opacity-[80%]'>
                <div className='m-auto text-white text-[14px] font-semibold'>Add To Cart</div>
              </div>
            </>
            :
            null
        }
        <img src={image} className='h-full w-full' alt="" />
      </div>
      <div className='text-black text-[18px] mt-[16px]'>
        {name}
      </div>
      <div className='text-black flex text-[14px] gap-x-3'>
        <div className='text-[#4F4733] font-semibold uppercase'>
          {color}
        </div>
        <div className='uppercase'>
          {material}
        </div>
      </div>
      <div className='text-[#5A112B] text-[14px] mt-[16px]'>
        INR {price}
      </div>
    </>
  )
}

export default ProductCard
