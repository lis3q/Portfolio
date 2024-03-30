export const Navbar = () => {
    return (
        <nav className="navbar w-full bg-nav px-10 py-6 flex justify-between items-center">
            <div className="logo flex gap-4 items-center">
                <img src="img/logo.png" className="h-12"></img>
                <h1 className="font-bold text-white text-4xl">Szymon</h1>
            </div>

            <div className="links text-text flex gap-4 items-center text-lg">
                <a href="#home" className="text-primary ease duration-200">Strona główna</a>
                <a href="#about" className="hover:text-white ease duration-200">O mnie</a>
                <a href="#skills" className="hover:text-white ease duration-200">Co umiem?</a>
                <a href="#projects" className="hover:text-white ease duration-200">Projekty</a>
                <a href="#contact" className="hover:text-white ease duration-200">Kontakt</a>
            </div>

            <div className="button">
                <a href="#!" className="text-lg py-2 px-5 text-primary rounded-lg border-2 border-primary hover:text-white hover:bg-primary ease duration-200">Mój profil GitHub</a>
            </div>
        </nav>
    )
}