import { useDispatch} from 'react-redux'
import '@/App.css'
import { playButton } from '@/assets'
import {addPlaySong, togglePlayPause} from '../../redux/musicApiSlice'
import PropTypes from 'prop-types'



function Card({artists,artistImg,title,song}) {
  const dispatch=useDispatch();

  const handleClick=()=>{

      dispatch(
        addPlaySong({song:title,url:song,image:artistImg,artistName:artists})
        )
        dispatch(
          togglePlayPause({songStatus:false})
        )
    }


  return (
    <div className='music_container relative bg-[#101010] p-3 max-w-[150px] min-h-[200px] w-full h-full rounded-lg hover:bg-[#181818] transition-colors' onClick={handleClick}>
      <div className="img_container rounded-lg overflow-hidden">
        <img src={artistImg} alt="" className=' object-contain'/>
      </div>
      <div className="playButton absolute right-6 top-[100px] bg-[#1ed760] w-[35px] h-[35px]  rounded-full flex opacity-0 justify-center transition-all cursor-pointer">
        <img src={playButton} alt="play" className=' object-contain w-5 filter invert' />
      </div>
      <h4 className='mt-2 text-sm'>{title}</h4>
      <article className=' text-xs text-[#878787]'>
        New music from {artists}
      </article>
    </div>
  )
}

Card.propTypes={
  artists:PropTypes.string,
  artistImg:PropTypes.string,
  title:PropTypes.string,
  song:PropTypes.string,
}

export default Card
