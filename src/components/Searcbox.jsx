const SearchBox = () => {
  return (
    <>
      <div className="flex justify-center my-7 items-center">
        <div className="bg-white flex items-center rounded-md shadow-md px-2 w-[50%]">
          <span className="material-symbols-outlined text-slate-200 ">
            search
          </span>
          <input
            type="text"
            placeholder="Search..."
            className=" outline-none p-3 rounded-md bg-white w-full"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBox