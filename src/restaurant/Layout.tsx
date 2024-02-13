import restaurant from "./New-Restaurants-in-Bengaluru_01.webp";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-blue-300 h-12 p-1">
        <div className="flex items-center">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-8 h-8 rounded-full "
          />
          <h1 className=" ml-2 text-dark fw-bolder text-2xl">Restaurant</h1>
        </div>
        <div className="flex mr-3 space-x-4 justify-end ">
          <button className="bg-green-800 text-white p-2 hover:bg-black">
            sign in
          </button>
          <button className="bg-red-800 text-white p-2  hover:bg-black">
            sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Layout;
