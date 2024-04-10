import { motion } from "framer-motion"


export const About = () => {
    return (
        <section className="about px-5 py-6 sm:py-16 sm:px-10 bg-lightBg" id="about">

            {/* Heading */}
            <motion.div 
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="heading text-xl sm:text-2xl text-white font-semibold">O mnie
            </motion.div>

            {/* Container */}
            <div className="container mt-10 grid sm:grid-cols-2 grid-cols-1 gap-7 sm:gap-0 mx-auto">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="image">
                    <img src="img/img.jpg" className="w-max object-cover rounded-lg" alt="me"></img>
                </motion.div>

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="content"
                >

                    {/* Text */}
                    <h1 className="text-white font-bold text-3xl sm:text-4xl">Jestem pasjonatem Front-Endu</h1>
                    <p className="text-text font-regular sm:text-justify text-left  mt-2 sm:text-xl text-lg">który czerpie radość z tworzenia inspirujących i funkcjonalnych stron internetowych.<br></br><br></br>Moje podejście opiera się na kombinacji <b>kreatywności</b> i <b>precyzji</b> kodowania, co sprawia, że każdy projekt staje się dla mnie unikalnym wyzwaniem do pokonania.<br></br><br></br> Zdobyłem doświadczenie w projektach różnorodnych pod względem skali i złożoności, zawsze dążąc do <b>doskonałości</b> w każdym detalu.<br></br><br></br> Chętnie przyjmuję nowe <b>wyzwania</b>, gotów do eksplorowania nowych technologii i <b>doskonalenia</b> swoich umiejętności.</p>

                    {/* Buttons */}
                    <div className="buttons flex flex-col sm:flex-row justify-start items-start mt-5 gap-4 text-center">
                        <a href="#projects" className="text-primary border-2 text-lg rounded-lg py-2 flex items-center gap-3 border-primary bg-no-repeat justify-center bg-[length:0_100%] bg-primary-gradient ease duration-300 hover:bg-[length:100%_100%] hover:text-white sm:px-8 sm:py-3 sm:text-lg w-full px-4 sm:w-auto"><i className="fa-solid fa-folder"></i> Zobacz projekty</a>
                        <a href="#about" className="text-white border-2 text-lg rounded-lg py-2 flex items-center gap-3 border-primary justify-center bg-primary sm:px-8 sm:py-3 sm:text-lg sm:w-auto px-4 w-full"><i className="fa-solid fa-briefcase"></i> Pobierz CV</a>
                    </div>

                    {/* Icons */}
                    <div className="icons flex gap-4 text-white text-xl mt-10">
                        <a href="https://www.facebook.com/slxrx/"><i className="fa-brands fa-facebook cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                        <a href="https://www.instagram.com/lis3q_/"><i className="fa-brands fa-instagram cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                        <a href="https://github.com/lis3q"><i className="fa-brands fa-github cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-200"></i></a>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}