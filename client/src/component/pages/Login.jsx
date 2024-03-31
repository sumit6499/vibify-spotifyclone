import {useAuth0} from '@auth0/auth0-react'
import PropTypes from 'prop-types'

function Login({classes}) {
  const { loginWithRedirect} = useAuth0();

  return (
    <div>
      <button className={classes} onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  )
}

export default Login

Login.propTypes={
  classes:PropTypes.string
}
