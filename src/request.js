const APIKEY="e9d3243e0715d23c030a359d8341d516";
const requests={
    fetchTrending:`/trending/all/day?api_key=${APIKEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
   fetchPopular:   `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
   fetchActionMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&&language=en-US&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&language=en-US&&with_genres=99`

}
export default requests;