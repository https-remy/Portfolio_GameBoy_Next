interface TimelineContentProps {
	title: string;
	date: string;
	description: string;
}

export default function TimelineContent({ title, date, description }: TimelineContentProps) {
	return (
		<div className="ml-6 flex flex-col w-full md:max-w-lg border-[#C6AF87] border-2 rounded-lg bg-wine p-4 md:p-6 shadow-lg shadow-black/30">
			<div className="mb-4 flex justify-between gap-4">
				<p
					className="text-sm md:text-lg lg:text-xl font-gillSans font-bold text-white"
				>
					{title}
				</p>
				<p
					className="text-xs md:text-base lg:text-lg font-gillSans italic text-white"
				>
					{date}
				</p>
			</div>
			<p className="mb-6 text-white font-gillSans text-xs lg:text-base">
				{description}
			</p>
		</div>
	);
}