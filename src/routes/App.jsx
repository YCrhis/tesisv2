import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* pages */
import Index from '../pages/index'
import Application from '../pages/application'
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

import HomeAdmin from '../pages/HomeAdmin'

/* darkmode */
import { Toggle } from '../components/toggle/Toggle'
import { GlobalStyle, lightTheme, darkTheme } from '../components/stylesGeneral/globalStyles'
import { useDarkMore } from '../components/stylesGeneral/useDarkMode'
import { ThemeProvider } from 'styled-components'


import Questions from '../pages/Questions'
import Register from '../pages/Register'
import Post from '../pages/Post'
import MyPost from '../pages/MyPost'
import EachPost from '../pages/EachPost'
import MyCompany from '../pages/MyCompany'


const App = () => {

    const [theme, toggleTheme] = useDarkMore();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route exact path="/application" component={Application}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route exact path="/business" component={Companies}></Route>
                    <Route exact path="/business/go/:id" component={CompyInfo}></Route>
                    <Route exact path="/product/information/:id" component={productInfo}></Route>
                    <Route exact path="/login/usuario" component={LoginUser}></Route>
                    <Route exact path="/registro/usuario" component={UserRegister}></Route>
                    <Route exact path="/registro/empresa" component={CompanyRegister}></Route>
                    <Route exact path="/registrarse" component={Register}></Route>
                    <Route exact path="/producto/nuevo" component={RegisterProd}></Route>
                    <Route exact path="/mi/empresa/:id" component={MyCompany}></Route>
                    <Route exact path="/preguntas" component={Questions}></Route>
                    <Route exact path="/empresa/informacion" component={CompanyValidation}></Route>
                    <Route exact path="/usuario/acciones" component={UserActions}></Route>
                    <Route exact path="/empresa/acciones" component={CompanyActions}></Route>
                    <Route exact path="/posts" component={Post}></Route>
                    <Route exact path="/mis/posts" component={MyPost}></Route>
                    <Route exact path="/posts/:id" component={EachPost}></Route>
                    <Route exact path="/administrador" component={HomeAdmin}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;