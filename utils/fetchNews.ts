import axios from "axios";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
	categories?: string,
	keywords?: string,
	isDynamic?: boolean
) => {
	const categoriesArray = categories?.split(",");

	const headers = {
		"Content-Type": "application/json",
		Authorization: `Apikey ${process.env.NEWS_API_KEY}`,
	};

	let url;

	if (keywords) {
		url = `https://newsapi.org/v2/everything?q=${keywords}&language=en`;
	} else if (categoriesArray?.length! < 2) {
		url = `https://newsapi.org/v2/top-headlines?category=${categories}&language=en`;
	} else {
		url = `https://newsapi.org/v2/top-headlines?language=en`;
	}

	try {
		const response = await axios.get(url, { headers });

		const newsResponse = response.data;

		const news = sortNewsByImage(newsResponse);
		return news;
	} catch (error) {
		console.error("Error fetching news:", error);
		return null;
	}
};

export default fetchNews;
