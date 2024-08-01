import axios from "axios";
import { useEffect, useState } from "react";

function useAnimesPopular(limit = 10) {
  const [animesPopular, setAnimesPopular] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchAnimePopular = async () => {
      try {
        const response = await axios.get(
          `/api/anime/ranking?ranking_type=bypopularity&limit=${limit}&offset=${offset}`,
          {
            headers: {
              "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
            },
          }
        );

        setAnimesPopular((prev) => [...prev, ...response.data.data]);

        if (response.data.data.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    if (hasMore) {
      fetchAnimePopular();
    }
  }, [offset, limit, hasMore]);
  return { animesPopular, setOffset, hasMore };
}

export default useAnimesPopular;
