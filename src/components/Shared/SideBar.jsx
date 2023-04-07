import React, { useEffect, useState } from 'react'
import { getAllColor, getAllMaterial } from '../../http'

function SideBar() {

  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')


  async function fetchColor() {
    try {
      const res = await getAllColor()
      setColor(res.data.colors)
    } catch (error) {
      console.log(error)
    }

  }

  async function fetchMaterial() {
    try {
      const res = await getAllMaterial()
      setMaterial(res.data.material)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchColor()
    fetchMaterial()
  }, [])
  return (
    <div>
      <div className='text-[16px] font-extrabold mb-[32px]'>Filter</div>
      <div className='text-[16px] mb-[8px]'>Materials</div>
      <div className='text-[16px] font-extrabold mb-[8px] cursor-pointer w-fit'>All</div>
      {
        material && material?.length > 0 && material.map((item, index) => (
          <div className='text-[16px] hover:font-extrabold mb-[8px] cursor-pointer w-fit'>{item.name}</div>
        ))
      }



      <div className='text-[16px] mb-[8px] mt-[32px]'>Colors</div>
      <div className='text-[16px] font-extrabold  mb-[8px] cursor-pointer w-fit'>All</div>
      {
        color && color?.length > 0 && color.map((item, index) => (
          <div className='text-[16px] hover:font-extrabold mb-[8px] cursor-pointer w-fit'>{item.name}</div>
        ))
      }
    </div>
  )
}

export default SideBar
