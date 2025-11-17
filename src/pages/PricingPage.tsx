import Pricing from "../sections/Pricing";
import { Card, CardContent } from "@/components/lightswind/card";

export default function PricingPage() {
    const faqs = [
        {
            question: "Can I cancel my membership anytime?",
            answer: "Yes! All our memberships come with no long-term commitment. You can cancel anytime with 30 days notice."
        },
        {
            question: "Do you offer student or senior discounts?",
            answer: "Yes, we offer 15% discount for students (with valid ID) and 20% discount for seniors (65+)."
        },
        {
            question: "Can I freeze my membership?",
            answer: "Absolutely! You can freeze your membership for up to 3 months per year for any reason."
        },
        {
            question: "Are there any joining fees?",
            answer: "No joining fees! We also offer a 7-day money-back guarantee if you're not satisfied."
        },
        {
            question: "Can I upgrade or downgrade my plan?",
            answer: "Yes, you can change your plan anytime. Upgrades take effect immediately, downgrades at the next billing cycle."
        },
        {
            question: "Do you offer corporate memberships?",
            answer: "Yes! We offer special corporate rates for companies with 5+ employees. Contact us for details."
        }
    ];

    const addons = [
        {
            name: "Extra Personal Training Sessions",
            price: "$50",
            unit: "per session",
            description: "Add more 1-on-1 training to any plan"
        },
        {
            name: "Nutrition Consultation",
            price: "$75",
            unit: "per session",
            description: "Personalized meal plans and dietary guidance"
        },
        {
            name: "Massage Therapy",
            price: "$80",
            unit: "per hour",
            description: "Professional sports massage for recovery"
        },
        {
            name: "Guest Passes",
            price: "$15",
            unit: "per pass",
            description: "Bring a friend to workout with you"
        }
    ];

    return (
        <div className="pt-20">
            {/* Pricing Section */}
            <Pricing />

            {/* Add-ons */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Add-ons
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Enhance Your <span className="text-gradient-gym">Membership</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Customize your membership with these optional add-ons
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {addons.map((addon, index) => (
                            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <div className="text-3xl font-bold text-primary">{addon.price}</div>
                                        <div className="text-sm text-muted-foreground">{addon.unit}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{addon.name}</h3>
                                    <p className="text-muted-foreground">{addon.description}</p>
                                    <a
                                        href="#contact"
                                        className="inline-block w-full text-center px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                                    >
                                        Add to Plan
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                FAQs
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Frequently Asked <span className="text-gradient-gym">Questions</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-border bg-card">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
