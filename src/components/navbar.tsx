import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
    const [stickyNav, setStickyNav] = useState<boolean>(false);
    const [mobileNav, setMobileNav] = useState<boolean>(true);

    const setSticky = () => {
        if (window.scrollY >= 90) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    }

    window.addEventListener("scroll", setSticky);

    
    return (
        <motion.nav 
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.15 }}
            className={stickyNav ? "navbar active z-40 fixed w-full bg-nav px-5 py-4 flex justify-between items-center sm:px-10 sm:py-6 ease-in duration-200" : "navbar z-40 fixed w-full bg-nav px-5 py-4 flex justify-between items-center sm:px-10 sm:py-6 ease-in duration-200"}>
            
            <div className="logo flex gap-4 items-center">
                <img src="img/logo.png" className="h-10 sm:h-12"></img>
                <h1 className="font-bold text-white text-3xl sm:text-4xl">Szymon</h1>
            </div>

            {/* Links */}
            <div className={"links text-text ease-in duration-200 gap-4 items-center flex-row justify-center text-lg hidden sm:flex"}>
                <a href="#home" className="text-primary ease duration-200 hover:text-primary flex flex-col items-center">Strona główna</a>
                <a href="#about" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center">O mnie</a>
                <a href="#skills" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center">Co umiem?</a>
                <a href="#projects" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center">Projekty</a>
                <a href="#contact" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center">Kontakt</a>
            </div>

            {/* Button */}
            <div className="button hidden sm:block md:block">
                <a href="https://github.com/lis3q" target="_blank" className="text-lg py-2 px-5 text-primary rounded-lg border-2 border-primary bg-no-repeat bg-[length:0_100%] bg-primary-gradient ease duration-300 hover:bg-[length:100%_100%] hover:text-white">Mój profil GitHub</a>
            </div>

            {/* Hamburger menu */}
            <div onClick={() => setMobileNav(!mobileNav)} className="hamburger-menu block md:hidden sm:hidden">
                <i className={mobileNav ? "fa-solid fa-bars text-white text-3xl cursor-pointer" : "fa-solid fa-xmark text-white text-3xl cursor-pointer"}></i>
            </div>


            {/* Mobile menu */}
            <div className={mobileNav ? "mobile-links fixed -top-96 left-1/2 transform -translate-x-1/2 -translate-y-24 ease duration-200" : "mobile-links fixed w-max top-48 left-1/2 transform -translate-x-1/2 -translate-y-24 grid grid-cols-2 z-30 bg-nav rounded-lg px-3 py-6 justify-between gap-7 ease duration-200"}>
                <a href="#home" className="text-primary ease duration-200 hover:text-primary flex flex-col items-center"><i className="fa-solid fa-house block text-xl"></i> Strona główna</a>
                <a href="#about" className="ease duration-200 hover:text-primary text-text flex flex-col items-center"><i className="fa-solid fa-user block text-xl"></i> O mnie</a>
                <a href="#skills" className="ease duration-200 hover:text-primary text-text flex flex-col items-center"><i className="fa-solid fa-list block text-xl"></i> Co umiem?</a>
                <a href="#projects" className="ease duration-200 hover:text-primary text-text flex flex-col items-center"><i className="fa-solid fa-folder block text-xl"></i>Projekty</a>
                <a href="#contact" className="ease duration-200 hover:text-primary text-text flex flex-col items-center"><i className="fa-solid fa-phone-volume block text-xl"></i> Kontakt</a>
                <a href="https://github.com/lis3q" target="_blank" className="text-md px-5 py-3 text-primary rounded-lg border-2 border-primary hover:text-white hover:bg-primary ease duration-200">Mój GitHub</a>
            </div>
        </motion.nav>
    )
}