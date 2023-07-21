import fetchNews from "../../../utils/fetchNews";
import Loading from "../loading";
import NewsList from "../newsList/page";

type Props = {
	searchParams?: { term: string };
};
const SearchPage = async ({ searchParams }: Props) => {
	const news = await fetchNews("general", searchParams?.term, true);
	return (
		<div>
			<h1 className="font-semibold text-4xl">
				Search Result For: {searchParams?.term}
			</h1>
			{news ? <NewsList news={news} /> : <Loading />}
		</div>
	);
};

export default SearchPage;
