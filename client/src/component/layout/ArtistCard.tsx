
function ArtistCard({artistImg}:{artistImg:string}) {
  return (
    <>
    <div className='min-w-[50px] w-full h-[50px] border rounded-full object-contain overflow-hidden cursor-pointer' >
      <img src={artistImg} alt="" />
    </div>
    </>
    
  )
}




export default ArtistCard
