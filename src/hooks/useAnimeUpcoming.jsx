import axios from "axios";
import { useEffect, useState } from "react";

export default function useAnimesUpcoming(limit = 10, offset = 0) {
  const [animesUpcoming, setAnimesUpcoming] = useState([]);
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
        setAnimesUpcoming(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimeUpcoming();
  }, []);

  return animesUpcoming;
}
