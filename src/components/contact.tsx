import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    // Form validation
    const schema = yup.object().shape({
        firstName: yup.string().required("To pole jest wymagane"),
        lastName: yup.string().required("To pole jest wymagane"),
        email: yup.string().email("To nie wygląda na poprawny adres e-mail").required("To pole jest wymagane"),
        message: yup.string().required("To pole jest wymagane").min(10, "Wymagane minimum 10 znaków")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    // Sending email with EmailJS
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: object) => {
        if (form.current) {
            emailjs.sendForm('service_kthim4f', 'template_xk6yhpl', form.current, {
                publicKey: 'L1nGhYYZjrJsFZz2s',
            })
            .then((response) => {
                console.log('Email sent successfully:', response);
                reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
        };
    }

      const onSubmit = (data: object) => {
        sendEmail(data);
      }


    return (
        <section className="contact px-5 py-6 sm:py-16 sm:px-10 bg-darkBg" id="contact">

            {/* Heading */}
            <motion.div 
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="heading text-xl sm:text-2xl text-white font-semibold">Zostańmy w kontakcie
            </motion.div>

            {/* Container */}
            <div className="container mt-10 text-center mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -120}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="intro">

                    <h1 className="text-white text-3xl sm:text-4xl font-bold">Stwórzmy <span className="text-primary">razem</span> projekt!</h1>
                    <p className="text-text font-medium text-md sm:text-xl text-center mx-auto my-1 w-full sm:w-1/2">Jestem gotowy na współpracę nad interesującymi projektami. Jeśli masz pomysł lub potrzebujesz wsparcia w realizacji projektu, chętnie dołączę do zespołu. Skontaktuj się ze mną, abyśmy mogli zacząć tworzyć razem!</p>
                </motion.div>

                {/* Form */}
                <motion.form 
                    initial={{ opacity: 0, y: -120}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="form flex flex-col gap-4 items-center mt-10">

                    <input {...register("firstName")} type="text" maxLength={57} name="user_name" placeholder="*Imię" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.firstName?.message}</p>
                    <input {...register("lastName")} type="text" name="user_surname" maxLength={35} placeholder="*Nazwisko" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.lastName?.message}</p>
                    <input {...register("email")} type="text" placeholder="*E-mail" name="user_email" className="text-white outline-none w-full sm:w-1/3 bg-inherit px-4 text-lg py-2 rounded-lg border-2 border-white placeholder-text"></input>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.email?.message}</p>
                    <textarea {...register("message")} placeholder="*Wiadomość" name="message" maxLength={800} className="text-white outline-none w-full resize-none sm:w-1/3 bg-inherit h-80 px-4 text-lg py-4 rounded-lg border-2 border-white placeholder-text"></textarea>
                    <p className="text-red font-regular text-md sm:text-lg -mt-4">{errors.message?.message}</p>
                    <input type="submit" value="Wyślij wiadomość" className="text-white w-full sm:w-1/3 bg-primary font-bold px-4 text-lg sm:text-xl py-4 rounded-lg cursor-pointer opacity-75 hover:opacity-100 ease duration-200"></input>
                </motion.form>
            </div>

        </section>
    )
}