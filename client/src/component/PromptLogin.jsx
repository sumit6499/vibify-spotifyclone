
import { useSelector } from 'react-redux'
import {Login} from '../component'

function PromptLogin() {
    const {artist}=useSelector(state=>state.players)
  return (
    <main className=' min-h-screen min-w-[100%] absolute   z-10  text-[#ffff] flex justify-center  items-center '>
        <div className='popUp max-w-[800px] max-h-[300px] border flex p-8 rounded-lg gap-x-20  items-center bg-[#000000]'>
            <div className='object-contain w-64 h-64 border'>
                <img src={artist} alt="" className=''/>
            </div>
            <div className='border w-[100%] h-64 flex items-center flex-col gap-8'>
                <h1 className='text-2xl lg:text-3xl  text-center font-extrabold border'>Start listening with a free Vibify account</h1>
                <p className='text-[#a7a7a7] text-sm text-center mt-6 '>
                    Enter your 
                    <b> Vibify email address </b>
                    , or the 
                    <b> password </b>
                    that you used to register.
                    {"We'll"} send you an email verify account.
                </p>
                <Login classes={'bg-[#1ed760] text-black text-lg font-semibold p-20 py-1 rounded-full mr-2 hover:scale-105  hover:font-semibold  '}/>
            </div>
        </div>
    </main>
  )
}

export default PromptLogin
