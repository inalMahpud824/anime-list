import Navbar from "./components/Navbar";
import SearchBox from "./components/Searcbox";
import SilderImage from "./components/Slider";
import useAnimesAiring from "./hooks/useAnimeAiring";
import useAnimesUpcoming from "./hooks/useAnimeUpcoming";
import useAnimesPopular from "./hooks/useAnimePopular";
import { Link } from "react-router-dom";

function App() {
  const { animesAiring } = useAnimesAiring();
  const animesUpcoming = useAnimesUpcoming();
  const animesPopular = useAnimesPopular();
  // console.log(animeAiring)
  return (
    <>
      <div className="bg-[#EDF1F5] w-full min-h-screen m-0 p-0">
        <Navbar />
        <SearchBox />
        <div className="mx-10 px-10 pb-10">
          <Link to={"/anime/airing"}>
            <h3 className="text-xl font-bold text-slate-500 my-5">
              POPULAR THIS SEASON
            </h3>
          </Link>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center py-4">
              {animesAiring.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-500 my-5">
            UPCOMING NEXT SEASON
          </h3>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center py-4">
              {animesUpcoming.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-500 my-5">
            ANIME POPULAR
          </h3>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center py-4">
              {animesPopular.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
