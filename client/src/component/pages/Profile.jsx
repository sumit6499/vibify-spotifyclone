import PropTypes from 'prop-types'
function Profile({avatar}) {
    
  return (
    <div className=' min-w-[32px] w-full h-[32px] border-[#ede8e8] border-2 rounded-full object-contain overflow-hidden cursor-pointer hover:border-[#1ed760]'>
      <img src={avatar} alt="" className="w-8 h-8"/>
    </div>
  )
}

export default Profile

Profile.propTypes={
    avatar:PropTypes.object,
}