import React from 'react'
import Row from "./components/Row";
import Banner from './components/Banner';
import Nav from "./components/Nav"
import requests from './request';
const App = () => {
  return (
    <div className='app'>
     <Nav/>
      <Banner/> 
<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
<Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
<Row title="Popular" fetchUrl={requests.fetchPopular}/>
<Row title="Action" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
<Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
<Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
<Row title="Documentry" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App