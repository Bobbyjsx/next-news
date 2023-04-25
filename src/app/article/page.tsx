import { notFound } from "next/navigation";

type Props = {
	searchParams: Article;
};
const page = ({ searchParams }: Props) => {
	if (
		(searchParams && Object.entries(searchParams).length === 0) ||
		!searchParams
	) {
		return notFound();
	}
    const article: Article = searchParams;
    
	return (
		<article>
			<section>
				{article.urlToImage && (
					<img
						src={article.urlToImage}
						alt={
							article.title
								? article.title
								: "news poster"
						}
						className="object-cover h-55 w-full rounded-t-lg shadow-md"
					/>
				)}
				<h2 className="font-bold font-serif  text-black dark:text-gray-100">
					{article.title}
				</h2>
				<section className="mt-2 flex-1">
					<p className="text-sm ">{article.content}</p>
				</section>
				<footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
					<p>{article.source.name} -</p>
					<p>{article.publishedAt}</p>
				</footer>
			</section>
		</article>
	);
};

export default page;
