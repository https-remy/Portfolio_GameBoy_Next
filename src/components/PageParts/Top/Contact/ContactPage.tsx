"use client";

import Link from "next/link";
import BackgroundSign from "@/components/Global_Template/G-Top/G-Cream/G-Wine/G-Screen/BackgroundSign";
import { useState, useEffect } from "react";

export default function ContactPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		setIsValid(firstName && lastName && email && message ? true : false);
	}, [firstName, lastName, email, message]);

	const clearForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
		setIsValid(false);
	};

	const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify({ firstName, lastName, email, message }),
		});
		clearForm();
		alert("Mail envoyé ! Merci pour votre message. Je reviens vers vous dans les plus brefs délais.");
	};

	return (
		<div className="flex flex-row w-full h-full">
			<nav className="flex flex-col justify-center items-center w-1/3 h-full relative z-1">
				<ul className="flex flex-col gap-4 sm:gap-6 md:gap-10 lg:gap-14 ml-2">
					<li>
						<Link href="https://github.com/remyShift" target="_blank" className="flex items-center gap-2 font-pressStart2P text-[0.7rem] sm:text-sm md:text-base lg:text-lg hover:underline">
							<img src="/assets/icons/GithubIcon.png" alt="Person" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
							Github
						</Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/in/r%C3%A9my-c-bb8b11296/" target="_blank" className="flex items-center gap-2 font-pressStart2P text-[0.7rem] sm:text-sm md:text-base lg:text-lg hover:underline">
							<img src="/assets/icons/LinkedinIcon.png" alt="Projects" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
							Linkedin
						</Link>
					</li>
					<li>
						<Link href="mailto:remy.engassac@icloud.com" target="_blank" className="flex items-center gap-2 font-pressStart2P text-[0.7rem] sm:text-sm md:text-base lg:text-lg hover:underline">
							<img src="/assets/icons/Mail.png" alt="Mail" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
							Mail
						</Link>
					</li>
				</ul>
			</nav>

			<div className="flex flex-col justify-center items-center w-1/3 h-full">
				<h1 className="font-pressStart2P text-pretty text-center absolute w-[85%] top-7 md:top-16 lg:top-18 xl:top-18 text-xs sm:text-sm md:text-2xl">Interréssé ? Curieux ? N'attendez plus, Contactez moi !</h1>
				<BackgroundSign />
			</div>

			<div className="flex flex-col justify-end w-1/3 h-full relative z-1">
				<form onSubmit={onSubmitHandler} className="w-[95%] sm:w-[90%] h-full flex flex-col justify-end sm:gap-1 md:gap-4">
					<div className="w-full flex flex-col justify-center">
						<label htmlFor="lastName" className="font-pressStart2P text-[0.7rem] sm:text-xs md:text-sm lg:text-base">Nom :</label>
						<input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="rounded w-full h-1/2 sm:h-auto bg-gray-300 border-[0.09rem] px-1 md:py-1 font-openSans border-gray-400 focus:border-gray-800 focus:outline-none" />
					</div>

					<div className="w-full flex flex-col justify-center">
						<label htmlFor="firstName" className="font-pressStart2P text-[0.7rem] sm:text-xs md:text-sm lg:text-base">Prénom :</label>
						<input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="rounded w-full h-1/2 sm:h-auto bg-gray-300 border-[0.09rem] px-1 md:py-1 font-openSans border-gray-400 focus:border-gray-800 focus:outline-none" />
					</div>

					<div className="w-full flex flex-col justify-center">
						<label htmlFor="email" className="font-pressStart2P text-[0.7rem] sm:text-xs md:text-sm lg:text-base">Mail :</label>
						<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded w-full h-1/2 sm:h-auto bg-gray-300 border-[0.09rem] px-1 md:py-1 font-openSans border-gray-400 focus:border-gray-800 focus:outline-none" />
					</div>

					<div className="w-full flex flex-col justify-center">
						<label htmlFor="message" className="font-pressStart2P text-[0.7rem] sm:text-xs md:text-sm lg:text-base">Message :</label>
						<textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded w-full h-1/2 sm:h-auto md:h-40 bg-gray-300 border-[0.09rem] px-1 md:py-1 font-openSans border-gray-400 focus:border-gray-800 focus:outline-none resize-none" />
					</div>
					<div className="flex justify-center items-center w-full">
						{isValid && (
							<button type="submit" className="w-[70%] h-auto p-1 outline-none focus:outline-black rounded bg-wine hover:bg-wine/80 text-cream text-center text-wrap text-[0.5rem] sm:text-[0.7rem] md:text-xs lg:text-base font-pressStart2P">Envoyer</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}