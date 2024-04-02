import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <button className="w-9 h-9 text-white font-semibold cursor-pointer rounded-full bg-primary opacity-75 hover:opacity-100 ease duration-200" onClick={() => swiper.slideNext()}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>;
};

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return <button className="mt-5 mr-2 w-9 h-9 text-white font-semibold cursor-pointer rounded-full bg-primary opacity-75 hover:opacity-100 ease duration-200" onClick={() => swiper.slidePrev()}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>;
};


export const Projects = () => {
    return (
        <section className="projects px-5 py-6 sm:py-16 sm:px-10 bg-lightBg" id="projects">

            {/* Heading */}
            <div className="heading text-xl sm:text-2xl text-white font-semibold">Moje projekty</div>

            {/* Container */}
            <div className="container mt-10 flex flex-col gap-16 justify-center items-center mx-auto">

                {/* Projects */}
                <Swiper 
                    className="w-full"
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1366: {
                            slidesPerView: 3,
                        }
                        }}
                >

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>

                    {/* Project */}
                    <SwiperSlide className="bg-darkBg px-8 py-7 rounded-lg">
                        <div className="image mb-6"><img src="img/projectsimg/project1.png" className="h-44 rounded-lg" alt="project image"></img></div>
                            <h1 className="text-white font-semibold text-3xl">Become a Front-End</h1>
                            <p className="text-text font-light text-lg text-justify leading-5 sm:leading-6">Landing page z nowoczesnym designem i ilustracjami, którego zadaniem jest pomóc w zostaniu Front-End Developerem. Na stronie znajdziesz sekcje takie jak: strona główna, o nas, naucz się, recenzje i kontakt. Każda sekcja została starannie wykonana, a strona jest w pełni responsywna.</p>
                        <div className="technologies flex gap-2 font-semibold text-text text-lg mt-5">
                            <h3>ReactJS</h3> 
                            <span className="text-primary font-bold">•</span> 
                            <h3>CSS</h3>
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 text-white text-lg mt-5">
                            <a href="https://github.com/lis3q" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-brands fa-github mr-2"></i> Zobacz kod</a>
                            <a href="#!" target="_blank" className="hover:text-primary ease duration-200"><i className="fa-solid fa-up-right-from-square mr-2"></i> Zobacz stronę</a>
                        </div>
                    </SwiperSlide>


                    <SwiperButtonPrev></SwiperButtonPrev>
                    <SwiperButtonNext></SwiperButtonNext>

                </Swiper>

            </div>

        </section>
    )
}