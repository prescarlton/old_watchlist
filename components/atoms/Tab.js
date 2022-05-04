export default function Tab({ title, onClick, activeTab }) {
    const handleClick = () => {
        onClick(title)
    }
    return (
        <li
            className={`tab__title ${activeTab == title && "bg-blue-500"}`}
            onClick={handleClick}>
            {title}
        </li>
    );
}
