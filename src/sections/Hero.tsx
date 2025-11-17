import { Button } from "@/components/lightswind/button";
import { CountUp } from "@/components/lightswind/count-up";
import { ShinyText } from "@/components/lightswind/shiny-text";
import { useHeroContent } from "@/hooks/useContent";

const ArrowUpRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M7 17L17 7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function Hero() {
    const { content } = useHeroContent();

    const handleScrollToContact = () => {
        const element = document.querySelector('#pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black text-white flex flex-col font-inter">
            {/* Background Gym Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={content.backgroundImage}
                    alt="Gym background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Hero Content */}
            <div className="relative flex flex-col justify-center items-center text-center flex-grow px-4 mt-8 md:mt-16 z-10">
                <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl font-inter">
                    <span className="block mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        {content.title.line1}
                    </span>
                    <span className="block mb-2 text-2xl md:text-4xl font-light tracking-wider text-gray-300">
                        {content.title.line2}
                    </span>
                    <ShinyText
                        size="4xl"
                        weight="bold"
                        baseColor="rgba(251, 146, 60, 0.6)"
                        shineColor="rgba(249, 115, 22, 1)"
                        speed={2.5}
                        intensity={0.9}
                        direction="left-to-right"
                        shineWidth={50}
                        className="inline-block text-5xl md:text-7xl lg:text-8xl"
                    >
                        {content.title.highlight}
                    </ShinyText>
                </h1>

                <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md font-inter">
                    {content.description}
                </p>

                {/* Explore Button */}
                <Button
                    onClick={handleScrollToContact}
                    className="mt-8 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out font-inter"
                >
                    {content.cta.text}
                    <ArrowUpRightIcon className="w-4 h-4" />
                </Button>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl">
                    {content.stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-3xl md:text-5xl font-bold">
                                <CountUp
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    triggerOnView={true}
                                    duration={2.5}
                                    animationStyle="energetic"
                                    colorScheme="custom"
                                    customColor="hsl(var(--primary))"
                                />
                            </div>
                            <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
