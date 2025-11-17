import About from "../sections/About";
import { Card, CardContent } from "@/components/lightswind/card";

export default function AboutPage() {
    const team = [
        {
            name: "John Smith",
            role: "Founder & Head Trainer",
            image: "👨‍💼",
            bio: "15+ years of experience in fitness training and nutrition"
        },
        {
            name: "Sarah Johnson",
            role: "Yoga Instructor",
            image: "🧘‍♀️",
            bio: "Certified yoga instructor with expertise in Hatha and Vinyasa"
        },
        {
            name: "Mike Chen",
            role: "Strength Coach",
            image: "💪",
            bio: "Former athlete specialized in strength training and conditioning"
        },
        {
            name: "Emily Rodriguez",
            role: "Nutritionist",
            image: "🥗",
            bio: "Licensed nutritionist helping members achieve their health goals"
        }
    ];

    const values = [
        {
            icon: "🎯",
            title: "Excellence",
            description: "We strive for excellence in everything we do, from equipment to customer service"
        },
        {
            icon: "🤝",
            title: "Community",
            description: "Building a supportive community where everyone feels welcome and motivated"
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Constantly updating our methods and equipment to provide the best experience"
        },
        {
            icon: "❤️",
            title: "Wellness",
            description: "Promoting holistic wellness - physical, mental, and emotional health"
        }
    ];

    return (
        <div className="pt-20">
            {/* About Section */}
            <About />

            {/* Mission & Vision */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Our <span className="text-gradient-gym">Mission</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To empower individuals to achieve their fitness goals through expert guidance,
                                state-of-the-art facilities, and a supportive community that inspires lasting
                                lifestyle changes.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Our <span className="text-gradient-gym">Vision</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To be the leading fitness studio that transforms lives by making health and
                                wellness accessible, enjoyable, and sustainable for everyone in our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Our Values
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            What We <span className="text-gradient-gym">Stand For</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 space-y-4">
                                    <div className="text-5xl">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Our Team
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Meet Our <span className="text-gradient-gym">Expert Trainers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our certified professionals are dedicated to helping you achieve your fitness goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center border-border bg-card hover:shadow-xl transition-all hover:scale-105">
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-24 h-24 mx-auto bg-gradient-gym rounded-full flex items-center justify-center text-5xl">
                                        {member.image}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                        <p className="text-primary font-semibold">{member.role}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
