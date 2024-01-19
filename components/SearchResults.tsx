import {useEffect, useState} from "react";
import Genre from "@/components/Genre";
import Image from "next/image";

export default function SearchResults({searchQuery}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let url = "https://api.themoviedb.org/3/search/movie?query=" + searchQuery + "&include_adult=false&language=en-US&page=1";
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQwZTljYTgyMmU2M2E2OWY5NmU0ZDViNDg4YzU0YyIsInN1YiI6IjY1Njk5OTEwZWVlMTg2MDExZTFlZWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19NjR6wx0pN5xjErkHUX-t0Ifs8xw9L4XgjAAI_nz1M'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results.filter((movie) => {return movie.backdrop_path != null}))
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <ul className="movies-list">
            {movies.map((serie) => (
                <li key={serie.id}>
                    <div className="movie-card">

                        <a href={`/movie/details/${serie.id}`}>
                            <figure className="card-banner">
                                <Image src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`} width={500} height={500} className={"flex justify-center items-center text-center"} alt="No poster" />
                            </figure>
                        </a>

                        <div className="title-wrapper">
                            <a href={`/movie/details/${serie.id}`}>
                                <h3 className="card-title">{serie.title}</h3>
                            </a>

                            <time>{serie.release_date}</time>
                        </div>

                        <div className="card-meta">
                            <Genre content={serie}/>
                            <div className="badge badge-outline">
                                {serie.popularity >= 1000 ? (serie.popularity / 1000).toFixed(1) + "k" : Math.round(serie.popularity)}
                            </div>

                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <data>{serie.vote_average}/10</data>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}