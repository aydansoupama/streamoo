
import Navbar from "@/components/Navbar";
import HomeMovieSlider from "@/components/HomeMovieSlider";
import HomeTVShow from "@/components/HomeTVShow";

export default function Home() {
    return (
        <>
            <Navbar/>

            <main>
                <article>
                    <section className="upcoming">
                        <div className="container">
                            <div className="flex-wrapper">
                                <div className="title-wrapper">
                                    <p className="section-subtitle">Online Streaming</p>
                                    <h2 className="h2 section-title">Upcoming Movies</h2>
                                </div>

                                <ul className="filter-list">
                                    <li>
                                        <button className="filter-btn">Movies</button>
                                    </li>
                                    <li>
                                        <button className="filter-btn">TV Shows</button>
                                    </li>
                                    <li>
                                        <button className="filter-btn">Anime</button>
                                    </li>
                                </ul>
                            </div>

                            <HomeMovieSlider />
                        </div>
                    </section>
                    <section className="tv-series">
                        <div className="container">
                            <p className="section-subtitle">Best TV Series</p>
                            <h2 className="h2 section-title">World Best TV Series</h2>

                            <HomeTVShow />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}