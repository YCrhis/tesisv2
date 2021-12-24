import React from 'react'

import TextField from '@material-ui/core/TextField';

/* style */
import './login.scss'

function LoginCompany() {

    return (

        <div class="login">
            <div className="login__container">
                <div className="login__form">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                    <h3>Iniciar Sesión</h3>
                    <h6>(Empresa)</h6>
                    <p>Ingrese su información</p>
                    <div className="container__inputs">
                        <TextField label="Email" variant="outlined" fullWidth margin="dense" />
                        <TextField label="Contraseña" variant="outlined" fullWidth margin="dense" />
                        <button>Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCompany
