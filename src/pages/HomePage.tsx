import Hero from "../sections/Hero";
import Header from "../layout/Header";
import About from "../sections/About";
import Services from "../sections/Services";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";

export default function HomePage() {
    return (
        <>
            <div className="relative">
                <Header />
                <Hero />
            </div>
            <About />
            <Services />
            <Pricing />
            <Testimonials />
        </>
    );
}
