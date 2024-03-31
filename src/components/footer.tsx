export const Footer = () => {
    return (
        <footer className="footer px-5 py-6 sm:py-10 sm:px-10 bg-lightBg">

            {/* Container */}
            <div className="container flex flex-col justify-center items-center gap-6">

                {/* Logo */}
                <div className="logo flex gap-4 items-center">
                    <img src="img/logo.png" className="h-10 sm:h-12"></img>
                    <h1 className="font-bold text-white text-3xl sm:text-4xl">Szymon</h1>
                </div>

                {/* Section links */}
                <div className="links flex gap-4">
                    <a href="#home" className="text-text text-lg ease duration-200 hover:text-primary">Strona główna</a>
                    <a href="#about" className="text-text text-lg ease duration-200 hover:text-primary">O mnie</a>
                    <a href="#skills" className="text-text text-lg ease duration-200 hover:text-primary">Co umiem?</a>
                    <a href="#projects" className="text-text text-lg ease duration-200 hover:text-primary">Projekty</a>
                    <a href="#contact" className="text-text text-lg ease duration-200 hover:text-primary">Kontakt</a>
                </div>

                {/* Icons */}
                <div className="icons flex gap-4 text-white text-xl">
                    <a href="https://www.facebook.com/slxrx/"><i className="fa-brands fa-facebook cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                    <a href="https://www.instagram.com/lis3q_/"><i className="fa-brands fa-instagram cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                    <a href="https://github.com/lis3q"><i className="fa-brands fa-github cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                </div>

                {/* Copyright paragraph */}
                <p className="text-white font-semibold text-md">© 2024 Szymon Lisek</p>

            </div>

        </footer>
    )
}