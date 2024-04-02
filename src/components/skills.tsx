import { motion } from "framer-motion";

export const Skills = () => {
    return (
        <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="skills px-5 py-6 sm:py-16 sm:px-10 bg-darkBg" id="skills">

            {/* Heading */}
            <div className="heading text-xl sm:text-2xl text-white font-semibold">Moje umiejętności</div>

            {/* Container */}
            <div className="container mt-10 flex flex-col sm:flex-row justify-center items-center gap-12 mx-auto">

                {/* Box */}
                <div className="box flex flex-col gap-9 bg-lightBg rounded-lg px-4 sm:px-9 py-6 w-full sm:w-auto">
                    <h1 className="text-primary font-bold text-center text-3xl">Front-End</h1>

                    {/* Cols */}
                    <div className="cols flex flex-row sm:flex-row gap-0 justify-between sm:justify-normal sm:gap-36">
                        <div className="left flex flex-col gap-3 sm:gap-7">
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">HTML</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">CSS</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">JavaScript</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">Bootstrap</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Początkujący</div>
                            </div>
                        </div>

                        <div className="right flex flex-col gap-3 sm:gap-7">
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">React</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">jQuery</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">Saas</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Początkujacy</div>
                            </div>
                            <div className="col">
                                <div className="title flex gap-3 items-center">
                                    <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                    <h2 className="font-medium text-2xl text-white">TypeScript</h2>
                                </div>
                                <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Początkujący</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Box */}
                <div className="box flex flex-col gap-9 bg-lightBg rounded-lg px-4 sm:px-9 py-6 w-full sm:w-auto">
                    <h1 className="text-primary font-bold text-center text-3xl">Narzędzia</h1>

                    {/* Cols */}
                    <div className="cols flex flex-row sm:flex-row gap-0 justify-between sm:justify-normal sm:gap-36">
                            <div className="left flex flex-col gap-3 sm:gap-7">
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">Figma</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">GIMP</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">VS Code</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">Git</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                            </div>

                            <div className="right flex flex-col gap-3 sm:gap-7">
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">NPM</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">FireBase</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Początkujący</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">Tailwind</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Zaawansowany</div>
                                </div>
                                <div className="col">
                                    <div className="title flex gap-3 items-center">
                                        <i className="fa-regular fa-square-check text-xl text-primary hidden sm:flex"></i>
                                        <h2 className="font-medium text-2xl text-white">GitHub</h2>
                                    </div>
                                    <div className="level text-text font-regular text-sm sm:text-lg -mt-1">Początkujący</div>
                                </div>
                            </div>
                    </div>

                </div>
            </div>

        </motion.section>
    )
}

function componentDidMount() {
    throw new Error('Function not implemented.');
}
