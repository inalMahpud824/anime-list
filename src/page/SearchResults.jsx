import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBox from "../components/Searcbox";

const SearchResultsPage = () => {
  const location = useLocation()
  const {searchResults} = location.state || {searchResults: []}
  console.log(searchResults)
  return (
    <div className="bg-[#EDF1F5] w-full min-h-screen m-0 p-0">
      <Navbar />
      <SearchBox />
      <div className="mx-10 px-10 pb-10">
        <h1 className="text-3xl font-bold text-slate-600 my-5 ml-8">
          Search Results
        </h1>
        <div className="flex flex-wrap items-center gap-10 justify-center">
          {searchResults
            // .sort((a, b) => a.ranking.rank - b.ranking.rank)
            .map((anime) => (
              <div className="" key={anime.node.id}>
                <img
                  src={anime.node.main_picture.large}
                  alt=""
                  className="w-44 h-64 rounded-md"
                />
              </div>
            ))}
        </div>
        {/* <div ref={ref} className="h-20">
          {isLoading && "Loading..."}
        </div> */}
      </div>
    </div>
  );
}

export default SearchResultsPage