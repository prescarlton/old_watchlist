import moment from "moment";
import { fetchMovieCreditsData, fetchMovieData } from "../../util/api";

export default function MoviePage({ movieData, castData }) {
    const fullBackdropPath = `url('https://image.tmdb.org/t/p/original${movieData.backdrop_path}')`;
    const fullPosterPath = `https://image.tmdb.org/t/p/original${movieData.poster_path}`;
    const headerBackdropStyle = {
        backgroundImage: fullBackdropPath,
    };
    const headerStyling = {
        backgroundImage: "linear-gradient(to bottom,transparent,#010916)",
    };
    const releaseYear = moment(movieData.release_date).year();
    return (
        <div className="moviePage w-screen">
            <div
                className="header relative h-72 overflow-hidden bg-cover bg-center"
                style={headerBackdropStyle}>
                <div
                    className="moviePageTitle absolute bottom-0 w-full px-6 py-4 flex items-start justify-between"
                    style={headerStyling}>
                    <div className="movieInfo">
                        <h1 className="font-black text-2xl max-w-xs sticky">
                            {movieData.title}
                        </h1>
                        <div className="flex gap-x-4">
                            <h2>{releaseYear}</h2>
                            <h2 className="">{movieData.vote_average}</h2>
                        </div>
                        <div className="flex gap-x-4">
                            {movieData.video && (<h2 className="rounded-md bg-slate-400 px-3">trailer</h2>)}
                            <h2 className="">{movieData.runtime} min</h2>
                        </div>
                    </div>
                    <div className="moviePoster w-1/4 rounded-md overflow-hidden">
                        <img src={fullPosterPath} />
                    </div>
                </div>
            </div>
            <div className="moviePageContent p-6">
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">{movieData.tagline}</h1>
                    <p>{movieData.overview}</p>
                </div>
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">Where to Watch</h1>
                    <p>Coming Soon!</p>
                </div>
                {/* TODO: MAKE THIS TABBED */}
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">Cast</h1>

                </div>
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">Cast</h1>
                    {castData.map(castMember => {
                        return <h2>{castMember.name}</h2>
                    })}
                </div>
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">Details</h1>
                </div>
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">Genres</h1>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    const movieData = await fetchMovieData(id);
    const creditsData = await fetchMovieCreditsData(id);
    return {
        props: {
            movieData,
            castData: creditsData.cast,
            crewData: creditsData.crew
        },
    };
}
