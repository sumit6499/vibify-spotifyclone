import CardSkeleton from '../layout/CardSkeleton';
import { Card } from '.';
import {RootObject} from '../../types/dazzerApiInterface'

interface SearchInterface{
    data:RootObject|undefined,
    searchText:string,
    isFetching:boolean,
    isError:boolean
}

function Search({data,searchText,isFetching,isError}:SearchInterface) {


    return (
        <>
            <h1 className='text-2xl font-extrabold'>{isFetching?`Searching result for ${searchText}...`:`Search Result: ${searchText}`}</h1>

            <div className="musicCards mt-4 grid grid-cols-2 min-h-screen place-items-center  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
            {isFetching&&[1,2,3,4,5,6,7,8,9,10].map((data)=><CardSkeleton key={data}/>)}
            {data?.data.map((data,index)=><Card key={index} artists={data.artist.name} title={data.album.title} artistImg={data.artist.picture_medium}  song={data.preview}/>)}
            {isError&&'error occured'}
            </div>
        </>
  )
}

export default Search

