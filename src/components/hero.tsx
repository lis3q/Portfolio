export const Hero = () => {
    return (
        <div className="hero bg-darkBg mx-auto px-5 py-6 flex flex-col-reverse justify-between items-center sm:flex-row sm:py-16 sm:px-10 h-full sm:h-screen pt-32 sm:pt-60">
            <div className="content">
                <h2 className="text-white text-3xl text-center mt-6 font-medium sm:text-3xl sm:text-left sm:mt-0">Cześć tu <span className="text-primary">Szymon</span></h2>
                <h1 className="text-white text-3xl text-center font-bold mt-1 sm:text-5xl sm:text-left">Front-End Developer</h1>
                <p className="text-text w-full text-justify font-light text-xl mt-1 sm:w-2/4 sm:text-xl">Jestem kreatywnym Front-End Developerem gotowym na nowe wyzwania. Moją pasją jest tworzenie estetycznych i funkcjonalnych stron internetowych. Zawsze stawiam na innowacyjne podejście i szybkie uczenie się. Chętnie przyjmę każde nowe zadanie, gotowy na rozwój i współpracę. Hajs mnie nie obchodzi, liczy się dla mnie pasja do kodowania i tworzenia fantastycznych projektów! 🚀💻</p>
                <div className="buttons flex justify-center items-center mt-5 gap-4 sm:justify-start">
                    <a href="#about" className="text-primary border-2 text-md rounded-lg px-6 py-2 flex items-center gap-3 border-primary ease duration-200 hover:text-white hover:bg-primary sm:px-6 sm:py-2 sm:text-lg"><i className="fa-solid fa-user"></i> O mnie</a>
                    <a href="#about" className="text-white border-2 text-md rounded-lg px-6 py-2 flex items-center gap-3 border-primary bg-primary sm:px-6 sm:py-2 sm:text-lg"><i className="fa-solid fa-folder"></i> Moje projekty</a>
                </div>
            </div>

            <div className="image">
                <img src="img/me.jpg" alt="me" className="pl-4 pt-2 pr-2 pb-4 h-1/3 w-full rounded-lg bg-primary"></img>
            </div>
        </div>
    )
}