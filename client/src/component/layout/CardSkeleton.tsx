

function CardSkeleton() {
  
  return (
    <div className='music_container relative bg-[#000000] p-3 max-w-[150px] min-h-[200px] w-full  rounded-lg animate-pulse' >
    <div className="img_container rounded-lg bg-[#181818] w-full h-28 overflow-hidden ">
    </div>
   
    <h4 className='mt-2 text-sm'></h4>
    <article className=' text-xs w-[70%] bg-[#181818] mt-3 h-4 rounded-md'>
    </article>
    <article className=' text-xs w-full bg-[#181818] rounded-md h-6 mt-3 mb-8'>
    </article>
  </div>
  )
}



export default CardSkeleton
