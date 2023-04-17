import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
	return (
		<header>
			<div className="grid grid-cols-3  p-10 items-center">
				<Bars3BottomLeftIcon className="h-8 w-8 cursor-pointer" />
				<Link
					href="/"
					prefetch={false}
					className="">
					<h1 className="font-serif text-4xl text-center underline decoration-orange-400 decoration-2">Headlinez</h1>
				</Link>
				<div className="flex items-center justify-end space-x-2"><DarkModeBtn/></div>
            </div>
            <NavLinks />
            <SearchBox/>
		</header>
	);
};

export default Header;
