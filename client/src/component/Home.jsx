import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArtistCard,Card } from '.'
import {logo,home,search,room,topArtist,playlist,artist} from '../assets'
import { FormField } from '.'
import '../App.css'

const List=({links,icon})=>{
  return(
  <div className="flex capitalize items-center gap-2 m-4 ">
    <img src={icon} alt="" className='w-6 filter invert '/>
    {links}
  </div>
  )
}



const Home = () => {

  const [searchText,setSearchText]=useState('');

  const handleChange=(e)=>{
    setSearchText(e.target.value);
    console.log(searchText)
  }

  const links=[
    {name:'Home',icon:home},
    {name:'Search',icon:search},
    {name:'Room',icon:room},
    {name:'Top Artist',icon:topArtist},

  ];

  const linksList=links.map(({name,icon},index)=>{
  return <li key={index} className='list-none text-[#878787] font-semibold transition hover:text-[#1ed760] cursor-pointer '>
    <List links={name} icon={icon} /></li>
  })


  return (
    <>
    <section className='w-full overflow-hidden h-[100vh] bg-black p-2 flex gap-2'>

     <aside className='sidebar hidden sm:flex bg-[#1a1a1a] max-w-[150px] w-full flex-col items-center rounded-md '>
        <div className="logo w-[100px] object-contain mt-8 cursor-pointer">
          <img src={logo} alt="Vibify" className=''/>
        </div>
          <p className='text-sm text-center font-bold'>Music Streaming App</p>
        <div className="links mt-4">
          {linksList}
        </div>
     </aside>
  
     <section className="musicCards bg-[#121212]  w-full p-2 rounded-md overflow-y-auto ">
        <div className="search flex justify-center">
        <FormField 
        type={'text'}
        name={'search'}
        id={'searchField'}
        placeholder={'Search songs'}
        handleChange={handleChange}
        />
        </div>

        <main className='m-4 bg-[#242424] p-4 rounded-xl'>
          <h1 className='text-2xl font-extrabold'>Discover</h1>

          <div className="musicCards mt-4 grid grid-col-1  place-items-center xs:grid-col-2  sm:grid-cols-3 lg:grid-col-4 gap-3 ">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </main>
     </section>
    
      <section className='hidden sm:flex flex-col  max-w-[250px]  w-full gap-3'>
        <aside className='w-full bg-[#121212]  rounded-md'>
          <div className='redirect_access flex justify-end items-center '>
            <Link to={'/signup'}>
              <span className='mr-3 text-white hover:text-[#1ed760] hover:underline transition'>
              Sign up</span>
            </Link>
            <Link to={'login'}>
              <button className='bg-white text-black px-3 py-1 rounded-full  hover:font-semibold transition' >
                    Log in
              </button>
            </Link>
          </div>
            
            <div className="library flex items-center justify-center gap-1 mt-3" >
            <img src={playlist} alt="" className='w-6 filter invert'/>
            <h2 className='text-[#878787] inline-block font-semibold '>Your Library</h2>
            </div>
            <div className="playlist m-2 bg-[#242424] p-3 rounded-lg">
              <p className='text-center'>Your Playlists</p>
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

        <aside className='w-full h-full bg-[#121212] rounded-md p-2 '>
          <div className="artist_header flex justify-center items-center object-contain mb-3">
            <img src={artist} alt="artist" className='w-6 m-1 filter invert '/>
            <h2 className='text-xl text-[#878787] font-semibold'>Top Artist</h2>
          </div>

          <div className="artist_content bg-[#242424] flex gap-2 justify-center p-3  flex-wrap rounded-xl">
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
          </div>

        </aside>
      </section>

    </section>
    </>
  )
}

export default Home

