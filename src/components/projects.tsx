export const Projects = () => {
    return (
        <section className="projects px-5 py-6 sm:py-16 sm:px-10 bg-lightBg" id="projects">

            {/* Heading */}
            <div className="heading text-2xl text-white font-semibold">Moje projekty</div>

            {/* Container */}
            <div className="container mt-10 flex flex-col gap-16 justify-center items-center">

                {/* Filters */}
                <div className="filters grid grid-cols-2 gap-5 sm:flex sm:gap-2">
                    <button className="w-max h-10 px-6 py-2 text-white text-center font-bold bg-primary rounded-lg">Wszystko</button>
                    <button className="w-max h-10 px-6 py-2  text-center text-white font-bold rounded-lg hover:bg-darkBg">Landing page</button>
                    <button className="w-max h-10 px-6 py-2  text-center text-white font-bold rounded-lg hover:bg-darkBg">E-Commerce</button>
                    <button className="w-max h-10 px-6 py-2  text-center text-white font-bold rounded-lg hover:bg-darkBg">Aplikacje</button>
                </div>

                {/* Projects */}
                <div className="projects grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-center">

                    {/* Project */}
                    <div className="project bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image h-44 bg-white rounded-lg mb-4"><img src="img/projectsimg/project1.png" alt="project image"></img></div>
                        <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                        <p className="text-text font-light text-lg text-justify">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </div>

                    {/* Project */}
                    <div className="project bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image h-44 bg-white rounded-lg mb-4"><img src="img/projectsimg/project1.png" alt="project image"></img></div>
                        <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                        <p className="text-text font-light text-lg text-justify">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </div>

                    {/* Project */}
                    <div className="project bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image h-44 bg-white rounded-lg mb-4"><img src="img/projectsimg/project1.png" alt="project image"></img></div>
                        <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                        <p className="text-text font-light text-lg text-justify">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}