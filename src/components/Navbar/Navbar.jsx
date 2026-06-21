// import { useState } from "react";



function Navbar() {
    // const [menuOpen, setMenuOpen] = useState(false);



    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-cyan-400">
                    BitWiser
                </h1>

                <div className="hidden md:flex gap-8">
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <button
                    className="bg-cyan-500 px-4 py-2 rounded-lg"
                >
                    Hire Us
                </button>



            </div>
        </nav>
    );
}

export default Navbar;