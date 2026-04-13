import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function GoToTop() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <section className={`fixed bottom-2 right-2 ${show ? "opacity-100 z-50 translate-y-0" : "opacity-0 -z-10 translate-y-4 pointer-events-none"} transition-all duration-300`} >
            <FaArrowUp 
                onClick={GoToTop} 
                className="text-white font-bold text-[45px] bg-gradient-to-br from-cyan-500 to-sky-600 rounded-full p-3 shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" 
            />
        </section>
    );
}

export default ScrollTop;