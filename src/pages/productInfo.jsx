import React from 'react'

import styled from 'styled-components'
/* components */
import SelectProduct from '../components/Product/productSelect/SelectProduct'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CardSwiper from '../components/sliders/CardSwiper'

import { showProduct } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductInformation = (props) => {

    const id = props.match.params.id;

    const [info, setData] = useState();

    console.log(id)

    const loadData = async () => {
        const response = await showProduct(id)
        setData(response.data)
        console.log(response)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header />
            <SelectProduct
                data={info}
            />
            <ContainerProduct>
                <h2>Productos Recomendados</h2>
            </ContainerProduct>
            <CardSwiper />
            <Footer />
        </>
    )
}
const ContainerProduct = styled.div`
    text-align:center;
`


export default ProductInformation