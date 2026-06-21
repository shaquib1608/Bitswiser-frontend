import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">

            <div className="text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold"
                >
                    Build. Launch. Grow.
                </motion.h1>
                &ensp;
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-semibold"
                >
                    Transforming Ideas into Powerful Digital Solutions.
                </motion.p>

                <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                    We create modern websites, web applications,
                    and digital solutions for businesses and startups.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <a
                        href="#projects"
                        className="bg-cyan-500 px-6 py-3 rounded-xl"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-white px-6 py-3 rounded-xl"
                    >
                        Get Free Consultation
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                    >
                        Download Resume
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;