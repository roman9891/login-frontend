import {useContext} from 'react'
import {appContext} from './appContext'

export const Welcome = props => {
    const {user, setUser} = useContext(appContext)
    
    return(
        <div>
            <div>
                {`Welcome, ${user.username}`}
            </div>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>

    )
}