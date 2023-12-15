export default function Gender({content}) {
    const genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'SF',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    };

    const genreNames = movie.genre_ids
        .map((genreId) => genres[genreId])
        .slice(0, 2); // Limit to 2 genre names

    return (
        <>
            {genreNames.map((genreName) => (
                <div className={"badge badge-outline"}>
                    <h1 key={genreName}>{genreName}</h1>
                </div>
            ))}
        </>
    );

}