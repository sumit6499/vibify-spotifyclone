
import {ForgetPassPage, Home,Login,SignUp} from './component/pages'
import { Routes,Route } from 'react-router-dom'
import Header from './component/layout/Header'

export default function App() {
  return (
    <>
    <div className="app">
      <Routes>
        <Route exact path='*' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/password-reset' element={<ForgetPassPage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </>
  )
}
