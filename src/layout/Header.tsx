import { Button } from "@/components/lightswind/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6L6 18" />
        <path d="M6 6L18 18" />
    </svg>
);

const ArrowUpRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 17L17 7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: "Home", path: "#hero" },
        { name: "About", path: "#about" },
        { name: "Services", path: "#services" },
        { name: "Testimonials", path: "#testimonials" },
        { name: "Contact", path: "#pricing" },
    ];

    const isActive = (path: string) => {
        const hash = location.hash || "#hero";
        return hash === path;
    };

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', path);
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="absolute top-10 left-0 right-0 z-50 w-full">
            <div className="flex justify-between items-center w-full px-4 md:px-10 py-6">
                {/* Logo */}
                <Link to="/" className="text-base lg:text-lg font-bold tracking-tight flex items-center gap-2 font-inter text-gray-400 z-50">
                    <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        A
                    </div>
                    <span className="text-gray-300">AJ FITNESS</span> <span className="text-gray-400">STUDIO</span>
                </Link>

                {/* Desktop Menu Items */}
                <nav className="hidden md:flex gap-4 lg:gap-8 font-medium text-xs font-inter backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 mx-auto relative">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => handleAnchorClick(e, item.path)}
                            className={`relative hover:text-white transition-colors group ${isActive(item.path) ? "text-white" : "text-gray-300"
                                }`}
                        >
                            {item.name}
                            <span
                                className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[3px] bg-white rounded-full transition-all duration-300 ease-out ${isActive(item.path)
                                    ? "w-full translate-y-0"
                                    : "w-0 group-hover:w-full group-hover:translate-y-0 transform translate-y-full"
                                    }`}
                            ></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden z-50">
                    <Button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black"
                    >
                        <MenuIcon className="w-6 h-6" />
                    </Button>
                </div>

                {/* CTA Button (Desktop only) */}
                <Button
                    onClick={(e) => handleAnchorClick(e as any, '#pricing')}
                    className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out font-inter z-50"
                >
                    Connect with us
                    <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-black/90 backdrop-blur-xl z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden flex flex-col p-4`}
            >
                <div className="flex justify-end mb-8">
                    <Button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 bg-transparent border border-white rounded-full text-white"
                    >
                        <XIcon className="w-6 h-6" />
                    </Button>
                </div>

                <nav className="flex flex-col gap-4 text-lg font-medium">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => handleAnchorClick(e, item.path)}
                            className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="mt-auto pt-4">
                    <Button
                        className="w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-sm gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out font-inter"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Connect with us
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}