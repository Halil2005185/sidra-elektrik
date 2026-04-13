function Pagination({ currentPage, setCurrentPage, pageCount }) {

    const getPages = () => {
        if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1)

        if (currentPage <= 3) return [1, 2, 3, 4, "...", pageCount]
        if (currentPage >= pageCount - 2) return [1, "...", pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
        return [1, "...", currentPage - 1, currentPage, currentPage + 1, pageCount]
    }

    return (
        <div className="flex items-center justify-center sm:gap-2 my-10 font-sans select-none">
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === 1
                    ? "text-slate-300 cursor-not-allowed bg-slate-50 border border-slate-100"
                    : "text-sky-600 hover:bg-sky-50 border border-sky-200 hover:border-sky-400"}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className="hidden sm:block">Önceki</span> {/* ✅ مخفي على موبايل */}
            </button>

            <div className="flex items-center gap-1">
                {getPages().map((page, i) =>
                    page === "..." ? (
                        <span key={i} className="h-9 w-9 flex items-center justify-center text-slate-400">...</span>
                    ) : (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(page)}
                            className={`h-9 w-9 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === page
                                ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/30 scale-110"
                                : "text-slate-600 hover:bg-sky-50 hover:text-sky-600 border border-transparent hover:border-sky-200"}`}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === pageCount
                    ? "text-slate-300 cursor-not-allowed bg-slate-50 border border-slate-100"
                    : "text-sky-600 hover:bg-sky-50 border border-sky-200 hover:border-sky-400"}`}
            >
                <span className="hidden sm:block">Sonraki</span> {/* ✅ مخفي على موبايل */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination