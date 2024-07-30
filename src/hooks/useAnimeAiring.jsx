import axios from "axios";
import { useEffect, useState } from "react";

function useAnimesAiring () {
  const [animesAiring, setAnimesAiring] = useState([]);

    useEffect(() => {
    const fetchAnimeAiring = async () => {
      try {
        const response = await axios.get(
          "/api/anime/ranking?ranking_type=airing&limit=10",
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

    fetchAnimeAiring();
  }, []);
  return animesAiring
}

export default useAnimesAiring