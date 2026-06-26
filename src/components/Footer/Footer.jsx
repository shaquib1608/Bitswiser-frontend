function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>

                        <h3 className="text-2xl font-bold text-cyan-400">
                            BitWiser
                        </h3>

                        <p className="text-gray-400 mt-4">
                            Building modern websites,
                            web applications and digital
                            solutions for businesses and
                            individuals.
                        </p>

                    </div>

                    <div>

                        <h4 className="font-semibold mb-4">
                            Quick Links
                        </h4>

                        <div className="flex flex-col gap-2 text-gray-400">

                            <a href="#home">Home</a>
                            <a href="#services">Services</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>

                        </div>

                    </div>

                    <div>

                        <h4 className="font-semibold mb-4">
                            Connect
                        </h4>

                        <div className="flex flex-col gap-2 text-gray-400">

                            <a
                                href="https://github.com/YOUR_USERNAME"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR_USERNAME"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="mailto:your@email.com"
                            >
                                Email
                            </a>
                            <a href="/admin/login">
                                Admin Login
                            </a>

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

                    © 2026 BitWiser. All rights reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;