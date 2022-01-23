import { useEffect } from 'react'
import Header from '../components/header/Header'
import CardInterest from '../components/CardInterest'
import { useSelector } from 'react-redux'
import { selectCompany } from '../features/userSlice'
import { getInterest } from '../services/companies'


import './styles/ProductInterested.scss'
import { useState } from 'react'

const ProducInterested = () => {

    const [data, setData] = useState();

    const company = useSelector(selectCompany);

    const loadInterested = async () => {
        const response = await getInterest(company.id)
        setData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        loadInterested()
    }, [])
    return (
        <>
            <Header />
            <div className='container__interest'>
                <h2>¿A quienes les intesera tus productos?</h2>
                <div className="container__productInterest">
                    {data?.map(i => (
                        <CardInterest
                            key={i.id}
                            productName={i.name}
                            productDescription={i.description}
                            users={i.users}
                            id={i.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProducInterested