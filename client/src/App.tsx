
import {ForgetPassPage, Home,Login,SignUp} from './component/pages'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <div className="app">
      <Routes>
        <Route  path='*' element={<Home/>}/>
        <Route  path='/login' element={<Login classes=''/>}/>
        <Route  path='/password-reset' element={<ForgetPassPage/>}/>
        <Route  path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </>
  )
}
