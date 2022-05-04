import { fetchSeriesData } from "../../util/api";

export default function SeriesPage({ seriesData }) {
    const backdropPath = `https://image.tmdb.org/t/p/original${seriesData.backdrop_path}`;
    const posterPath = `https://image.tmdb.org/t/p/original${seriesData.poster_path}`;
    return (
        <div className="seriesPage w-screen relative">
            <div className="seriesPageBackdrop fixed top-16">
                <img src={backdropPath} />
            </div>
            <div className="seriesPageContent p-6 mt-56 relative bg-black rounded-t-3xl">
                <div className="seriesPageHeader flex justify-between">
                    <img src={posterPath} className="w-2/5" />
                    <h1 className="font-black grow">{seriesData.name}</h1>
                </div>
                <div className="section my-4">
                    <h1 className="font-bold uppercase mb-1">
                        {seriesData.tagline}
                    </h1>
                    <p>{seriesData.overview}</p>
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
    const seriesData = await fetchSeriesData(id);
    return {
        props: {
            seriesData,
        },
    };
}
