import { GlowingCard } from "@/components/lightswind/glowing-cards";
import { ShinyText } from "@/components/lightswind/shiny-text";

export default function Services() {
    const services = [
        {
            title: "Strength Training",
            description: "Build muscle and increase strength with our expert-designed programs and state-of-the-art equipment.",
            features: ["Free Weights", "Machines", "Personal Training"],
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
        },
        {
            title: "Cardio Zone",
            description: "Improve endurance and burn calories with our extensive cardio equipment and high-energy classes.",
            features: ["Treadmills", "Bikes", "Rowing Machines"],
            image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80"
        },
        {
            title: "Yoga & Flexibility",
            description: "Enhance flexibility, balance, and mental wellness through our yoga and stretching programs.",
            features: ["Hatha Yoga", "Power Yoga", "Meditation"],
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
        },
        {
            title: "CrossFit & Functional Training",
            description: "Build real-world strength and conditioning with dynamic functional movements and HIIT workouts.",
            features: ["CrossFit", "Functional Movement", "HIIT Training"],
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
        },
        {
            title: "Personal Training",
            description: "One-on-one coaching tailored to your specific fitness goals with certified personal trainers.",
            features: ["Custom Plans", "Progress Tracking", "Nutrition Guidance"],
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
        },
        {
            title: "Group Classes",
            description: "Stay motivated with high-energy group fitness classes led by experienced instructors.",
            features: ["Zumba", "Spin", "HIIT"],
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
        }
    ];

    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Everything You Need to{" "}
                        <span className="text-gradient-gym">Succeed</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From beginner-friendly programs to advanced training, we offer comprehensive
                        fitness solutions for every goal and fitness level.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <GlowingCard
                            key={index}
                            className="group relative overflow-hidden border-border h-[420px]"
                            glowColor="#3b82f6"
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-6 text-white">
                                <div className="space-y-4">
                                    {/* Title */}
                                    <h3 className="text-2xl font-bold">
                                        <ShinyText
                                            speed={3}
                                            className="text-2xl font-bold"
                                            baseColor="#ffffff"
                                            shineColor="#ff6b35"
                                        >
                                            {service.title}
                                        </ShinyText>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                <span className="text-sm text-white/80">{feature}</span>
                                            </div>
                                        ))}
                                        <span className="text-sm text-white/60 italic">and more...</span>
                                    </div>
                                </div>
                            </div>
                        </GlowingCard>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-4">
                        Not sure which program is right for you?
                    </p>
                    <a
                        href="#pricing"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector('#pricing');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        className="inline-flex items-center space-x-2 text-primary font-semibold text-lg hover:underline cursor-pointer"
                    >
                        <span>Schedule a Free Consultation</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
