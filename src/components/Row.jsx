import React, { useEffect, useState } from 'react'
import axios from "../axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseImageUrl=`https://image.tmdb.org/t/p/original/`;
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        const fetchData=async ()=>{
            const request=await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            
        }
        fetchData();
    },[fetchUrl])
    const opts={
      height:'390',
      width:'100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const handleTrailer=(movie)=>{
if(trailerUrl){
  setTrailerUrl('');
}else{
  movieTrailer(movie?.title||movie?.original__title||"").then((url)=>{
const urlParams=new URLSearchParams(new URL(url).search);
setTrailerUrl(urlParams.get('v'));
  }).catch((error)=>{
    console.log(error);
  })
}
    }
  return (
    <div className='row'>
<h2 className='title'>{title}</h2>
<div className="row__poster">
{movies.map((movie)=>{
  console.log(movie);
  
  return <img onClick={()=>{handleTrailer(movie)}} key={movie.id} src={isLargeRow?`${baseImageUrl}${movie.poster_path}`:`${baseImageUrl}${movie.backdrop_path
  }`} className={`row__poster-image ${isLargeRow&&"row__poster-largerImage"}`} alt='movies__poter'/>
  
})}
</div> 
{trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row