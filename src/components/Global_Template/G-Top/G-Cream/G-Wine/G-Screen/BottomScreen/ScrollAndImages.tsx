"use client";

import { usePathname } from "next/navigation";
// import { images } from "@/utils/Global/bottomImages";
import ScrollCTA from "./ScrollCta";

const images = {
	"/projects/fun-stats": [
		{ src: "/assets/img/chihiro.webp", alt: "Chihiro", className: "w-10 h-7 sm:w-12 sm:h-9 md:w-20 md:h-16 lg:w-24 lg:h-18" },
		{ src: "/assets/img/susuwatari.webp", alt: "Susuwatari", className: "w-5 h-5 md:w-8 md:h-8 lg:w-8 lg:h-8" }
	],
	"/about": [
		{ src: "/assets/img/sneakers.webp", alt: "Sneakers", className: "w-10 h-6 sm:w-12 sm:h-8 md:w-20 md:h-12 lg:w-24 lg:h-12" },
		{ src: "/assets/img/cat.webp", alt: "Cat", className: "w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" }
	]
};

export default function ScrollAndImages() {
	const pathname = usePathname();
	const currentImages = images[pathname as keyof typeof images] || [];

	return (
		<div className="flex justify-center">
			{currentImages[0] && (
				<div className="flex w-1/3 items-end justify-center">
					<img src={currentImages[0].src} alt={currentImages[0].alt} className={`${currentImages[0].className}`} />
				</div>
			)}
			<ScrollCTA />
			{currentImages[1] && (
				<div className="flex w-1/3 items-end justify-center">
					<img src={currentImages[1].src} alt={currentImages[1].alt} className={`${currentImages[1].className}`} />
				</div>
			)}
		</div>
	);
}