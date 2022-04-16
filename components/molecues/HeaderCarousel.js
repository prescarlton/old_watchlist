const HeaderCarousel = ({ cards }) => {
    return (
        <div className="flex flex-col">
            <h1 className="mb-1 font-bold">Trending This Week</h1>
            <div className="headerCarousel overflow-x-auto w-full flex flex-nowrap snap-x snap-mandatory">
                {cards.map((card) => {
                    // generate the backdrop path for the card
                    const fullBackdropPath = `url('https://image.tmdb.org/t/p/original${card.backdrop_path}')`;
                    const cardStyles = {
                        backgroundImage: fullBackdropPath,
                    };
                    return (
                        <div
                            className="card rounded-lg overflow-hidden mr-4 shrink-0 h-48 w-72 bg-cover relative snap-start"
                            key={card.id}
                            style={cardStyles}>
                            <div className="cardOverlay absolute w-full h-full bg-black/30 flex items-end p-4">
                                <h1 className="text-xl">
                                    {card.title || card.name}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default HeaderCarousel;
