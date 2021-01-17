import {useContext} from 'react'
import {appContext} from './appContext'
import {Button, Container2} from './Style'

export const Welcome = props => {
    const {user, setUser} = useContext(appContext)
    
    return(
        <Container2>
            <div>
                {`Welcome, ${user.username}`}
            </div>
            <Button onClick={() => setUser(null)}>Logout</Button>
        </Container2>

    )
}