const Spinner = () => (
  <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-full bg-slate-700 bg-opacity-25">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin border-t-transparent "></div>
    </div>
  </div>
);

export default Spinner;
