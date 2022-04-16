const SearchSection = ({ title, list }) => {
    return (
        <div className="my-4">
            <h2 className="font-bold">{title}</h2>
            <ul>
                {list.map((item) => {
                    return (
                        <li className="w-full border-b-2 border-slate-900 py-2 text-slate-400">
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default SearchSection;
