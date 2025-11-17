import ThreeDCarousel, { type ThreeDCarouselItem } from "@/components/lightswind/3d-carousel";

export default function Testimonials() {
    const testimonials: ThreeDCarouselItem[] = [
        {
            id: 1,
            title: "Sarah Johnson",
            brand: "Weight Loss Journey",
            description: "I've lost 30 pounds in 4 months! The trainers are incredibly supportive and the community here is amazing. AJ Fitness Studio changed my life!",
            tags: ["Lost 30 lbs", "4 Months", "Transformation"],
            imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
            link: "#testimonials"
        },
        {
            id: 2,
            title: "Mike Chen",
            brand: "Strength Training",
            description: "Best gym I've ever joined. The equipment is top-notch and the personal training sessions have helped me achieve my strength goals faster than I thought possible.",
            tags: ["Gained 15 lbs muscle", "Strength", "Training"],
            imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
            link: "#testimonials"
        },
        {
            id: 3,
            title: "Emily Rodriguez",
            brand: "Fitness Enthusiast",
            description: "The group classes are so much fun! I look forward to coming to the gym every day. The instructors are knowledgeable and keep the workouts fresh and exciting.",
            tags: ["100+ Classes", "Group Training", "Fun"],
            imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
            link: "#testimonials"
        }
    ];

    return (
        <section id="testimonials" className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            Success Stories
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        What Our Members{" "}
                        <span className="text-gradient-gym">Say</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Real transformations from real people. Join hundreds of satisfied members
                        who achieved their fitness goals with us.
                    </p>
                </div>

                {/* 3D Carousel Testimonials */}
                <ThreeDCarousel
                    items={testimonials}
                    autoRotate={true}
                    rotateInterval={5000}
                    cardHeight={350}
                    title="What Our Members Say"
                    subtitle="Success Stories"
                    tagline="Real transformations from real people. Join hundreds of satisfied members who achieved their fitness goals with us."
                    isMobileSwipe={true}
                />
            </div>
        </section>
    );
}
