import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export const Contact = () => {

    // Form validation
    const schema = yup.object().shape({
        firstName: yup.string().required("To pole jest wymagane"),
        lastName: yup.string().required("To pole jest wymagane"),
        email: yup.string().email("To nie wygląda na poprawny adres e-mail").required("To pole jest wymagane"),
        phoneNr: yup.string().notRequired().typeError(""),
        message: yup.string().required("To pole jest wymagane").min(10, "Wymagane minimum 10 znaków")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data: any) => {
        reset();
    }


    return (
        <section className="contact px-5 py-6 sm:py-16 sm:px-10 bg-darkBg" id="contact">

            {/* Heading */}
            <div className="heading text-xl sm:text-2xl text-white font-semibold">Zostańmy w kontakcie</div>

            {/* Container */}
            <div className="container mt-10 text-center mx-auto">
                <div className="intro">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">Stwórzmy <span className="text-primary">razem</span> projekt!</h1>
                    <p className="text-text font-medium text-md sm:text-xl text-center mx-auto my-1 w-full sm:w-1/2">Jestem gotowy na współpracę nad interesującymi projektami. Jeśli masz pomysł lub potrzebujesz wsparcia w realizacji projektu, chętnie dołączę do zespołu. Skontaktuj się ze mną, abyśmy mogli zacząć tworzyć razem!</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmitHandler)} className="form flex flex-col gap-4 items-center mt-10">
                    <input {...register("firstName")} type="text" maxLength={57} placeholder="*Imię" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.firstName?.message}</p>
                    <input {...register("lastName")} type="text" maxLength={35} placeholder="*Nazwisko" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.lastName?.message}</p>
                    <input {...register("email")} type="text" placeholder="*E-mail" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.email?.message}</p>
                    <input {...register("phoneNr")} type="text" placeholder="Nr. tel" maxLength={15} className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.phoneNr?.message}</p>
                    <textarea {...register("message")} placeholder="*Wiadomość" maxLength={800} className="text-white outline-none w-full resize-none sm:w-1/3 bg-inherit h-80 px-4 text-lg py-4 rounded-lg border-2 border-white placeholder-text"></textarea>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.message?.message}</p>
                    <input type="submit" value="Wyślij wiadomość" className="text-white w-full sm:w-1/3 bg-primary font-bold px-4 text-lg sm:text-xl py-4 rounded-lg cursor-pointer opacity-75 hover:opacity-100 ease duration-200"></input>
                </form>
            </div>

        </section>
    )
}