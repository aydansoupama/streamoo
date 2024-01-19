export default function Genre({content}) {
    const genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
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
        37: 'Western',
        10759: 'Acture',
        10762: 'Kids',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-tasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics'
    };

    const genreNames = content.genre_ids
        .map((genreId) => genres[genreId])
        .slice(0, 2);

    if (!content.genre_ids || content.genre_ids.length === 0) {
        return null;
    }

    return (
        <>
            {genreNames.map((genreName) => (
                <div className={"badge badge-outline"} key={genreName}>
                    <h1 key={genreName}>{genreName}</h1>
                </div>
            ))}
        </>
    );

}