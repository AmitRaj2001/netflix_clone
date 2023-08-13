import React, { useState,useEffect } from 'react'
import "./Home.scss";
import axios from 'axios';
import {BiPlay} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';

const apiKey = "077f3e476793d449a4bb1d7dc535f57d";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const topRated = "top_rated";
const nowPlaying = "now_playing";

const popular = "popular";
const imgUrl="https://image.tmdb.org/t/p/original";

const Card = ({img})=>(
    <img  className='card' src={img} alt="cover" />
)


const Row = ({title,arr=[]}) =>(
    <div className='row'>
        <h2>{title}</h2>
        <div>
        {
            arr.map((item,index)=>(
                <Card key= {index} img = {`${imgUrl}/${item.poster_path}`}/>
            ))
        }
        </div>
    </div>
)

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRaterdMovies, settopRaterdMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(()=>{
        const fetchUpcoming = async() => {
            const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(results);
        };
        fetchUpcoming()
        const fetchPopular = async() => {
            const {data: {results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setPopularMovies(results);
        };
        fetchPopular()
        const fetchTopRated = async() => {
            const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            settopRaterdMovies(results);
        };
        fetchTopRated()

        const fetchNowPlaying = async() => {
            const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setNowPlayingMovies(results);
        };
        fetchNowPlaying()

    },[]);



  return (
    <div>
        <section className='home'>
            <div className='banner' style={{backgroundImage: popularMovies[3]? `url(${`${imgUrl}/${popularMovies[3].poster_path}`})`:"black"}}>
                {popularMovies[3] && <h1>{popularMovies[3].original_title}</h1>}
                {popularMovies[3] && <p>{popularMovies[3].overview}</p>}
                <div>
                <button> <BiPlay/> Play </button>
                <button> My List <AiOutlinePlus/></button>
                </div>
            </div>

            <Row title={"Recently Viewed"} arr = {nowPlayingMovies}/>
            <Row title={"Upcoming Movies"} arr ={upcomingMovies}/>
            <Row title={"Popular"} arr = {popularMovies}/>
            <Row title={"Top Rated"} arr = {topRaterdMovies}/>

        </section>
    </div>
  )
}

export default Home
