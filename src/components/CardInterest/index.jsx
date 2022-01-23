import './Interest.scss'

const CardInterest = ({ productName, productDescription, users, id }) => {
    return (
        <div className="cardContainer__interest">
            <div className="interest__productName">
                <h5>{productName}</h5>
                <p>{productDescription}</p>
            </div>
            <div className="interest__productPerson">
                {users.length === 0
                    ?
                    <div className='interest__productNoone'>
                        <h4>Sin Interesados</h4>
                        <img
                            src="https://img.freepik.com/free-vector/waiting-concept-illustration_114360-5941.jpg?size=338&ext=jpg&ga=GA1.2.1547543392.1641081600"
                            alt="waiting"
                            width={200}
                        />
                    </div>
                    :

                    users.map((i, index) => (
                        <div className="productPerson__eachInformation" key={index + 1}>
                            <p>{i.name}</p>
                            <span><i className="fas fa-phone-volume"></i> {i.phoneNumber}</span><br />
                            <span><i className="far fa-envelope"></i> {i.email}</span>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default CardInterest