import "../styles/styles.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/molecues/Navbar";
function MyApp({ Component, pageProps }) {
    return (
        <div className="app h-full bg-black text-white flex flex-col lg:flex-row">
            <Navbar />
            <Component {...pageProps}/>
        </div>
    );
}

export default MyApp;
