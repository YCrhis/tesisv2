import Header from '../components/header/Header'
import CardInterest from '../components/CardInterest'

import './styles/ProductInterested.scss'

const ProducInterested = () => {
    return (
        <>
            <Header />
            <div className='container__interest'>
                <h2>¿A quienes les intesera tus productos?</h2>
                <div className="container__productInterest">
                    <CardInterest />
                    <CardInterest />
                </div>
            </div>
        </>
    )
}
export default ProducInterested