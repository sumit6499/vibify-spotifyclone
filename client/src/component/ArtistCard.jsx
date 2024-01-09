import PropTypes from 'prop-types'

function ArtistCard({artistImg}) {
  return (
    <>
    <div className='min-w-[50px] w-full h-[50px] border rounded-full object-contain overflow-hidden cursor-pointer' >
      <img src={artistImg} alt="" />
    </div>
    </>
    
  )
}

ArtistCard.propTypes={
  artistImg:PropTypes.string
}



export default ArtistCard
