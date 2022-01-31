import React from 'react'

/* components */
import SelectProduct from '../components/Product/productSelect/SelectProduct'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CardSwiper from '../components/sliders/CardSwiper'

import { getInterestedProduct, listProducts } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const ProductInformation = (props) => {

    const id = props.match.params.id;

    const newId = parseInt(id)
    const [data, setData] = useState();
    const [isInterested, setIsInterested] = useState(false);
    const [order, setOrder] = useState();

    const user = useSelector(selectUser);

    const loadData = async () => {
        const response = await listProducts(0, { id: newId })
        await getInterested();
        setData(response.data.products[0])
    }

    const getInterested = async () => {
        const res = await getInterestedProduct({
            productId: newId,
            userId: user?.id
        });
        if (res.data == null) {
            setIsInterested(false);
        }else{
            setIsInterested(true);
            setOrder(res.data)
        }
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
                isInterested={isInterested}
                setIsInterested={setIsInterested}
                setOrder={setOrder}
                order={order}
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