import Article from "./Article"

type Props = {
  news: NewsResponse
}
const NewsList = ({ news }: Props) => {
	// console.log("articles >>>", news.articles);
	// console.log("news>>>",news);
  return (
		<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 ">
			{news?.articles?.map((article) => {
				return (
					<Article
						key={article.title}
						article={article}
					/>
				);
			})}
		</main>
  );
}

export default NewsList
