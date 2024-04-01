import { useState } from "react";

export const Navbar = () => {
    const [Toggle, showMenu] = useState<boolean>(false);
    const [stickyNav, setStickyNav] = useState<boolean>(false);

    const setSticky = () => {
        if (window.scrollY >= 90) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    }

    window.addEventListener("scroll", setSticky);

    
    return (
        <nav className={stickyNav ? "navbar active z-40 fixed w-full bg-nav px-5 py-4 flex justify-between items-center sm:px-10 sm:py-6 ease-in duration-200" : "navbar z-40 fixed w-full bg-nav px-5 py-4 flex justify-between items-center sm:px-10 sm:py-6 ease-in duration-200"}>
            <div className="logo flex gap-4 items-center">
                <img src="img/logo.png" className="h-10 sm:h-12"></img>
                <h1 className="font-bold text-white text-3xl sm:text-4xl">Szymon</h1>
            </div>

            {/* Links */}
            <div className={Toggle ? "links hidden" : "links text-text shadow-md translate-y-0 ease-in duration-200 gap-8 items-center z-30 bg-white rounded-lg px-3 py-8 sm:flex-row sm:gap-4 sm:relative top-32 fixed grid md:flex-row justify-center text-md sm:bg-nav sm:text-lg sm:top-0 sm:m-0 sm:px-0 sm:py-0 sm:flex sm:shadow-none"}>
                <a href="#home" className="text-primary ease duration-200 hover:text-primary flex flex-col items-center"><i className="fa-solid fa-house block sm:hidden text-xl"></i> Strona główna</a>
                <a href="#about" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center"><i className="fa-solid fa-user block sm:hidden text-xl"></i> O mnie</a>
                <a href="#skills" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center"><i className="fa-solid fa-list block sm:hidden text-xl"></i> Co umiem?</a>
                <a href="#projects" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center"><i className="fa-solid fa-folder block sm:hidden text-xl"></i>Projekty</a>
                <a href="#contact" className="ease duration-200 hover:text-primary sm:hover:text-white flex flex-col items-center"><i className="fa-solid fa-phone-volume block sm:hidden text-xl"></i> Kontakt</a>
                <a href="https://github.com/lis3q" target="_blank" className="text-md py-2 px-5 text-primary rounded-lg border-2 border-primary hover:text-white hover:bg-primary ease duration-200 block sm:hidden md:hidden">Mój GitHub</a>
            </div>

            {/* Button */}
            <div className="button hidden sm:block md:block">
                <a href="https://github.com/lis3q" target="_blank" className="text-lg py-2 px-5 text-primary rounded-lg border-2 border-primary hover:text-white hover:bg-primary ease duration-200">Mój profil GitHub</a>
            </div>

            {/* Hamburger menu */}
            <div onClick={() => showMenu(!Toggle)} className="hamburger-menu block md:hidden sm:hidden">
                <i className="fa-solid fa-bars text-white text-3xl cursor-pointer"></i>
            </div>
        </nav>
    )
}