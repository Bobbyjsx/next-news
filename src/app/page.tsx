import { categories } from "../../constants";
import NewsList from "./newsList/page";
import fetchNews from "../../utils/fetchNews";
import response from "../../dummyResponse.json"


const page = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList news={ news } />
    </div>
  );
}

export default page
