import Navbar from "./components/Navbar";
import SearchBox from "./components/Searcbox";
import SilderImage from "./components/Slider";
import useAnimesAiring from "./hooks/useAnimeAiring";
import useAnimesUpcoming from "./hooks/useAnimeUpcoming";
import useAnimesPopular from "./hooks/useAnimePopular";
import { Link } from "react-router-dom";
import TextCategoryAnime from "./components/TextCategoryAnime";

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
        <div className="px-5 md:mx-5 md:px-10 md:pb-10">
          <Link to={"/anime/airing"}>
            <TextCategoryAnime>POPULAR THIS SEASON</TextCategoryAnime>
          </Link>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center">
              {animesAiring.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                  to={`/anime/${anime.node.id}`}
                />
              ))}
            </div>
          </div>
          <Link to={"/anime/upcoming"}>
            <TextCategoryAnime>UPCOMING NEXT SEASON</TextCategoryAnime>
          </Link>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center">
              {animesUpcoming.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                  to={`/anime/${anime.node.id}`}
                />
              ))}
            </div>
          </div>
          <Link to={"/anime/popular"}>
            <TextCategoryAnime>ANIME POPULAR</TextCategoryAnime>
          </Link>
          <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex w-max gap-4 items-center">
              {animesPopular.map((anime) => (
                <SilderImage
                  key={anime.node.id}
                  image={anime.node.main_picture.large}
                  title={anime.node.title}
                  to={`/anime/${anime.node.id}`}
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
