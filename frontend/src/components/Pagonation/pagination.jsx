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
                    ? "text-[#D4C5A9]/40 cursor-not-allowed bg-[#FFF8EE] border border-[#EDE4D6]"
                    : "text-[#C49A3C] hover:bg-[#C49A3C]/10 border border-[#EDE4D6] hover:border-[#C49A3C]/30"}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className="hidden sm:block">Önceki</span>
            </button>

            <div className="flex items-center gap-1">
                {getPages().map((page, i) =>
                    page === "..." ? (
                        <span key={i} className="h-9 w-9 flex items-center justify-center text-[#B8A88A]">...</span>
                    ) : (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(page)}
                            className={`h-9 w-9 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === page
                                ? "bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white shadow-lg shadow-[#C49A3C]/30 scale-110"
                                : "text-[#8C7B6B] hover:bg-[#C49A3C]/10 hover:text-[#C49A3C] border border-transparent hover:border-[#C49A3C]/20"}`}
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
                    ? "text-[#D4C5A9]/40 cursor-not-allowed bg-[#FFF8EE] border border-[#EDE4D6]"
                    : "text-[#C49A3C] hover:bg-[#C49A3C]/10 border border-[#EDE4D6] hover:border-[#C49A3C]/30"}`}
            >
                <span className="hidden sm:block">Sonraki</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination