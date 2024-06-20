import '../../App.css'
import {logo,home,search,room,topArtist,playlist,artist,menu,cross} from '../../assets'
import { FormField,Player ,ArtistCard,Loader,Login,LogOut,Profile,Search} from '.'
import {  ChangeEvent, useState } from 'react'
import {useGetAllSongsQuery} from '../../redux/dezzerApi'
import { useAuth0 } from '@auth0/auth0-react';
import Discover from './Discover';
import {Routes,Route,useLocation,NavLink} from 'react-router-dom'
import Room from './Room'


interface List{
  links:string,
  icon:string,
  handleClick?:()=>void,
}

interface Auth0user{
  picture?:string,
  name?:string,
  email?:string
}


const List=({links,icon,handleClick}:List)=>{
  return(
    <div className="flex capitalize items-center gap-2 py-1.5  m-4 " onClick={handleClick}>
    <img src={icon} alt="" className='w-6 filter invert '/>
    {links}
  </div>
  )
}




const Home = () => {
  
  const [searchText,setSearchText]=useState('');
  const [expanded,setExpanded]=useState(false);
  const {isAuthenticated,user}=useAuth0<Auth0user>();
  const {data,isFetching,isError}=useGetAllSongsQuery(searchText?searchText:'Pop');
  const location=useLocation();


  const links=[
    {name:'Home',to:'/',icon:home},
    {name:'Search',to:'/search',icon:search},
    {name:'Room',to:'/room',icon:room},
    {name:'Top Artist',to:'/artist',icon:topArtist},

  ];

  
  const handleChange=(
    e:ChangeEvent<HTMLFormElement>
  )=>{
    setSearchText(e.target.value);
  }

  const handleMenuBar=()=>{
    setExpanded(prev=>!prev)
  }

  const linksList=links.map(({name,icon,to},index)=>{
  return( 
    <NavLink 
      to={to} 
      key={index}
    >
      <li className={`list-none   font-semibold transition sm:hover:text-[#1ed760] cursor-pointer text-white  rounded-md hover:bg-[#1a1a1a] ${location.pathname===to?'bg-[#1a1a1a] sm:text-[#1ed760]':''}`}>
        <List links={name} icon={icon} />
      </li>
    </NavLink>
  )
  })

  
  
  return (
    <>
    <section className='relative w-full overflow-hidden max-h-[100dvh] bg-black p-2 flex gap-2 z-0'>
     <aside className={`sidebar absolute sm:relative flex z-10 sm:z-0  bg-[#000000] sm:bg-[#1a1a1a] min-w-[180px]  min-h-screen flex-col items-center rounded-md transition-all  px-4 ${expanded?'fade-in sm:animate-none ml-[0px] sm:m-0 ':'fade-out sm:animate-none ml-[-399px] sm:m-0'} gap-4`}>

        <div className="sidebar_closer sm:hidden w-10 object-contain ml-44 hover:cursor-pointer" onClick={()=>setExpanded(prev=>!prev)}>
          <img src={cross} alt="" className='invert '/>
        </div>

        <div className="logo w-[100px] object-contain  cursor-pointer ">
          <img src={logo} alt="Vibify"/>
        </div>

          <p className='text-white text-sm text-center font-bold'>Music Streaming App</p>
        <div className="links mt-4 w-full sm:p-0">
          {linksList}
        </div>
          {isAuthenticated&&user&&(
               <div className="user-info mt-16 w-full p-3 flex sm:hidden bg-[#1a1a1a] gap-2 rounded-xl  ">
               <img src={user.picture} alt="user" className='w-10 h-10 rounded-full'/>
               <div className="">
                 <span className='font-semibold'>{isAuthenticated?user.name:''}</span>
                 <p className='text-sm '>{isAuthenticated?user.email:''}</p>
               </div>
           </div>
          )}
        
        
        <div className="login sm:hidden w-full ">
          {isAuthenticated?
            <LogOut className={'text-black bg-white border hover:scale-105  hover:font-semibold w-full py-1.5 ' }/>
            : <Login classes={'text-black bg-white border hover:scale-105  hover:font-semibold w-full py-1.5  ' }/>
          }
        </div>
     </aside>
  
     <section className="musicCards  bg-[#121212]  w-full p-2 rounded-md  overflow-y-auto ">
        <div className="search flex gap-6 items-center  sm:justify-center" >
        <div className='block sm:hidden'>
          <div className="menu_container hover:cursor-pointer" onClick={handleMenuBar}>
            <img src={menu} alt="" className='invert p-0.5 '/>
          </div>
        </div>
        <FormField 
        type={'text'}
        name={'search'}
        id={'searchField'}
        placeholder={'Search Songs/Genres/Artist'}
        handleChange={handleChange}
        />
        </div>
        <main className='m-4 bg-[#242424] p-4 rounded-xl'>
          <Routes>
              <Route  path='/' element={<Discover searchText={searchText}/>}/>
              <Route  path='/search' element={<Search data={data} isFetching={isFetching} searchText={searchText} isError={isError}/>}/>
              <Route  path='/room' element={<Room/>}/>
              <Route  path='/room/:roomId' />
          </Routes>
        </main>
     </section>
    
      <section className='hidden md:flex flex-col  max-w-[250px]  w-full gap-3'>
        <aside className='w-full bg-[#121212]  rounded-md'>
          <div className='redirect_access flex justify-end items-center mt-2 '>
              <div className='mr-3 text-white hover:text-[#1ed760] hover:underline transition'>
              {isAuthenticated&&user?.picture&&<Profile avatar={user.picture}/>}</div>
            <div className="log_in-wrapper  flex justify-center max-w-[90px] w-full ">
              {!isAuthenticated&&(<Login classes={'bg-white text-black px-3 py-1 rounded-full mr-2 hover:scale-105  hover:font-semibold  '}/>)}
              {isAuthenticated&&<LogOut  className={'bg-white text-black px-3 py-1 rounded-full mr-1 hover:font-semibold hover:scale-105 ' }/>}
            </div>
          </div>
            
            <div className="library flex items-center justify-center gap-1 mt-3" >
            <img src={playlist} alt="" className='w-6 filter invert'/>
            <h2 className='text-[#878787] inline-block font-semibold '>Your Library</h2>
            </div>
            <div className="playlist m-2 bg-[#242424] p-3 rounded-lg">
              <p className='text-white text-center'>Your Playlists</p>
              <div className="w-full bg-white rounded-md">
                <p className='text-black text-center m-3'>🖤 Favourite Songs</p>
              </div>
              <div className="w-full bg-white rounded-md">
                <p className='text-black text-center m-3'> Hindi Songs</p>
              </div>
              <div className="w-full bg-white rounded-md">
                <p className='text-black text-center m-3'>English Songs</p>
              </div>
            </div>
        </aside>

        <aside className='w-full h-full  bg-[#121212] rounded-md p-2 '>
          <div className="artist_header flex justify-center items-center object-contain mb-3 ">
            <img src={artist} alt="artist" className='w-6 m-1 filter invert '/>
            <h2 className='text-xl text-[#878787] font-semibold'>Top Artist</h2>
          </div>

          <div className="artist_content overflow-x-scroll bg-[#242424] flex gap-2 justify-center p-3  rounded-xl border">
          {isFetching&&<Loader/>}
          {data&&data.data.map((data,index)=><ArtistCard key={index} artistImg={data.artist.picture_medium} />)}
          </div>

        </aside>
      </section>

      <Player/>
    </section>
    </>
  )
}



export default Home

