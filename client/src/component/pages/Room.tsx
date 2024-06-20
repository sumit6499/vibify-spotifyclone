
import  { ChangeEvent, FormEvent, useState } from 'react'
import { FormField } from '.'
import { useNavigate } from 'react-router-dom'



function Room() {

    const navigate=useNavigate()

    const [roomData,setRoomData]=useState({
        fname: '',
        email: '',
        roomID: '',
    })

    const handleChange=(
        e:ChangeEvent<HTMLFormElement>
    )=>{
       setRoomData({...roomData,[e.target.name]:e.target.value})
    }

    const handleClick=(
        e:FormEvent<HTMLButtonElement>
    )=>{
        e.preventDefault()
        navigate(`/room/${roomData.roomID}`)
    }

  return (
    <section className='room p-4 min-h-screen'>
        <div className="sm:container p-8  flex  flex-col items-center ">
            <h1 className='text-white scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl  text-center'>Join Room</h1>
              <form action="" method="post" className=' flex flex-col m-3 max-w-[450px] p-5 bg-[#000000] rounded-lg'>
                <label htmlFor="fname" className='text-white text-lg '>Name</label>
                <FormField 
                    type='text' 
                    name='fname' 
                    id='fname' 
                    placeholder='Enter your name' 
                    handleChange={handleChange}
                />
                <label htmlFor="email" className='text-white mt-4'>Email</label>
                <FormField 
                    type='text' 
                    id='email' 
                    name='email'
                    placeholder='Enter your name' 
                    handleChange={handleChange}
                />
                <label htmlFor="roomID" className='text-white mt-4'>Room ID</label>
                <FormField 
                    type='text' 
                    id='roomID' 
                    name='roomID'
                    placeholder='Enter the room ID' 
                    handleChange={handleChange}
                />
                <button 
                    type='submit' 
                    className='bg-[#1ed760] text-white mt-4 h-8 rounded-lg hover:opacity-80 transition-colors mb-5'
                    onClick={handleClick}
                >
                    Join Room
                </button>

                <div className="presentation flex items-center gap-2">

                    <hr className='w-[50%]'/>
                    <span>or</span>
                    <hr className='w-[50%]'/>
                </div>

                <button 
                    type='submit' 
                    className='bg-[#1ed760] text-white mt-4 h-8 rounded-lg hover:opacity-80 transition-colors mb-4'
                    onClick={handleClick}
                >
                    Create Room
                </button>                
              </form>
        </div>
    </section>
  )
}

export default Room
