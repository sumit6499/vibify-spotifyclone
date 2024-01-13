import  { useState, useRef} from 'react'
import { play,pause,nextSong,previousSong, random,loop,volume, mute} from '@/assets'
import { useSelector,useDispatch } from 'react-redux';
import {togglePlayPause} from '../redux/musicApiSlice'
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner'

function Player() {

  const audioRef=useRef(null);
  const dispatch=useDispatch();
  const {activeSong,url,artist,isPlaying}=useSelector(state=>state.players);
  const{isAuthenticated}=useAuth0()

  const [music,setMusic]=useState({
    volume:50,
    songRange:0,
  });


  if(audioRef.current){
    if(isPlaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause();
    }
  }


  const handlePlayPause=()=>{
    if(!isAuthenticated){
      return toast.warning("Login to play music")
    }
    if(isPlaying){
        dispatch(
          togglePlayPause(
            {songStatus:false}
          )
      )
    }else{
      dispatch(
        togglePlayPause(
          {songStatus:true}
          )
        )
    }
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
    
    <footer className={`absolute sm:flex player_animation   flex-1 bg-[#000000]  w-full bottom-0 p-3   items-center  z-10 min-h-[50px]  rounded-tl-lg rounded-tr-lg ` } >
      <audio src={url?url:"https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-5.mp3"} ref={audioRef}></audio>
      <div className="music_card flex gap-2 items-center w-full ">
        <div className="img_cotainer w-10 h-10 rounded-full overflow-hidden">
          <img src={artist.image?artist.image:"https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/250x250-000000-80-0-0.jpg"} alt="card" className='object-contain animate-spin'/>
        </div>

        <div className="song_info ">
            <p className='text-xs font-bold'>{activeSong?activeSong:'Baby'}</p>
            <p className='text-xs text-[#878787]'>{artist.artistName?artist.artistName:"Justin Bieber,Ludacris"}</p>
        </div>
      </div>

        <div className="music_container  flex-col mx-0 sm:mx-3 w-full m-4 sm:m-0 max-w-[auto]">

          <div className="img_container flex  cursor-pointer gap-10 justify-center">
            <img src={random} alt="random" className='object-contain filter invert w-7 cursor-pointer '/>
            <img src={previousSong} alt="previous" className='filter invert w-6 object-contain '/>
            <img src={isPlaying?pause:play} alt="play" className='filter invert hover:scale-110 object-contain w-6' onClick={handlePlayPause}/>
            <img src={nextSong} alt="next" className='filter invert object-contain w-6'/>
           <img src={loop} alt="loop" className='object-contain filter invert w-7 cursor-pointer'/>
          </div>

          <div className='progress_bar flex  items-center gap-2 mt-3'>
            <span>0:00</span>   
            <input type="range" name="songRange" id="songRange" className='block accent-[#1ed760] w-[calc(100%-60px)] sm:w-full h-1.5' onChange={handleChange}/>
            <span>1:50</span>
          </div>


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
