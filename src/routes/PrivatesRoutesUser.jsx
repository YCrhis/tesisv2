import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const PrivatesRoutes = ({ component: Component, ...rest }) => {

    const user = useSelector(selectUser)

    return (
        <Route {...rest}>
            {user ?
                <Component />
                :
                <Redirect
                    to="/"
                />
            }
        </Route>
    )
}
export default PrivatesRoutes