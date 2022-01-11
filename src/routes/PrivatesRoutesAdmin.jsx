import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const PrivatesRoutesAdmin = ({ component: Component, ...rest }) => {

    const user = useSelector(selectUser)

    return (
        <Route {...rest}>
            {user && user.role === 'ADMIN' ?
                <Component />
                :
                <Redirect
                    to="/"
                />
            }
        </Route>
    )
}
export default PrivatesRoutesAdmin