const Slidebar = () => {
  return (
    <div className="flex flex-row bg-neural-100 h-screen w-screen overflow-hidden g-5 first:pt-0 last:pb-0 group-hover:text-orange ">
      <div className="bg-sky-400 active:bg-violet-700 focus:ring-2 ">
        slidebar
      </div>
      <div className="bg-teal-300">header</div>
    </div>
  );
};

export default Slidebar;
