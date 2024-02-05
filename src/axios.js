import axios from "axios";
 /* creating baseurl*/
 const instance=axios.create({
    baseURL:`https://api.themoviedb.org/3`,
 });
 export default instance;