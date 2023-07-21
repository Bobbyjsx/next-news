"use client";
import { useQuery } from "@tanstack/react-query";
import fetchNews from "../utils/fetchNews";

export const useNews = (categories?: string) => {
	const { isLoading, isError, data, error } =
		useQuery<NewsResponse>({
			queryKey: ["news", categories], // Include categories in the queryKey to differentiate requests
			queryFn: async () => {
				// Fetch the news data without categories first
				const newsData = await fetchNews();

				if (categories) {
					// Fetch news data with specific categories
					const newsData = await fetchNews(categories);
					return newsData as NewsResponse; // Type assertion to NewsResponse
				} else {
					// Fetch the news data without categories
					const newsData = await fetchNews();
					return newsData as NewsResponse; // Type assertion to NewsResponse
				}
			},
		});

	return { data, isLoading, isError, error };
};
