function About() {
    return (
        <section id="about" className="py-24 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    About BitWiser
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>

                        <div className="w-72 h-72 rounded-full bg-slate-700 mx-auto">
                            <img
                                src="/my_image.jpg"
                                alt="Profile"
                                className="w-72 h-72 rounded-full bg-slate-700"

                            />

                        </div>

                    </div>

                    <div>

                        <h3 className="text-3xl font-bold mb-4">
                            M D Shaquib Jahangir
                        </h3>

                        <p className="text-gray-400 leading-8">
                            Computer Science graduate and Full Stack Developer.
                            Founder of BitWiser, focused on creating digital
                            solutions for businesses and startups.
                        </p>
                        <div className="mt-8 flex gap-4">


                            <a
                                href="/resume.pdf"
                                download
                                className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                            >
                                Download Resume
                            </a>


                            <a
                                href="https://www.linkedin.com/in/shaquib07/"
                                target="_blank"
                                rel="noreferrer"
                                className="border border-white px-5 py-3 rounded-lg inline-block"
                            >
                                LinkedIn
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <span className="bg-slate-800 px-4 py-2 rounded-lg">
                                Java
                            </span>

                            <span className="bg-slate-800 px-4 py-2 rounded-lg">
                                Spring Boot
                            </span>

                            <span className="bg-slate-800 px-4 py-2 rounded-lg">
                                React
                            </span>

                            <span className="bg-slate-800 px-4 py-2 rounded-lg">
                                PostgreSQL
                            </span>

                            <span className="bg-slate-800 px-4 py-2 rounded-lg">
                                Tailwind CSS
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;