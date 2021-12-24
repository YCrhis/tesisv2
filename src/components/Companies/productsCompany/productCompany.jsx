import React, { useEffect, useState } from 'react'
import ProductCard from '../../Product/productCard/ProductCard'
import Loader from '../../loader/Loader'
import styled from 'styled-components'

import { enterpriseProducts } from '../../../services/products'

function ProductCompany() {

    const [info, setInfo] = useState([])
    const [load, setLoad] = useState(true)

    /* seEffect(() => {
        getProducts()
    }, []) */

    /* const getProducts = async () => {
        const response = await fetch(exampleReq);
        const data = await response.json()
        setInfo(data.hits)
    } */

    const loadData = async () => {
        const id = window.localStorage.getItem('idEnterprice')
        const response = await enterpriseProducts(id);
        console.log(response.data)
        setInfo(response.data)
        setLoad(null)
    }

    useEffect(() => {
        loadData()
    }, [])

    if (load) {
        return (
            <Loader />
        )
    }

    return (
        <ProductCompanyContainer>
            {info == "" ?
                <h3>Aun no hay productos en la empresa :(</h3>
                :
                info.map(infos => (
                    <ProductCard
                        key={infos._id}
                        name={infos.name}
                        description={infos.description}
                        img={infos.images}
                        id={infos._id}
                        price={infos.price}
                    />
                ))
            }
        </ProductCompanyContainer>
    )
}

const ProductCompanyContainer = styled.div`
    width:80%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    align-items:center;
    @media screen and (max-width: 900px) {
        width:90%;
        grid-template-columns:repeat(2,1fr);
    }
    @media screen and (max-width: 650px){
        grid-template-columns:repeat(1,1fr);
    }
`

export default ProductCompany
