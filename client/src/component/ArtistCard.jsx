
import { artist1 } from '@/assets'

function ArtistCard() {
  return (
    <>
    <div className='max-w-[50px] w-full h-[50px] border rounded-full object-contain overflow-hidden cursor-pointer'>
      <img src={artist1} alt="" />
    </div>
    </>
    
  )
}


export default ArtistCard
