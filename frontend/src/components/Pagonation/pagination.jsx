import { useState } from "react";

function Pagination({ totalPages = 5 }) {
    const [currentPage, setCurrentPage] = useState(1);

    const goTo = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="flex items-center justify-center gap-2 my-10 font-sans select-none">
            {/* Prev */}
            <button
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPage === 1
                        ? "text-slate-300 cursor-not-allowed bg-slate-50 border border-slate-100"
                        : "text-sky-600 hover:bg-sky-50 border border-sky-200 hover:border-sky-400 hover:shadow-md hover:shadow-sky-100"
                }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Önceki
            </button>

            {/* Pages */}
            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goTo(page)}
                        className={`h-9 w-9 rounded-full text-sm font-bold transition-all duration-300 ${
                            currentPage === page
                                ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/30 scale-110"
                                : "text-slate-600 hover:bg-sky-50 hover:text-sky-600 border border-transparent hover:border-sky-200"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next */}
            <button
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPage === totalPages
                        ? "text-slate-300 cursor-not-allowed bg-slate-50 border border-slate-100"
                        : "text-sky-600 hover:bg-sky-50 border border-sky-200 hover:border-sky-400 hover:shadow-md hover:shadow-sky-100"
                }`}
            >
                Sonraki
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default Pagination;