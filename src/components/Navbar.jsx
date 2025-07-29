import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setActive(true);
            } else {
                setActive(false);

            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="animate__animated animate__fadeInDown animate__delay-3s z-50 disable-animation-sm">
            <div className="navbar py-7 z-50 flex items-center justify-between mx-auto px-4 box-border">
                <div className="logo animate__animated animate__fadeInDown animate__delay-3s z-50 disable-animation-mdlg">
                    <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
                        Portofolio
                    </h1>
                </div>
                <ul
                    className={`menu z-50 flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${active ? 'flex top-0 opacity-100' : '-top-10 opacity-0'
                        }`}
                >
                    <li>
                        <a
                            href="#beranda"
                            className="sm:text-lg text-base font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tentang"
                            className="sm:text-lg text-base font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#proyek"
                            className="sm:text-lg text-base font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300"
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#kontak"
                            className="sm:text-lg text-base font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;