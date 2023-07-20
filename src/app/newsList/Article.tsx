import timeSincePublished from "../publishedTime";
import ReadMoreBtn from "./readMore/ReadMoreBtn";

type Props = {
	article: Article;
};
const Article = ({ article }: Props) => {
	return (
		<article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out hover:text-black w-full">
			{article.urlToImage && (
				<img
					src={article.urlToImage}
					alt={
						article.title ? article.title : "news poster"
					}
					className="h-52  w-full object-cover rounded-t-lg shadow-md mb-5"
				/>
			)}
			<div className="flex-1 flex flex-col p-3">
				<div className="flex-1 flex flex-col text-black dark:text-gray-200">
					<h2 className="font-bold font-serif text-black dark:text-gray-100 ">
						{article.title}
					</h2>
					<section className="mt-2  flex-1">
						<p className="text-sm line-clamp-3">
							{article.description}
						</p>
					</section>
					<footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400 p-2">
						<p>{article.source.name} -</p>
						<p>
							{timeSincePublished(
								`${article.publishedAt}`
							)}
						</p>
					</footer>
					<ReadMoreBtn article={article} />
				</div>
			</div>
		</article>
	);
};

export default Article;
