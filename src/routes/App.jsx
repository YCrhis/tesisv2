import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

/* private Routes */
import PrivatesRoutesUser from './PrivatesRoutesUser'
import PrivatesRoutesAdmin from './PrivatesRoutesAdmin'
/* pages */
import Index from '../pages/index'
import Product from '../pages/products'
import Error from '../pages/Error'
import Companies from '../pages/Companies'
import productInfo from '../pages/productInfo'
import LoginUser from '../components/login/Login'
import CompyInfo from '../pages/CompyInfo'
import RegisterProd from '../pages/RegisterProd'
import CompanyRegister from '../pages/CompanyRegister'
import UserRegister from '../pages/UserRegister'
import CompanyValidation from '../pages/CompanyValidation'
import UserActions from '../pages/UserActions'
import CompanyActions from '../pages/CompanyActions'
import EnterpriseList from '../pages/EnterpriseList'
import EnterprisePassed from '../pages/EnterprisePassed'

import HomeAdmin from '../pages/HomeAdmin'

/* darkmode */
import { Toggle } from '../components/toggle/Toggle'
import { GlobalStyle, lightTheme, darkTheme } from '../components/stylesGeneral/globalStyles'
import { useDarkMore } from '../components/stylesGeneral/useDarkMode'
import { ThemeProvider } from 'styled-components'


/* bot helper */
import Bot from '../components/Bot'

import Questions from '../pages/Questions'
// import Register from '../pages/Register'
import Post from '../pages/Post'
import MyPost from '../pages/MyPost'
import EachPost from '../pages/EachPost'
import MyCompany from '../pages/MyCompany'
import Profile from '../pages/Profile'
import LoginAdmin from '../components/login/LoginAdmin'
import UserList from '../pages/UserList'
import EnterpriseDisable from '../pages/EnterpriseDisable'
import Myproduct from '../pages/Myproducts'
import ProducInterested from '../pages/ProductInterested'
import EnterpriseListV2 from '../pages/EnterpriseListV2'
import EditProduct from '../pages/editProduct'


const App = () => {

    const [theme, toggleTheme] = useDarkMore();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <Bot />
            <BrowserRouter>
                <AnimatePresence>
                    <Switch>
                        <Route exact path="/" component={Index}></Route>
                        <Route exact path="/usuario/acciones" component={UserActions}></Route>
                        <Route exact path="/login/usuario" component={LoginUser}></Route>
                        <Route exact path="/login/administrador" component={LoginAdmin}></Route>
                        <Route exact path="/registro/usuario" component={UserRegister}></Route>
                        {/* <Route exact path="/registrarse" component={Register}></Route> */}
                        <Route exact path="/preguntas" component={Questions}></Route>
                        {/* routes with user */}
                        <PrivatesRoutesUser exact path="/posts" component={Post} />
                        <PrivatesRoutesUser exact path="/mis/posts" component={MyPost} />
                        <PrivatesRoutesUser exact path="/mi-perfil" component={Profile} />
                        <PrivatesRoutesUser exact path="/registro/empresa" component={CompanyRegister} />
                        <PrivatesRoutesUser exact path="/perfil/empresa" component={MyCompany} />
                        <PrivatesRoutesUser exact path="/producto/nuevo" component={RegisterProd} />
                        <PrivatesRoutesUser exact path="/empresa/productos" component={Myproduct} />
                        <PrivatesRoutesUser exact path="/productos/interesados" component={ProducInterested} />
                        {/* others */}
                        <Route exact path="/product" component={Product}></Route>
                        <Route exact path="/empresas" component={Companies}></Route>
                        <Route exact path="/empresa/perfil/:id" component={CompyInfo}></Route>

                        <Route path="/product/information/:id" component={productInfo}></Route>

                        <Route exact path="/empresa/informacion" component={CompanyValidation}></Route>

                        <Route exact path="/empresa/acciones" component={CompanyActions}></Route>

                        <Route exact path="/posts/:id" component={EachPost}></Route>

                        <Route exact path="/empresa/productos/editar/:id" component={EditProduct} />

                        {/* administrador */}
                        <PrivatesRoutesAdmin exact path="/administrador" component={HomeAdmin} />
                        <PrivatesRoutesAdmin exact path="/administrador/usuarios" component={UserList} />
                        <PrivatesRoutesAdmin exact path="/administrador/empresas/espera" component={EnterpriseList} />
                        <PrivatesRoutesAdmin exact path="/administrador/empresas/aceptados" component={EnterprisePassed} />
                        <PrivatesRoutesAdmin exact path="/administrador/empresas/desabilitadas" component={EnterpriseDisable} />

                        <PrivatesRoutesAdmin exact path="/administrador/empresas/esperaV2" component={EnterpriseListV2} />

                        <Route component={Error} />
                    </Switch>
                </AnimatePresence>

            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;