export const Contact = () => {
    return (
        <section className="contact px-5 py-6 sm:py-16 sm:px-10 bg-darkBg" id="contact">

            {/* Heading */}
            <div className="heading text-2xl text-white font-semibold">Zostańmy w kontakcie</div>

            {/* Container */}
            <div className="container mt-10 text-center">
                <div className="intro">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">Stwórzmy <span className="text-primary">razem</span> projekt!</h1>
                    <p className="text-text font-medium text-md sm:text-xl text-center mx-auto my-1 w-full sm:w-1/2">Jestem gotowy na współpracę nad interesującymi projektami. Jeśli masz pomysł lub potrzebujesz wsparcia w realizacji projektu, chętnie dołączę do zespołu. Skontaktuj się ze mną, abyśmy mogli zacząć tworzyć razem!</p>
                </div>

                <form className="form flex flex-col gap-4 justify-center items-center mt-10">
                    <input type="text" placeholder="*Imię" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <input type="text" placeholder="*Nazwisko" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <input type="text" placeholder="*E-mail" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <input type="text" placeholder="Nr. tel" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <textarea placeholder="*Wiadomość" className="text-white outline-none w-full resize-none sm:w-1/3 bg-inherit h-80 px-4 text-lg py-4 rounded-lg border-2 border-white placeholder-text"></textarea>
                    <input type="submit" value="Wyślij wiadomość" className="text-white w-full sm:w-1/3 bg-primary font-bold px-4 text-xl py-4 rounded-lg cursor-pointer opacity-75 hover:opacity-100 ease duration-200"></input>
                </form>
            </div>

        </section>
    )
}