
import {ForgetPassPage, Home,Login,SignUp} from './component'
import { Routes,Route, useLocation } from 'react-router-dom'
import Header from './component/Header'

export default function App() {
  let location=useLocation();  // get current page route
  return (
    <>
    <div className="app">
      {location.pathname!= '/' && <Header/>}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/password-reset' element={<ForgetPassPage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </>
  )
}
