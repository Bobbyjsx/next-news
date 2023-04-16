import "./globals.css";
import Header from "./header/page";

export const metadata = {
	title: "Headlinez",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
				<Header />
				<div className="max-w-6xl mx-auto px-5">
					{children}
				</div>
			</body>
		</html>
	);
}
