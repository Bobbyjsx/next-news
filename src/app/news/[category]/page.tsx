import NewsList from "@/app/newsList/page";
import fetchNews from "../../../../utils/fetchNews";

type Props = {
    params: { category: Category };
}

export default async function NewsCategoryPage({ params: { category } }: Props) {
    const news:NewsResponse = await fetchNews(category)
  return (
    <div>
          <h1 className="font-sans  font-normal text-4xl uppercase underline decoration-2 decoration-orange-400 ring-offset-4 ">{category}</h1>
          <NewsList news={news}/>
    </div>
  )
}