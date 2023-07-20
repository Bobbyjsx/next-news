import "./globals.css";
import Header from "./header/page";
import Provider from "./Provider";

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
		<html
			lang="en"
			suppressHydrationWarning>
			<Provider>
				<body className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700 text-black dark:text-white">
					<Header />
					<div className="max-w-6xl mx-auto px-5">
						{children}
					</div>
				</body>
			</Provider>
		</html>
	);
}
