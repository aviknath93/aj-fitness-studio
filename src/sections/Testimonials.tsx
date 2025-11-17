import { Card, CardContent } from "@/components/lightswind/card";
import { Avatar } from "@/components/lightswind/avatar";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Weight Loss Journey",
            avatar: "SJ",
            rating: 5,
            text: "I've lost 30 pounds in 4 months! The trainers are incredibly supportive and the community here is amazing. AJ Fitness Studio changed my life!",
            achievement: "Lost 30 lbs"
        },
        {
            name: "Mike Chen",
            role: "Strength Training",
            avatar: "MC",
            rating: 5,
            text: "Best gym I've ever joined. The equipment is top-notch and the personal training sessions have helped me achieve my strength goals faster than I thought possible.",
            achievement: "Gained 15 lbs muscle"
        },
        {
            name: "Emily Rodriguez",
            role: "Fitness Enthusiast",
            avatar: "ER",
            rating: 5,
            text: "The group classes are so much fun! I look forward to coming to the gym every day. The instructors are knowledgeable and keep the workouts fresh and exciting.",
            achievement: "100+ Classes Attended"
        },
        {
            name: "David Kumar",
            role: "Marathon Runner",
            avatar: "DK",
            rating: 5,
            text: "Training here helped me complete my first marathon. The cardio equipment and training programs are excellent. Highly recommend to anyone serious about fitness.",
            achievement: "Marathon Finisher"
        },
        {
            name: "Lisa Thompson",
            role: "Yoga Practitioner",
            avatar: "LT",
            rating: 5,
            text: "The yoga classes have improved my flexibility and mental wellness tremendously. The peaceful environment and expert instructors make every session worthwhile.",
            achievement: "Improved Flexibility 50%"
        },
        {
            name: "James Wilson",
            role: "Boxing Enthusiast",
            avatar: "JW",
            rating: 5,
            text: "The boxing program is intense and rewarding. I've not only gotten in the best shape of my life but also learned valuable self-defense skills. Love this place!",
            achievement: "Lost 25 lbs, Built Confidence"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card"
                        >
                            <CardContent className="p-6 space-y-4">
                                {/* Rating Stars */}
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-primary fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-foreground leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Achievement Badge */}
                                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                    {testimonial.achievement}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                                    <Avatar className="w-12 h-12 bg-primary text-white font-bold flex items-center justify-center">
                                        {testimonial.avatar}
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
