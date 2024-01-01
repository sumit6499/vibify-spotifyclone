import  { useState,useRef} from 'react'
import { artist1,play,pause,nextSong,previousSong, random,loop,volume, mute} from '@/assets'


function Player() {
  
  const animate=useRef('');
  

  const [music,setMusic]=useState({
    volume:50,
    songRange:0,
  });
  const [isPlay,setIsPlay]=useState(false);

  const handlClick=()=>{
    setIsPlay(prev=>!prev)
  }
  
  const handleChange=(e)=>{
   setMusic({...music,[e.target.name]:parseInt(e.target.value)});
  console.log(music)
  }

  const handleVolume=()=>{
    setMusic({...music,volume:0})
    console.log(music)
  }

  return (
    
    <footer className='absolute player_animation sm:flex  flex-1 bg-[#000000]  w-full bottom-0 p-3   items-center  z-10 min-h-[50px]  rounded-tl-lg rounded-tr-lg ' ref={animate} >
      <div className="music_card flex gap-2 items-center w-full ">
        <div className="img_cotainer w-10 h-10 rounded-full overflow-hidden">
          <img src={artist1} alt="card" className='object-contain animate-spin'/>
        </div>

        <div className="song_info ">
            <p className='text-xs font-bold'>Baby</p>
            <p className='text-xs text-[#878787]'>Justin Bieber,Ludacris</p>
        </div>
      </div>

        <div className="music_container flex-col  mx-3 w-full m-4 sm:m-0 max-w-[auto]">
          <div className="img_container flex  cursor-pointer gap-10 justify-center">
          <img src={random} alt="random" className='object-contain filter invert w-5 sm:w-6 cursor-pointer '/>
            <img src={previousSong} alt="previous" className='filter invert w-5 sm:w-6 object-contain '/>
            <img src={isPlay?pause:play} alt="play" className='filter invert hover:scale-110 object-contain w-5 sm:w-6' onClick={handlClick}/>
            <img src={nextSong} alt="next" className='filter invert object-contain w-5 sm:w-6'/>
           <img src={loop} alt="loop" className='object-contain filter invert w-5  sm:w-6 cursor-pointer'/>
          </div>
          <input type="range" name="songRange" id="songRange" className='block accent-[#1ed760] mt-3 w-[calc(100%-60px)] sm:w-full h-1' onChange={handleChange}/>
        </div>
        <div className="music_container flex gap-3 w-full items-center justify-center">
            <img src={music.volume>1?volume:mute} alt="volume" className='w-5 sm:w-6 filter invert' onClick={handleVolume}/>
           <input type="range" name="volume" id="volume" min={0} max={100} className='accent-[#1ed760] h-1 sm:h-1.5'
           onChange={handleChange}/>
        </div>
    </footer>
  )
}
export default Player
