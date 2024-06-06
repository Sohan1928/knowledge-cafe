import "./Fonts.css";
const Navbar = () => {
  return (
    <div className="flex my-5 justify-between bg-[#B0DDE4] rounded-md drop-shadow-xl">
      <div className="flex items-center pl-4">
        <img className="w-12 h-12 rounded-full" src="icon.png" alt="" />
        <a className="text-xl  font-bold fonts">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#642B73] to-[#C6426E]">
            Brew HaHa
          </span>{" "}
        </a>
      </div>
      <div className="w-16 h-16 pr-5 flex items-center">
        <img className="" src="profile.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
