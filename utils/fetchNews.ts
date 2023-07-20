import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
	categories?: string,
	keywords?: string,
	isDynamic?: boolean
) => {
	const categoriesArray = categories?.split(",");

	const headers = new Headers({
		"Content-Type": "application/json",
		Authorization: `Apikey ${process.env.NEWS_API_KEY}`,
	});

	let url;

	if (keywords) {
		url = `https://newsapi.org/v2/everything?q=${keywords}&language=en`;
	} else if (categoriesArray?.length! < 2) {
		url = `https://newsapi.org/v2/top-headlines?category=${categories}&language=en`;
	} else {
		url = `https://newsapi.org/v2/top-headlines?language=en`;
	}

	const res = await fetch(url, {
		method: "GET",
		cache: isDynamic ? "no-cache" : "default",
		next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
		headers,
	});

	const newsResponse = await res.json();

	const news = sortNewsByImage(newsResponse);
	return news;
};

export default fetchNews;
