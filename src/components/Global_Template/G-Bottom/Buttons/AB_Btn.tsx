import Image from "next/image";

export default function AB_Btn() {
	return (
		<div className="w-[25%] h-full flex items-center justify-center">
			<Image src="/assets/SVG/AB.svg" alt="AB Button" className="w-[120px] sm:w-full max-w-[350px] mr-4 mb-24" width={120} height={120} />
		</div>
	);
}