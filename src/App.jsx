import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full flex-col gap-5">
        <h2 className="p-10 bg-blue-300 rounded-lg text-white font-bold capitalize">
          this is from app components{" "}
        </h2>
        <div className="p-10 bg-pink-500 rounded-lg text-white font-bold capitalize">
          <Blogs></Blogs>
        </div>
      </div>
    </>
  );
}

export default App;
