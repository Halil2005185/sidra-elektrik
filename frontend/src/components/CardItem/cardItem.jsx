import { useState } from "react";
import { Link } from "react-router-dom";

function CardItem({ product, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-500 border border-slate-100 hover:border-sky-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 80}ms` }}
        >
            <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full shadow-lg shadow-sky-500/25">
                    {product.category}
                </span>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsFavorited(!isFavorited);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isFavorited
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                        : "bg-white/80 text-slate-400 hover:bg-white hover:text-rose-500 shadow-sm"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill={isFavorited ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                <div
                    className={`absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-all duration-400 ${isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        }`}
                >
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-white/95 backdrop-blur-sm text-sky-600 text-xs font-semibold rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        Hızlı Bak
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-xs font-semibold rounded-full hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-sky-500/30">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.868l1.96-8.595A1.125 1.125 0 0020.023 3H5.625l-.632 2.521M7.5 14.25l-1.044-4.771"
                            />
                        </svg>
                        Sepete Ekle
                    </button>
                </div>
            </div>

            <div className="p-4 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    {product.code}
                </span>

                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2 leading-snug">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-xs text-slate-400 line-clamp-1">
                        {product.description}
                    </p>
                )}

                <div className="flex items-end gap-2 pt-1">
                    <span className="text-lg font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                        {product.price} ₺
                    </span>
                    {product.costPrice && product.costPrice < product.price && (
                        <span className="text-xs text-slate-400 line-through mb-0.5">
                            {(product.price * 1.3).toFixed(0)} ₺
                        </span>
                    )}
                </div>
                {/* @TODO : Add the Product real ID */}
                <Link to={`/admin/admin-edit-product/1`}>
                    <div className="my-2 rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 w-fit px-4 py-1 cursor-pointer">Edit</div>
                </Link>
            </div>
        </div>
    );
}

export default CardItem;