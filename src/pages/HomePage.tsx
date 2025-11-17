import Hero from "../sections/Hero";
import Header from "../layout/Header";
import About from "../sections/About";
import Services from "../sections/Services";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import TopStickyBar from "@/components/lightswind/top-sticky-bar";

export default function HomePage() {
    return (
        <>
            <TopStickyBar
                show={true}
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4"
            >
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
                    <span>Limited Time Offer: First 100 Registrations Get</span>
                    <span className="font-bold text-yellow-300">50% OFF</span>
                    <span>- Don't Miss Out!</span>
                </div>
            </TopStickyBar>
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
