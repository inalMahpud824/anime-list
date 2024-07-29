import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBox from "./components/Searcbox";
import { useEffect, useState } from "react";

function App() {
  const [animesAiring, setAnimesAiring] = useState([]);
  const [animesUpcoming, setAnimesUpcoming] = useState([]);
  useEffect(() => {
    const fetchAnimeAiring = async () => {
      try {
        const response = await axios.get(
          "https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=10",
          {
            headers: {
              "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
            },
          }
        );
        setAnimesAiring(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    const fetchAnimeUpcoming = async () => {
      try {
        const response = await axios.get(
          "https://api.myanimelist.net/v2/anime/ranking?ranking_type=upcoming&limit=10",
          {
            headers: {
              "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
            },
          }
        );
        setAnimesUpcoming(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimeAiring();
    fetchAnimeUpcoming();
  }, []);

  return (
    <>

    <div className="bg-[#EDF1F5] w-full min-h-screen m-0 p-0">
      <Navbar />
      <SearchBox />
      <div className="mx-10 px-10 pb-10">
        <h3 className="text-xl font-bold text-slate-500 my-5">
          POPULAR THIS SEASON
        </h3>
        <div className="w-full overflow-x-scroll scroll-hidden">
          <div className="flex w-max gap-4 items-center py-4">
            {animesAiring.map((anime) => (
              <img
                key={anime.node.id}
                src={anime.node.main_picture.medium}
                className="w-48 h-72"
              />
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-500 my-5">
          UPCOMING NEXT SEASON
        </h3>
        <div className="w-full overflow-x-scroll scroll-hidden">
          <div className="flex w-max gap-4 items-center py-2">
            {animesUpcoming.map((anime) => (
              <img
                key={anime.node.id}
                src={anime.node.main_picture.medium}
                className="w-48 h-72"
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
