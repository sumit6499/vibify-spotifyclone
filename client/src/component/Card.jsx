import '../App.css'
import { artist2,playButton } from '@/assets'


function Card() {
  return (
    <div className='music_container relative bg-[#101010] p-3 max-w-[150px] min-h-[200px] w-full h-full rounded-lg hover:bg-[#181818] transition-colors'>
      <div className="img_container rounded-lg overflow-hidden">
        <img src={artist2} alt="" className=' object-contain'/>
      </div>
      <div className="playButton absolute right-6 top-[100px] bg-[#1ed760] w-[35px] h-[35px]  rounded-full flex opacity-0 justify-center transition-all cursor-pointer">
        <img src={playButton} alt="play" className=' object-contain w-5 filter invert' />
      </div>
      <h4 className='mt-2 text-sm'>{"Today's"} Top Hits</h4>
      <article className=' text-xs text-[#878787]'>
        New music from Turbo and Gunna,Nav and kid..
      </article>
    </div>
  )
}

export default Card
