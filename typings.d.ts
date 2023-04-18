
type Article = {
    source: {
        id: string | null,
        name: string
    },
    author?: string | null,
    title:string | null,
    description:string | null,
    url:string | null,
    urlToImage: string | null,
    publishedAt:string | null,
    content: string | null
};

type NewsResponse = {
    status?: string,
    totalResults?: number,
    articles: Article[];
};

type Category =
	| "General"
	| "buisness"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology";
