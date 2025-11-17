import { Card, CardContent } from "@/components/lightswind/card";

export default function Services() {
    const services = [
        {
            icon: "💪",
            title: "Strength Training",
            description: "Build muscle and increase strength with our expert-designed programs and state-of-the-art equipment.",
            features: ["Free Weights", "Machines", "Personal Training"]
        },
        {
            icon: "🏃",
            title: "Cardio Zone",
            description: "Improve endurance and burn calories with our extensive cardio equipment and high-energy classes.",
            features: ["Treadmills", "Bikes", "Rowing Machines"]
        },
        {
            icon: "🧘",
            title: "Yoga & Flexibility",
            description: "Enhance flexibility, balance, and mental wellness through our yoga and stretching programs.",
            features: ["Hatha Yoga", "Power Yoga", "Meditation"]
        },
        {
            icon: "🥊",
            title: "Boxing & MMA",
            description: "Learn self-defense while getting an intense full-body workout with our combat sports training.",
            features: ["Boxing", "Kickboxing", "MMA Fundamentals"]
        },
        {
            icon: "👨‍🏫",
            title: "Personal Training",
            description: "One-on-one coaching tailored to your specific fitness goals with certified personal trainers.",
            features: ["Custom Plans", "Progress Tracking", "Nutrition Guidance"]
        },
        {
            icon: "👥",
            title: "Group Classes",
            description: "Stay motivated with high-energy group fitness classes led by experienced instructors.",
            features: ["Zumba", "Spin", "HIIT"]
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
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card"
                        >
                            <CardContent className="p-6 space-y-4">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl group-hover:bg-primary/20 transition-colors">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-foreground">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="pt-4 space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div className="pt-4">
                                    <a
                                        href="#contact"
                                        className="text-primary font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                                    >
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-4">
                        Not sure which program is right for you?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center space-x-2 text-primary font-semibold text-lg hover:underline"
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
