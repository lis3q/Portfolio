export const Hero = () => {
    return (
        <div className="hero bg-darkBg px-10 py-16 h-screen flex justify-between items-center">
            <div className="content">
                <h2 className="text-white text-4xl font-medium">Cześć tu <span className="text-primary">Szymon</span></h2>
                <h1 className="text-white text-6xl font-bold mt-1">Front-End Developer</h1>
                <p className="text-text w-3/4 text-justify font-light text-2xl mt-1">Jestem kreatywnym Front-End Developerem gotowym na nowe wyzwania. Moją pasją jest tworzenie estetycznych i funkcjonalnych stron internetowych. Zawsze stawiam na innowacyjne podejście i szybkie uczenie się. Chętnie przyjmę każde nowe zadanie, gotowy na rozwój i współpracę. Hajs mnie nie obchodzi, liczy się dla mnie pasja do kodowania i tworzenia fantastycznych projektów! 🚀 💻</p>
                <div className="buttons flex items-center mt-5 gap-4">
                    <a href="#about" className="text-primary border-2 text-xl rounded-lg px-8 py-3 flex items-center gap-3 border-primary ease duration-200 hover:text-white hover:bg-primary"><i className="fa-solid fa-user"></i> O mnie</a>
                    <a href="#about" className="text-white border-2 text-xl rounded-lg px-8 py-3 flex items-center gap-3 border-primary bg-primary"><i className="fa-solid fa-folder"></i> Moje projekty</a>
                </div>
            </div>

            <div className="image">
                <img src="img/me.jpg" alt="me" className="pl-4 pt-2 pr-2 pb-4 rounded-lg bg-primary"></img>
            </div>
        </div>
    )
}