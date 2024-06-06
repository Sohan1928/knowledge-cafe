import "./App.css";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Bookmark from "./Components/Bookmark";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-[#FEFCED] rounded-md">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="grid grid-cols-3 space-x-5">
          <div className="col-span-2 border">
            <Blogs></Blogs>
          </div>
          <Bookmark></Bookmark>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
