export const About = () => {
    return (
        <section className="about px-5 py-6 sm:py-16 sm:px-10 bg-lightBg" id="about">

            {/* Heading */}
            <div className="heading text-xl sm:text-2xl text-white font-semibold">O mnie</div>

            {/* Container */}
            <div className="container mt-10 grid sm:grid-cols-2 grid-cols-1 gap-7 sm:gap-0 mx-auto">

                {/* Image */}
                <div className="image"><img src="img/img.jpg" className="h-96 w-96 object-cover rounded-lg" alt="me"></img></div>

                {/* Content */}
                <div className="content">

                    {/* Text */}
                    <h1 className="text-white font-bold text-3xl sm:text-4xl">Jestem pasjonatem Front-Endu</h1>
                    <p className="text-text font-regular sm:text-justify text-left  mt-2 sm:text-xl text-lg">który czerpie radość z tworzenia inspirujących i funkcjonalnych stron internetowych.<br></br><br></br>Moje podejście opiera się na kombinacji <b>kreatywności</b> i <b>precyzji</b> kodowania, co sprawia, że każdy projekt staje się dla mnie unikalnym wyzwaniem do pokonania.<br></br><br></br> Zdobyłem doświadczenie w projektach różnorodnych pod względem skali i złożoności, zawsze dążąc do <b>doskonałości</b> w każdym detalu.<br></br><br></br> Chętnie przyjmuję nowe <b>wyzwania</b>, gotów do eksplorowania nowych technologii i <b>doskonalenia</b> swoich umiejętności.</p>

                    {/* Buttons */}
                    <div className="buttons flex flex-col sm:flex-row justify-start items-start mt-5 gap-4">
                        <a href="#about" className="text-primary border-2 text-lg rounded-lg py-2 flex items-center gap-3 border-primary ease duration-200 hover:text-white hover:bg-primary sm:px-8 sm:py-3 sm:text-lg w-48 px-4 sm:w-auto"><i className="fa-solid fa-folder"></i> Zobacz projekty</a>
                        <a href="#about" className="text-white border-2 text-lg rounded-lg py-2 flex items-center gap-3 border-primary bg-primary sm:px-8 sm:py-3 sm:text-lg w-48 sm:w-auto px-4"><i className="fa-solid fa-briefcase"></i> Pobierz CV</a>
                    </div>

                    {/* Icons */}
                    <div className="icons flex gap-4 text-white text-xl mt-10">
                        <a href="https://www.facebook.com/slxrx/"><i className="fa-brands fa-facebook cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                        <a href="https://www.instagram.com/lis3q_/"><i className="fa-brands fa-instagram cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                        <a href="https://github.com/lis3q"><i className="fa-brands fa-github cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                    </div>

                </div>
            </div>
        </section>
    )
}