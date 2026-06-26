import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";

function Home() {
    return (
        <>
            <Helmet>
                <title>
                    BitWiser | Web Development & Digital Solutions
                </title>

                <meta
                    name="description"
                    content="BitWiser builds modern websites, web applications and digital solutions for businesses and startups."
                />

                <meta
                    name="keywords"
                    content="BitWiser, Web Development, React Developer, Spring Boot Developer, Full Stack Developer"
                />

                <meta
                    property="og:title"
                    content="BitWiser"
                />

                <meta
                    property="og:description"
                    content="Modern websites and digital solutions."
                />
            </Helmet>

            <Navbar />
            <Hero />
            <WhyChooseUs />
            <Services />
            <Projects />
            <Process />
            <About />
            <Contact />
            <Footer />


        </>
    );
}

export default Home;