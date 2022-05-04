import Link from "next/link";

const Carousel = ({ title, cards }) => {
    return (
        <div className="carouselWrapper flex flex-col my-8">
            <div className="carouselTopper flex items-center">
                <h1 className="mb-1 mr-3">{title}</h1>
                <h1 className="mb-1 text-slate-400 text-sm">View all</h1>
            </div>
            <div className="carousel overflow-x-auto w-full flex flex-nowrap snap-x snap-mandatory">
                {cards.map((card) => {
                    // generate the poseter path for the card
                    const fullPosterPath = `https://image.tmdb.org/t/p/original${card.poster_path}`;
                    // figure out what the type of media is
                    const mediaType = card.title ? 'movie' : 'series';
                    return (
                        <Link href={`/${mediaType}/${card.id}`}>
                            <div
                                className="card rounded-lg overflow-hidden mr-4 shrink-0 w-32 bg-cover relative snap-start"
                                key={card.id}>
                                <img src={fullPosterPath} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
