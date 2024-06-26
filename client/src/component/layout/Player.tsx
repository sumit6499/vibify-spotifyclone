import  { useState, useRef, useEffect, ChangeEvent} from 'react'
import { play,pause, random,loop,volume, mute,repeatOne,forward} from '../../assets'
import { useSelector,useDispatch } from 'react-redux';
import {togglePlayPause} from '../../redux/musicApiSlice'
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner'
import {getMinuteSecond} from '../../utils/getMinuteSecond'

function Player() {

  const audioRef=useRef<HTMLAudioElement>(null);
  const dispatch=useDispatch();
  //@ts-ignore
  const {activeSong,url,artist,isPlaying}=useSelector((state)=>state.players);
  const{isAuthenticated}=useAuth0()
  const [value,setValue]=useState(0)
  const [repeat,setRepeat]=useState(false)

  const [music,setMusic]=useState({
    volume:50,
    songRange:0,
  });

  const {minute,second}=getMinuteSecond(audioRef.current?String(audioRef.current.duration):"0")
  

  useEffect(()=>{
    const volume=music.volume/100
    if(audioRef.current){
      audioRef.current.volume=volume
    }

  },[music.volume])

  useEffect(()=>{
      if(audioRef.current){
        audioRef.current.currentTime=music.songRange
      }
  },[music.songRange])


  if(audioRef.current){
    if(isPlaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause();
    }
  }

  const onEnded=()=>{
    dispatch(
      togglePlayPause({songStatus:false})
    )
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
  
  const getTime=()=>{
    const {second}=getMinuteSecond(audioRef.current?String(audioRef.current.currentTime):"0")
    return second
  }


  const handleChange=(
    e:ChangeEvent<HTMLInputElement>
  )=>{
   setMusic({...music,[e.target.name]:parseInt(e.target.value)});
  }

  const handleVolume=()=>{
    setMusic({...music,volume:0})
  }

  const handleForward=()=>{
    if(audioRef.current){
      audioRef.current.currentTime=Number(audioRef.current.currentTime)+5
    }
  }
  const handleBackward=()=>{
    if(audioRef.current){
      audioRef.current.currentTime=Number(audioRef.current.currentTime)-5
    }
  }
  const handleUpdate=()=>{
    if(audioRef.current){
      setValue(audioRef.current.currentTime)
    }
  }

  return (
    
    <footer className={`absolute sm:flex player_animation  flex-1 bg-[#000000]  w-full bottom-0 p-3   items-center  z-2 min-h-[50px]  rounded-tl-lg rounded-tr-lg  sm:m-0` } >
      <audio 
        src={url?url:"https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-5.mp3"}
        onTimeUpdate={handleUpdate}
        onEnded={onEnded}
        loop={repeat}
        ref={audioRef}
      >
      </audio>
      <div className="music_card flex gap-2 items-center w-full ">
        <div className="img_cotainer w-10 h-10 rounded-full overflow-hidden">
          <img src={artist.image?artist.image:"https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/250x250-000000-80-0-0.jpg"} alt="card" className='object-contain animate-spin'/>
        </div>

        <div className="song_info ">
            <p className='text-white text-xs font-bold'>{activeSong?activeSong:'Baby'}</p>
            <p className='text-xs text-[#878787]'>{artist.artistName?artist.artistName:"Justin Bieber,Ludacris"}</p>
        </div>
      </div>

        <div className="music_container  flex-col  mx-0 sm:mx-3 w-full m-4 sm:m-0 max-w-[auto]">

          <div className="img_container flex  cursor-pointer gap-10 justify-center">
            <img src={random} alt="random" className='object-contain filter invert w-7 cursor-pointer '/>
            <img src={forward} alt="previous" className='filter invert w-6 object-contain rotate-180' onClick={handleBackward}/>
            <img src={isPlaying?pause:play} alt="play" className='filter invert hover:scale-110 object-contain w-6' onClick={handlePlayPause}/>
            <img src={forward} alt="next" className='filter invert object-contain w-6' onClick={handleForward}/>
           <img src={repeat?loop:repeatOne} alt="loop" className='object-contain filter invert w-7 cursor-pointer' onClick={()=>setRepeat(prev=>!prev)}/>
          </div>

          <div className='progress_bar flex  items-center gap-2 mt-3'>
            <span>0:{getTime()<10?`0${getTime()}`:getTime()}</span>   
            <input type="range" name="songRange" id="songRange" value={value}  min={"0"} max={isNaN(second)?"0":second} className='block accent-[#1ed760] w-[calc(100%-60px)] sm:w-full h-1.5' onChange={handleChange}/>
            <span>{isNaN(minute)?'0':minute}:{isNaN(second)?'00':second}</span>
          </div>


        </div>
        <div className="music_container flex gap-3 w-full items-center justify-center">
            <img src={music.volume>1?volume:mute} alt="volume" className='w-5 sm:w-6 filter invert' onClick={handleVolume}/>
           <input type="range" name="volume" id="volume" min={"0"} max={"100"}  step={"1"} value={music.volume}  className='accent-[#1ed760] h-1 sm:h-1.5'
           onChange={handleChange}/>
        </div>
    </footer>
  )
}
export default Player
