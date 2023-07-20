import { tiles } from "../../loadingTiles";

const loading = () => {
	return (
		<div className="">
			<h1 className="text-3xl">NEWS</h1>
			<ul className="list-disc pl-6 mt-4 space-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10 ">
				{tiles.map((input, index) => {
					return (
						<li key={index} className="">
							<article
								className=" w-60 h-44 bg-slate-500 dark:bg-gradient-to-tl from-slate-800 to-slate-700 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 duration-200 ease-out hover:text-black animate-pulse transition-all "
								style={{
									animationDelay: `${
										index * 0.05
									}s`,
									animationDuration: "1s",
								}}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default loading;
