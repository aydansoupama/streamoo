"use client"
import {useEffect, useState} from "react";

export default function DetailsPage(props: any) {
    const [content, setContent] = useState({})
    const [currentPlatform, setCurrentPlatform] = useState()

    useEffect(() => {
        let url = 'https://api.themoviedb.org/3/movie/' + props.params.slug;
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQwZTljYTgyMmU2M2E2OWY5NmU0ZDViNDg4YzU0YyIsInN1YiI6IjY1Njk5OTEwZWVlMTg2MDExZTFlZWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19NjR6wx0pN5xjErkHUX-t0Ifs8xw9L4XgjAAI_nz1M'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    let platforms = ["Netflix", "Canal +", "Disney +", "Amazon Prime", "OCS", "Paramount", "Apple TV", "CrunchyRoll", "ADN"]

    useEffect(() => {
        if ( currentPlatform === undefined ) {
            setCurrentPlatform(platforms[Math.round(Math.random() * platforms.length)])
        }
    }, [currentPlatform])

    return (
        <main>
            <article>
                <section className="movie-detail">
                    <div className="container">

                        <figure className="movie-detail-banner">
                            <img src={`https://image.tmdb.org/t/p/w500/` + content.poster_path} alt={`${content.title} poster `} />
                            <button className="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>
                        </figure>

                        <div className="movie-detail-content">

                            {/*<p className="detail-subtitle">New Episodes</p>*/}

                            <h1 className="h1 detail-title">
                                {content.title}
                            </h1>

                            <div className="meta-wrapper">

                                <div className="badge-wrapper">
                                    <div className="badge badge-fill uppercase">{content.original_language}</div>

                                    <div className="badge badge-outline">HD</div>
                                </div>

                                <div className="ganre-wrapper">
                                    <a href="#">Action</a>
                                    <a href="#">Adventure</a>
                                </div>

                                <div className="date-time">

                                    <div>
                                        <ion-icon name="calendar-outline"></ion-icon>

                                        <time dateTime="2021">{content.release_date}</time>
                                    </div>

                                    <div>
                                        <ion-icon name="time-outline"></ion-icon>

                                        <time dateTime="PT115M">{content.runtime} min</time>
                                    </div>

                                </div>

                            </div>

                            <p className="storyline">
                                {content.overview}
                            </p>

                            <div className="details-actions">

                                <button className="share">
                                    <ion-icon name="share-social"></ion-icon>

                                    <span>Share</span>
                                </button>

                                <div className="title-wrapper">
                                    <p className="title">{currentPlatform}</p>
                                    <p className="text">Streaming Channels</p>
                                </div>

                                <button className="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>

                                    <span>Watch Now</span>
                                </button>

                            </div>

                            <a href={content.homepage} className="download-btn">
                                <span>Download</span>

                                <ion-icon name="download-outline"></ion-icon>
                            </a>

                        </div>

                    </div>
                </section>
            </article>
        </main>
    )
}
