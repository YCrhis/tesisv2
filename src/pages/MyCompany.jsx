import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { showCompany } from "../services/companies";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './styles/mycompany.scss';

import { deleteEnterprise } from "../services/companies";

import { useSelector } from "react-redux";
import { selectCompany } from "../features/userSlice";

import { useState } from "react";
import { useEffect } from "react";

const MyCompany = (props) => {

    const history = useHistory();

    const user = useSelector(selectCompany);
    console.log(user.id)

    const id = user.id;

    const [data, setData] = useState();

    const deleteEnterprice = async () => {
        var option = window.confirm("¿Desea eliminar la empresa?");
        /* if (option == true) {
            const data = await deleteEnterprise(id);
            console.log(data)
            window.localStorage.removeItem('idEnterprice')
            window.localStorage.setItem('hasEnterprise', false)
            history.push('/')
        } */
    }

    const loadData = async () => {
        const response = await showCompany({ id: id })
        console.log(response.data[0], 'este es mi king')
        setData(response.data[0])
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <Header />
            <div className="container__loadCompany">
                {data &&
                    <>
                        <div
                            className="left__sectionLoadCompany"
                            style={{ backgroundImage: `url(${data.image})` }}
                        >
                            {/* <img src={data.image} alt="" /> */}
                        </div>
                        <div className="right__sectionLoadCompany">
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <div className="right__info">
                                <h4>Redes Sociales</h4>
                                <ul>
                                    <li><i className="fab fa-facebook-f"></i>Facebook: <span> {data.facebook}</span></li>
                                    <li><i className="fab fa-instagram"></i>Instagram: <span> {data.instagram} </span></li>
                                    <li><i className="fab fa-youtube"></i>Youtube: <span>{data.youtube}</span></li>
                                    <li><i className="fab fa-linkedin"></i>Linkedin: <span>{data.linkedin}</span></li>
                                </ul>
                            </div>
                            <div className="right__info">
                                <h4>Información General</h4>
                                <ul>
                                    <li><i className="fas fa-briefcase"></i>Trabajadores: <span> {data.workers}</span></li>
                                    <li><i className="fas fa-wifi"></i>Link de tu sitio web: <span> {data.webPage} </span></li>
                                </ul>
                            </div>
                            <button className="button__eliminar" onClick={deleteEnterprice}>Eliminar empresa</button>
                        </div>
                    </>
                }

            </div>
            <Footer />
        </>
    )
}
export default MyCompany