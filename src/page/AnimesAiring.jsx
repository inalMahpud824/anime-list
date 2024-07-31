import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/Searcbox";
import useAnimesAiring from "../hooks/useAnimeAiring";
import { useInView } from "react-intersection-observer";

export default function AnimesAiringPage() {
  const { animesAiring, setOffset, hasMore } = useAnimesAiring(10);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasMore) {
      setOffset((prevOffset) => prevOffset + 30);
    }
  }, [inView, hasMore, setOffset]);
  return (
    <div className="bg-[#EDF1F5] w-full min-h-screen m-0 p-0">
      <Navbar />
      <SearchBox />
      <div className="mx-10 px-10 pb-10">
        <h1 className="text-3xl font-bold text-slate-600 my-5 ml-8">
          Popular Anime Airing
        </h1>
        <div className="flex flex-wrap items-center gap-10 justify-center">
          {animesAiring.map((anime) => (
            <div className="" key={anime.node.id}>
              <img
                src={anime.node.main_picture.large}
                alt=""
                className="w-44 h-64"
              />
            </div>
          ))}
        </div>
        <div ref={ref} className="h-20"></div>
      </div>
    </div>
  );
}
