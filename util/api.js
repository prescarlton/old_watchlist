const fetchMovieDB = async (route) => {
    let resp = await fetch(`https://api.themoviedb.org/3/${route}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_API_TOKEN}`,
        },
    });
    const data = await resp.json();
    return data;
};

export const fetchTrending = (type = "all", timePeriod = "week") => {
    return fetchMovieDB(`trending/${type}/${timePeriod}`);
};

export const fetchMovieData = (id) => {
    return fetchMovieDB(`movie/${id}`);
};
export const fetchSeriesData = id => {
    return fetchMovieDB(`tv/${id}`);
}

export const fetchMovieCreditsData = (id) => {
    return fetchMovieDB(`movie/${id}/credits`);
}