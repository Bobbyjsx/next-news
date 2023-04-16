import Link from "next/link";

interface Props {
	category: string;
	isActive: boolean;
}

const NavLink = ({ category, isActive }: Props) => {
  return <Link href={`/news/${category}`} className={`navlink ${isActive && "underline decoration-orange ring-offset-4 font-bold"}`}>{category}</Link>;
};

export default NavLink;
