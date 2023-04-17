export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = Array.isArray(news?.data) ? news?.data.filter((items) => items.image !== null) : [];
    const newsWithoutImage = Array.isArray(news?.data) ? news?.data.filter((items) => items.image === null) : [];


    const sortedNews = {
        pagination: news?.pagination,
        data: [...newsWithImage, ...newsWithoutImage]
    };
    console.log("news>>", news);

    return sortedNews
};