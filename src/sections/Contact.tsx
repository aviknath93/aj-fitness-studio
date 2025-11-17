import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

export default function Contact() {
    // Default location (you can change this to your actual gym location)
    const gymLocation = {
        lat: 40.7580,
        lng: -73.9855,
        name: "AJ Fitness Studio",
        address: "123 Fitness Street, New York, NY 10001",
        phone: "+1 (555) 123-4567",
        email: "info@ajfitness.com"
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Gym Name",
            content: gymLocation.name
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Address",
            content: gymLocation.address
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Contact",
            content: gymLocation.phone
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            content: gymLocation.email
        }
    ];

    return (
        <section id="contact" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            Contact Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Visit Our{" "}
                        <span className="text-gradient-gym">Studio</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Come see our facilities or get in touch with us. We're here to help you start your fitness journey!
                    </p>
                </div>

                {/* Contact Content */}
                <div className="max-w-6xl mx-auto">
                    <GlowingCards className="" enableGlow={true} glowRadius={30}>
                        <GlowingCard
                            className="border-border h-[320px] w-full"
                            glowColor="#ff6b35"
                        >
                            <div className="grid lg:grid-cols-2 gap-6 h-full">
                                {/* Left Side - Map */}
                                <div className="overflow-hidden rounded-xl h-full">
                                    <iframe
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.174!2d${gymLocation.lng}!3d${gymLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU5JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="AJ Fitness Studio Location"
                                    />
                                </div>

                                {/* Right Side - Contact Information */}
                                <div className="flex flex-col justify-evenly py-2">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-foreground mb-0.5">{info.title}</h4>
                                                <p className="text-xs text-muted-foreground leading-tight">{info.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlowingCard>
                    </GlowingCards>
                </div>
            </div>
        </section>
    );
}
