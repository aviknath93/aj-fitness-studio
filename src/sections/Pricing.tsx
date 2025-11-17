import { Button } from "@/components/lightswind/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { CountUp } from "@/components/lightswind/count-up";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "29",
            period: "month",
            description: "Perfect for beginners starting their fitness journey",
            popular: false,
            features: [
                "Access to gym equipment",
                "Locker room access",
                "2 group classes per week",
                "Mobile app access",
                "Free fitness assessment"
            ],
            cta: "Get Started"
        },
        {
            name: "Premium",
            price: "59",
            period: "month",
            description: "Most popular choice for serious fitness enthusiasts",
            popular: true,
            features: [
                "Unlimited gym access",
                "Unlimited group classes",
                "2 personal training sessions/month",
                "Nutrition consultation",
                "Mobile app with meal plans",
                "Guest pass (2 per month)",
                "Sauna & steam room access"
            ],
            cta: "Get Started"
        },
        {
            name: "Elite",
            price: "99",
            period: "month",
            description: "Ultimate fitness experience with premium benefits",
            popular: false,
            features: [
                "All Premium features",
                "8 personal training sessions/month",
                "Priority class booking",
                "Massage therapy (2 per month)",
                "Custom meal & workout plans",
                "Unlimited guest passes",
                "Private locker",
                "Free merchandise"
            ],
            cta: "Get Started"
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            Pricing Plans
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Choose Your{" "}
                        <span className="text-gradient-gym">Perfect Plan</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Flexible membership options designed to fit your lifestyle and budget.
                        No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col ${plan.popular
                                ? 'border-2 border-primary shadow-2xl scale-105 bg-card'
                                : 'border-border bg-card'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-primary text-white px-4 py-1 text-sm font-semibold">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8 pt-8">
                                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                                    {plan.name}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {plan.description}
                                </CardDescription>

                                {/* Price */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-center">
                                        <span className="text-5xl font-bold text-foreground">
                                            <CountUp value={parseInt(plan.price)} prefix="$" duration={2} animationStyle="spring" />
                                        </span>
                                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-grow space-y-4">
                                {/* Features List */}
                                <div className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-foreground text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="pt-6">
                                <Button
                                    className={`w-full ${plan.popular
                                        ? 'bg-primary hover:bg-primary/90'
                                        : 'bg-secondary hover:bg-secondary/90'
                                        }`}
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center space-y-4">
                    <p className="text-muted-foreground">
                        All plans include a 7-day money-back guarantee
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>No commitment required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Upgrade or downgrade anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
