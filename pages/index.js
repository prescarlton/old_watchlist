import Carousel from "../components/molecues/Carousel";
import HeaderCarousel from "../components/molecues/HeaderCarousel";
import { fetchTrending } from "../util/api";

export default function Home({ trendingAll, trendingMovies, trendingTv }) {
    return (
        <div className="home w-screen overflow-x-hidden p-6">
            <HeaderCarousel cards={trendingAll} />
            <Carousel 
                title='Trending Movies'
                cards={trendingMovies}
            />
            <Carousel 
                title='Trending TV'
                cards={trendingTv}
            />
        </div>
    );
}

export async function getStaticProps() {
    const allData = await fetchTrending();
    const movieData = await fetchTrending("movie");
    const tvData = await fetchTrending("tv");
    return {
        props: {
            trendingAll: allData.results,
            trendingMovies: movieData.results,
            trendingTv: tvData.results,
        },
        revalidate: 10,
    };
}
