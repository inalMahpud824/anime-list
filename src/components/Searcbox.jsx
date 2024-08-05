import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(`/api/anime?q=${query}&limit=10`, {
        headers: {
          "X-MAL-CLIENT-ID": import.meta.env.VITE_APP_CLIENT_ID,
        },
      });
      navigate("/animes/search-results", {
        state: { searchResults: result.data.data},
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center my-7 items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white flex items-center rounded-md shadow-md px-2 w-[50%]"
        >
          <span className="material-symbols-outlined text-slate-200 ">
            search
          </span>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            className=" outline-none p-3 rounded-md bg-white w-full"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;
