import React from 'react'

/* components */
import SelectProduct from '../components/Product/productSelect/SelectProduct'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CardSwiper from '../components/sliders/CardSwiper'

import { listProducts } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductInformation = (props) => {

    const id = props.match.params.id;

    const newId = parseInt(id)

    const [data, setData] = useState();

    const loadData = async () => {
        const response = await listProducts(0, { id: newId })
        setData(response.data.products[0])
    }

    useEffect(() => {
        loadData()
        /* eslint-disable */
    }, [])

    return (
        <>
            <Header />
            <SelectProduct
                data={data}
            />
            <div>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 'calc(1rem + 1vw)',
                    textTransform: 'uppercase'
                }}>Tambien te puede interesar</h2>
            </div>
            <CardSwiper />
            <Footer />
        </>
    )
}

export default ProductInformation