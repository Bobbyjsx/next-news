import NewsList from "@/app/newsList/page";
import fetchNews from "../../../../utils/fetchNews";
import Loading from "@/app/loading";

type Props = {
    params: { category: Category };
}

export default async function NewsCategoryPage({ params: { category } }: Props) {
    const news  = await fetchNews(category)
  return (
		<div>
			<h1 className="font-sans  font-normal text-4xl uppercase underline decoration-2 decoration-orange-400 ring-offset-4 ">
				{category}
			</h1>
			{news ? <NewsList news={news} /> : <Loading />}
		</div>
  );
}