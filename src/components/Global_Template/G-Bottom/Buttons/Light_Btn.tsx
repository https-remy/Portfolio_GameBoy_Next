"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Light_Btn() {

	const pathname = usePathname();

	const createClassName = (): string => {
		return pathname.includes("/projects") || pathname.includes("/about") ? "w-[10%] max-w-[110px] mb-4" : "w-[25%] max-w-[110px]";
	}

	return (
		<div className="w-full h-1/8 flex flex-col items-center justify-center">
			<Image src="/assets/SVG/LightBtn.svg" alt="Light" className={createClassName()} width={110} height={110} />
		</div>
	);
}