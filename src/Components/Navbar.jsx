import "./Fonts.css";
const Navbar = () => {
  return (
    <div className="flex my-5   ">
      <div className="flex items-center">
        <img className="w-12 h-12" src="icon.png" alt="" />
        <a className="text-xl text-[#6fcb9f] font-bold fonts">
          Brew <span className="text-[#808000]">HaHa</span>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
