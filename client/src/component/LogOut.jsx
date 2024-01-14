import { useAuth0 } from '@auth0/auth0-react'

function LogOut() {
    const {logout}=useAuth0();
    return (
    <div>
        <button className='bg-white text-black px-3 py-1 rounded-full mr-1 hover:font-semibold hover:scale-105 ' onClick={()=>logout({logoutParams: {returnTo:window.location.origin}})}>Log Out</button>
    </div>
    )
}

export default LogOut
