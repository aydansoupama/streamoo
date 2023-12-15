"use client";
import {useState, useEffect} from "react";
import Genre from "@/components/Genre";

export default function HomeMovieSlider() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQwZTljYTgyMmU2M2E2OWY5NmU0ZDViNDg4YzU0YyIsInN1YiI6IjY1Njk5OTEwZWVlMTg2MDExZTFlZWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19NjR6wx0pN5xjErkHUX-t0Ifs8xw9L4XgjAAI_nz1M'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);


    return (
        <ul className="movies-list  has-scrollbar">
            {movies.map((movie) => (
                <li key={movie.id}>
                    <div className="movie-card">

                        <a href={`/movie/details/${movie.id}`}>
                            <figure className="card-banner">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} />
                            </figure>
                        </a>

                        <div className="title-wrapper">
                            <a href={`/movie/details/${movie.id}`}>
                                <h3 className="card-title">{movie.title}</h3>
                            </a>

                            <time dateTime={movie.release_date}>{movie.release_date.substring(0, 4)}</time>
                        </div>

                        <div className="card-meta">
                            <Genre content={movie}/>

                            <div className="badge badge-outline">
                                {movie.popularity >= 1000 ? (movie.popularity / 1000).toFixed(1) + "k" : Math.round(movie.popularity)}
                            </div>


                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <data>{movie.vote_average}/10</data>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
