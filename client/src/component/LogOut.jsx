import { useAuth0 } from '@auth0/auth0-react'

function LogOut({className}) {
    const {logout}=useAuth0();
    return (
    <div>
        <button className={className} onClick={()=>logout({logoutParams: {returnTo:window.location.origin}})}>Log Out</button>
    </div>
    )
}

export default LogOut
