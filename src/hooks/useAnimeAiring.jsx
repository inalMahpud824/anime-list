import axios from "axios";
import { useEffect, useState } from "react";

function useAnimesAiring(limit = 10) {
  const [animesAiring, setAnimesAiring] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchAnimeAiring = async () => {
      try {
        const response = await axios.get(
          `/api/anime/ranking?ranking_type=airing&limit=${limit}&offset=${offset}`,
          {
            headers: {
              "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
            },
          }
        );
        setAnimesAiring((prev) => [...prev, ...response.data.data]);
        if (response.data.data.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    if (hasMore) {
      fetchAnimeAiring();
    }
  }, [offset, limit, hasMore]);

  return { animesAiring, setOffset, hasMore };
}

export default useAnimesAiring;
