import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

export default function About() {
    const features = [
        {
            icon: "🏢",
            title: "Modern Facilities",
            description: "10,000 sq ft of premium equipment and training space"
        },
        {
            icon: "⏰",
            title: "24/7 Access",
            description: "Train on your schedule, any time of day or night"
        },
        {
            icon: "👥",
            title: "Expert Trainers",
            description: "Certified professionals dedicated to your success"
        },
        {
            icon: "🎯",
            title: "Personalized Plans",
            description: "Custom fitness programs tailored to your goals"
        }
    ];

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                About Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Your Journey to a{" "}
                            <span className="text-gradient-gym">Healthier Life</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At AJ Fitness Studio, we believe fitness is more than just a workout—it's a
                            lifestyle. Since our founding, we've been committed to providing a welcoming
                            environment where everyone can achieve their fitness goals, regardless of their
                            starting point.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our state-of-the-art facility features the latest equipment, expert trainers,
                            and a supportive community that will motivate you every step of the way. Whether
                            you're looking to lose weight, build muscle, improve flexibility, or simply feel
                            better, we're here to help you succeed.
                        </p>
                    </div>

                    {/* Right Content - Features */}
                    <GlowingCards className="space-y-6" enableGlow={true} glowRadius={30}>
                        {features.map((feature, index) => (
                            <GlowingCard
                                key={index}
                                className="border-border h-[200px]"
                                glowColor="#ff6b35"
                            >
                                <div className="flex items-start space-x-4 h-full">
                                    <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                                    <div className="space-y-2 flex-1">
                                        <h4 className="text-xl font-semibold text-foreground leading-tight">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </GlowingCard>
                        ))}
                    </GlowingCards>
                </div>
            </div>
        </section>
    );
}
