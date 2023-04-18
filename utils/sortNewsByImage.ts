export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = Array.isArray(news?.articles) ? news?.articles.filter((items) => items.urlToImage !== null) : [];
    const newsWithoutImage = Array.isArray(news?.articles) ? news?.articles.filter((items) => items.urlToImage === null) : [];


    const sortedNews = {
        // details: news?.status,
        articles: [...newsWithImage, ...newsWithoutImage]
    };
    // console.log("news>>", news);

    return sortedNews
};