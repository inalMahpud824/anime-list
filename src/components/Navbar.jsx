const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#2B2D42] py-3 px-4 font-semibold text-white items-center text-xl sticky">
      <h1>Anime List</h1>
      <div className="flex gap-4 ">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
