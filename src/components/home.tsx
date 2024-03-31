import { Hero } from "./hero"
import { Navbar } from "./navbar"

export const Home = () => {
    return (
        <section id="home">
            <Navbar />
            <Hero />
        </section>
    )
}