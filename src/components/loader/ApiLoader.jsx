import './loader.scss'

const ApiLoader = () => {
    return (
        <>
            <div className="second__loader">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <h3>Cargando información</h3>
                <div className="rain-error">
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                </div>
            </div>
        </>

    )
}
export default ApiLoader