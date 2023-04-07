import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/HomePage/Hero'
import { products } from '../http'
import ProductCard from '../components/Cards/ProductCard'
import SideBar from '../components/Shared/SideBar'

function Home() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProduct() {
        try {
            const res = await products()
            setData(res?.data?.products)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [])


    return (
        <div>
            <Layout hideHeader>
                <Hero />
                <div className='grid grid-cols-5 m-auto container my-10'>
                    <div className='col-span-1'>
                        <SideBar/>
                    </div>
                    <div className='col-span-4'>
                        <div className='grid grid-cols-3 gap-10'>
                            {
                                data && data?.length > 0 && data?.map((item) =>
                                    <div className='col-span-1' key={item.id}>
                                        <ProductCard name={item.name} price={item.price} materialId={item.materialId} image={item.image}  colorId={item.colorId} data={item}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default Home
