import type { Metadata } from "next";
import "./globals.css";
import GlobalTemplate from "@/components/Global_Template/Global_Template";
import { gillSans, gillSansBold, gillSansItalic, gillSansBoldItalic } from "../fonts";
import { Press_Start_2P } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
const pressStart2P = Press_Start_2P({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-pressStart2P",
});

export const metadata: Metadata = {
	title: "Portfolio remyShift",
	description: "Portfolio Gameboy de Rémy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${gillSans.variable} ${gillSansBold.variable} ${gillSansItalic.variable} ${gillSansBoldItalic.variable} ${pressStart2P.variable} h-[100dvh]`}>
			<body className="w-full h-full">
				<GlobalTemplate>
					{children}
				</GlobalTemplate>
				<SpeedInsights />
			</body>
		</html>
	);
}
