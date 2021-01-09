import {Login} from './Login'
import {Welcome} from './Welcome'
import {useContext} from 'react'
import { appContext } from './appContext'

export const LoginContainer = props => {
    const {user} = useContext(appContext)

    return(
        <div>
            {user ? <Welcome/> : <Login/>}
        </div>
    )
}