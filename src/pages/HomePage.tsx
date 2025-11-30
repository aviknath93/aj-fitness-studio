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
                    <span className="font-bold text-yellow-300">30% OFF</span>
                    <span>- Don't Miss Out!</span>
                </div>
            </TopStickyBar>
            <div className="relative">
                <Header />
                <div className="relative">
                    <Hero />
                    {/* Grand Opening Circular Stamp Notification - Bottom Right (relative to Hero) */}
                    <div className="absolute bottom-8 right-8 z-50 pointer-events-none">
                        <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center bg-white border-4 border-dashed border-yellow-400 rounded-full shadow-lg rotate-[15deg] tracking-wide select-none animate-pulse text-center p-3">
                            <span className="flex flex-col items-center justify-center gap-1">
                                <span className="leading-tight font-black text-gray-900 drop-shadow-md text-base md:text-2xl">
                                    <span className="text-yellow-600">GRAND</span><br />
                                    <span className="text-orange-600">OPENING</span>
                                </span>
                                <span className="text-orange-700 text-[0.8em] md:text-lg font-extrabold mt-1">25th Dec, 2025</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Services />
            <Pricing />
            <Testimonials />
        </>
    );
}
