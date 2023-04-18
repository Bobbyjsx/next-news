import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (categories?: string, keywords?: string, isDynamic?: boolean) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Apikey ${process.env.MEDIASTACK_API_KEY}`,
    categories: categories ?? "",
    keywords: keywords ?? "",
  });

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?domains=bleacherreport.com,channelstv.com,cnn.com,thenextweb.com,vice.com,techcrunch.com,washingtonpost.com,bbc.com,edition.cnn.com,us.cnn.com/world,engadget.com,nytimes.com,wired.com,reuters.com,espn.com,apnews.com&language=en&apiKey=${process.env.MEDIASTACK_API_KEY}`,
    {
      method: "GET",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers,
    }
  );

  const newsResponse = await res.json();

  const news = sortNewsByImage(newsResponse);

  return news;
};

export default fetchNews;
