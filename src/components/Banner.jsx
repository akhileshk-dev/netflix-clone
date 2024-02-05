import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';
import "./Banner.css";
const baseImageUrl=`https://image.tmdb.org/t/p/original/`;

const Banner = () => {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            const request=await axios.get(requests.fetchTrending);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
        }
        fetchData();
    },[]);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
  return (
    <header className='banner' style={{backgroundImage:`url(${baseImageUrl}${movies.
        backdrop_path
        })`}}>
            <div className='banner__contents'>
<h1 className='banner__title'>{movies?.title||movies?.
original_title||movies?.name}</h1>
<div className='banner__buttons'>
    <button className='banner__button'>Play</button>
    <button className='banner__button'>My List</button>
</div>
<h1 className='banner__description'>{truncate(movies?.overview,150)}</h1>
</div>
<div className='fade__bottom'></div>
    </header>
  )
}

export default Banner