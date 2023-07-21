import { categories } from "../../constants";
import NewsList from "./newsList/page";
import fetchNews from "../../utils/fetchNews";
import Loading from "@/app/loading";
import response from "../../dummyResponse.json";

const page = async () => {
	const news = await fetchNews(categories.join(","));
	// const news: NewsResponse = response
	return <div>{news ? <NewsList news={news} /> : <Loading />}</div>;
};

export default page;
