import fetchNews from "../../../utils/fetchNews";
import NewsList from "../newsList/page";

type Props = {
    searchParams?: { term: string };
}
const SearchPage = async ({ searchParams }: Props) => {
    const news:NewsResponse = await fetchNews("general",searchParams?.term,true)
  return (
      <div>
          <h1 className="font-semibold text-4xl">Search Result For: { searchParams?.term }</h1>
      <NewsList news ={ news}/>
    </div>
  )
}

export default SearchPage
