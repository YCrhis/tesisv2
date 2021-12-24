/* import { useState } from 'react';
import { useHistory } from 'react-router';
import { auth, provider } from '../firebase'

import { registerUser } from '../services/login'
import { useSelector, useDispatch } from 'react-redux';

import { selectUserName, selectUserEmail, selectUserPhoto, selectGoogleId, selectPhoneNumber, setSignOutState } from '../features/user/userSlice';

const Register = () => {

    const [data, setData] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    const name = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const image = useSelector(selectUserPhoto);
    const googleId = useSelector(selectGoogleId)
    const phoneNumber = useSelector(selectPhoneNumber);


    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then(() => {
                setData(true)
            })
            .catch((error) => {
                dispatch(setSignOutState())
            })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await registerUser({ name, email, googleId, image, phoneNumber });
        if (response.ok == false) {
            alert('tu ya estas registrado')
            dispatch(
                setSignOutState()
            )
            console.log('pero que paso mi loco')
        }
        history.push('/login')

    }


    return (
        <>
            <div class="login">
                <div class="login__container">
                    <div class="login__leftSection">
                        <div class="logo">
                            <h3>Go App</h3>
                        </div>
                        <div class="login__text">
                            <h2>Registrate ahora !!!!</h2>
                            <p>Cuenta de Google</p>
                        </div>

                    </div>

                    <div class="login__rightSection">
                        <h3>Crear cuenta con ...</h3>
                        <button onClick={handleAuth}><i class="fab fa-google"></i>Google</button>
                        {
                            data &&
                            <button onClick={handleSubmit}>Continuar</button>
                        }
                        <div class="login__advantages">
                            <p>Una vez creada la cuenta, debe realizar login con la nueva cuenta</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register */