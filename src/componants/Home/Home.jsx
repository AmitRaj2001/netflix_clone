import React, { useState,useEffect } from 'react'
import "./Home.scss";
import axios from 'axios';

const apiKey = "077f3e476793d449a4bb1d7dc535f57d";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
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

    useEffect(()=>{
        const fetchUpcoming = async() => {
            const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(results);
        };
        fetchUpcoming()

    },[]);



  return (
    <div>
        <section className='home'>
            <div className='banner'></div>

            <Row title={"Upcoming Movies"} arr ={upcomingMovies}/>
            <Row title={"Popular on Netflix"}/>
            <Row title={"Recently Viewed"}/>
            <Row title={"Movies"}/>
            <Row title={"My List"}/>
            <Row title={"Tv Shows"}/>


        </section>
    </div>
  )
}

export default Home
