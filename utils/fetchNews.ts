import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (countries?: string, categories?: string, keywords?: string, isDynamic?: boolean) => {
  const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&countries=ng&limit=100&offset=0&sort=published_desc`, {
    method: "GET",
    cache: isDynamic ? "no-cache" : "default",
     next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.MEDIASTACK_API_KEY}`,
    },
  });
  console.log("LOADING NEW DATA FROM API FOR COUNTRIES >>>", countries, "AND CATEGORIES >>>", categories, "AND KEYWORDS >>>", keywords);

  const newsResponse = await res.json();

  const news = sortNewsByImage(newsResponse)

  return news;
};

export default fetchNews;