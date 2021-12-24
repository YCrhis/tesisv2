import React from 'react'
import CompanyInformation from '../components/Companies/information/CompanyInformation'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCompany from '../components/Companies/productsCompany/productCompany'

import styled from 'styled-components'

import { showCompany } from '../services/companies'
import { useState } from 'react'

function CompyInfo(props) {

    const id = props.match.params.id;

    const [data, setData] = useState();

    const loadData = async () => {
        const response = await showCompany(id)
        setData(response.data)
        console.log(response)
    }

    useState(() => {
        loadData()
    }, [])

    return (
        <div>
            <Header />
            <CompanyInformation
                data={data}
            />
            <ContainerCompany>
                <h1>Dale un Vistazo a los Productos</h1>
            </ContainerCompany>

            <ProductCompany />
            <Footer />
        </div>
    )
}

const ContainerCompany = styled.div`
    text-align:center;
    margin:3rem auto;
`

export default CompyInfo
