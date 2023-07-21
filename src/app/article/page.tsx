import { notFound } from "next/navigation";
import Link from "next/link";
import fetchNews from "../../../utils/fetchNews";
import timeSincePublished from "../publishedTime";

type Props = {
	searchParams: Article;
};
const page = async ({ searchParams }: Props) => {
	const news = await fetchNews();
	if (
		(searchParams && Object.entries(searchParams).length === 0) ||
		!searchParams
	) {
		return notFound();
	}

	// const find = news?.articles.find(
	// 	(item) => (item.content = searchParams.content)
	// );
	const newsArticle: Article | undefined = searchParams
		? searchParams
		: {
				source: { id: null, name: "Error" },
				author: "Headlinez",
				title: "Error - HEADLINEZ",
				description: "NOT FOUND",
				url: "https://www.cnn.com/style/article/met-gala-2023-red-carpet-fashion/index.html",
				urlToImage:
					"https://f4.bcbits.com/img/a3045374793_16.jpg",
				publishedAt: "No data found.",
				content:
					"Article does not exist!😔 \n try refreshing the page.",
		  };

	return (
		<article className="flex flex-col justify-center items-center w-full mt-6 pb-11">
			<h2 className="font-bold font-serif  text-black dark:text-gray-100 underline mb-3 ring-offset-8 decoration-orange-400 decoration-2">
				{newsArticle!.title}
			</h2>
			<section className="md:w-1/2 w-full flex flex-col gap-y-6 justify-center items-center ">
				{newsArticle!.urlToImage && (
					<img
						src={newsArticle!.urlToImage}
						alt={
							newsArticle!.title
								? newsArticle!.title
								: "news poster"
						}
						className="object-cover h-55 w-full rounded-lg shadow-md"
					/>
				)}
				<h2 className="font-bold font-serif  text-black dark:text-gray-100">
					{newsArticle!.title}
				</h2>
				<section className="mt-2 flex-1 gap-y-8">
					<p className="text-sm ">{newsArticle!.content}</p>
				</section>
				<Link
					href={`${newsArticle!.url}`}
					className="bg-orange-400 h-10 rounded-lg text-gray-200 dark:text-gray-900 hover:bg-orange-500 w-1/2 px-3 flex flex-col justify-center  text-center items-center">
					Read More
				</Link>
				<footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
					<p>{newsArticle!.source.name} -</p>
					<p>
						{timeSincePublished(
							`${newsArticle!.publishedAt}`
						)}
					</p>
				</footer>
			</section>
		</article>
	);
};

export default page;
