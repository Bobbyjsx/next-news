export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = Array.isArray(news?.articles) ? news?.articles.filter((items) => items.urlToImage !== null) : [];
    const newsWithoutImage = Array.isArray(news?.articles) ? news?.articles.filter((items) => items.urlToImage === null) : [];


    const sortedNews = {
        articles: [...newsWithImage, ...newsWithoutImage]
    };

    return sortedNews
};