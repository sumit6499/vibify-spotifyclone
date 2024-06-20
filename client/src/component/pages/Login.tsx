import {useAuth0} from '@auth0/auth0-react'

function Login({classes}:{classes:string}) {
  const { loginWithRedirect} = useAuth0();

  return (
    <div>
      <button className={classes} onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  )
}

export default Login

