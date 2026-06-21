function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6">

            <h1 className="text-8xl font-bold text-cyan-400">
                404
            </h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-400 mt-4 text-center max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>

            <a
                href="/"
                className="mt-8 bg-cyan-500 px-6 py-3 rounded-xl text-black font-semibold"
            >
                Go Back Home
            </a>

        </div>
    );
}

export default NotFound;