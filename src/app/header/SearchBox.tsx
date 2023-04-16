"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()
  
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`./search?term=${input}`)

	};
	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-6xl flex mx-auto justify-between items-center px-5">
			<input
				type="text"
        name="search"
        value={input}
        placeholder="Search Keyword..."
        onChange={(e) => {
          setInput(e.target.value)
        }}
				className="w-full rounded-sm h-14 flex-1 placeholder-gray-500 text-gray-900 dark:text-orange-500 bg-transparent outline-none"
			/>
			<button
        type="submit"
        disabled={!input}
				className="text-orange-400 disabled:text-gray-400">Search</button>
		</form>
	);
};

export default SearchBox;
