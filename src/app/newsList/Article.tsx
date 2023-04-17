type Props = {
	article: Article;
};
const Article = ({ article }: Props) => {
	return (
		<article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out hover:text-black">
			{article.image && (
				<img
					src={article.image}
					alt={article.title}
					className="object-cover h-55 w-full rounded-t-lg shadow-md"
				/>
			)}
			<div className="flex flex-1 flex-col">
				<div className="flex flex-col flex-1 p-5 text-black dark:text-gray-200">
					<h2 className="font-bold font-serif  text-black dark:text-gray-100">
						{article.title}
					</h2>
					<section className="mt-2 flex-1">
						<p className="text-sm line-clamp-6">
							{article.description}
						</p>
					</section>
					<footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
						<p>{article.source} -</p>
						<p>{article.published_at}</p>
					</footer>
					{/* readMore Button */}
				</div>
			</div>
		</article>
	);
};

export default Article;
