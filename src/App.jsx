import "./App.css";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto border">
        <Navbar></Navbar>

        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
