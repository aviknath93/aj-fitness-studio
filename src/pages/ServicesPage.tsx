import Services from "../sections/Services";
import { Card, CardContent } from "@/components/lightswind/card";

export default function ServicesPage() {
    const schedule = [
        {
            day: "Monday",
            classes: [
                { time: "6:00 AM", name: "Morning Yoga", instructor: "Sarah" },
                { time: "7:00 AM", name: "HIIT Training", instructor: "Mike" },
                { time: "12:00 PM", name: "Lunch Power Hour", instructor: "John" },
                { time: "6:00 PM", name: "Boxing Basics", instructor: "Mike" },
                { time: "7:30 PM", name: "Zumba", instructor: "Emily" }
            ]
        },
        {
            day: "Tuesday",
            classes: [
                { time: "6:00 AM", name: "Spin Class", instructor: "John" },
                { time: "7:00 AM", name: "Strength Training", instructor: "Mike" },
                { time: "12:00 PM", name: "Yoga Flow", instructor: "Sarah" },
                { time: "6:00 PM", name: "Kickboxing", instructor: "Mike" },
                { time: "7:30 PM", name: "Pilates", instructor: "Sarah" }
            ]
        },
        {
            day: "Wednesday",
            classes: [
                { time: "6:00 AM", name: "Morning Bootcamp", instructor: "John" },
                { time: "7:00 AM", name: "CrossFit", instructor: "Mike" },
                { time: "12:00 PM", name: "Meditation", instructor: "Sarah" },
                { time: "6:00 PM", name: "MMA Fundamentals", instructor: "Mike" },
                { time: "7:30 PM", name: "Dance Fitness", instructor: "Emily" }
            ]
        }
    ];

    return (
        <div className="pt-20">
            {/* Services Section */}
            <Services />

            {/* Class Schedule */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Class Schedule
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Weekly <span className="text-gradient-gym">Class Schedule</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join our expert-led classes throughout the week
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {schedule.map((day, index) => (
                            <Card key={index} className="border-border bg-card">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground border-b border-border pb-3">
                                        {day.day}
                                    </h3>
                                    <div className="space-y-3">
                                        {day.classes.map((classItem, idx) => (
                                            <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                                <div className="flex-shrink-0">
                                                    <div className="text-sm font-semibold text-primary">{classItem.time}</div>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="font-semibold text-foreground">{classItem.name}</div>
                                                    <div className="text-sm text-muted-foreground">with {classItem.instructor}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">
                            Download our full schedule or book a class
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Book a Class
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                            >
                                Download Schedule PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                Facilities
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            World-Class <span className="text-gradient-gym">Facilities</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "🏋️", title: "Strength Training Zone", description: "Latest equipment from top brands" },
                            { icon: "🏃", title: "Cardio Area", description: "Treadmills, bikes, ellipticals & more" },
                            { icon: "🧘", title: "Yoga Studio", description: "Peaceful space for yoga and meditation" },
                            { icon: "🥊", title: "Boxing Ring", description: "Professional boxing and MMA training area" },
                            { icon: "🏊", title: "Sauna & Steam Room", description: "Relax and recover after your workout" },
                            { icon: "🚿", title: "Premium Locker Rooms", description: "Clean, spacious with private showers" }
                        ].map((facility, index) => (
                            <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 space-y-4">
                                    <div className="text-5xl">{facility.icon}</div>
                                    <h3 className="text-xl font-bold text-foreground">{facility.title}</h3>
                                    <p className="text-muted-foreground">{facility.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
