import {Login} from './Login'
import {Welcome} from './Welcome'
import {useContext} from 'react'
import { appContext } from './appContext'
import {Container} from './Style'

export const LoginContainer = props => {
    const {user} = useContext(appContext)

    return(
        <Container>
            {user ? <Welcome/> : <Login/>}
        </Container>
    )
}