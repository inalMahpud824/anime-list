import axios from "axios";
import { useEffect, useState } from "react";

export default function useAnimesUpcoming(limit = 10) {
  const [animesUpcoming, setAnimesUpcoming] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const fetchAnimeUpcoming = async () => {
      try {
        const response = await axios.get(
          `/api/anime/ranking?ranking_type=upcoming&limit=${limit}&offset=${offset}`,
          {
            headers: {
              "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
            },
          }
        );
        setAnimesUpcoming((prev) => [...prev, ...response.data.data]);
        if (response.data.data.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    if (hasMore) {
      fetchAnimeUpcoming();
    }
  }, [offset, limit, hasMore]);

  return { animesUpcoming, setOffset, hasMore };
}
