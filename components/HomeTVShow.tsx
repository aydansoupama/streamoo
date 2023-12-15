"use client";
import {useState, useEffect} from "react";
import Genre from "@/components/Genre";


export default function HomeTVShow() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        let url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQwZTljYTgyMmU2M2E2OWY5NmU0ZDViNDg4YzU0YyIsInN1YiI6IjY1Njk5OTEwZWVlMTg2MDExZTFlZWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19NjR6wx0pN5xjErkHUX-t0Ifs8xw9L4XgjAAI_nz1M'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data =>
                setSeries(data.results)
            )
            .catch(error => console.error('Error fetching series:', error));
    }, []);

    return (
        <ul className="movies-list">
            {series.map((serie) => (
                <li key={serie.id}>
                    <div className="movie-card">

                        <a href={`/serie/details/${serie.id}`}>
                            <figure className="card-banner">
                                <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="Poster" />
                            </figure>
                        </a>

                        <div className="title-wrapper">
                            <a href={`/serie/details/${serie.id}`}>
                                <h3 className="card-title">{serie.name}</h3>
                            </a>

                            <time>{serie.first_air_date.substring(0, 4)}</time>
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