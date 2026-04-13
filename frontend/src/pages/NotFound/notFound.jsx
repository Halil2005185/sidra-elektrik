import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24 select-none">
            <div className="text-center max-w-lg mx-auto">
                <p className="text-lg font-semibold text-sky-500">Error 404</p>
                <h1 className="mt-2 text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent drop-shadow-sm sm:text-9xl">
                    404
                </h1>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Page Not Found
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    Oops! The page you're looking for doesn't exist or has been moved. 
                    Please check the URL or return to the homepage to find what you need.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <Link
                        to="/"
                        className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:from-cyan-400 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Go back home
                    </Link>
                    <Link
                        to="/contact"
                        className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Contact support
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;