const BackgroundDeco = () => {
  return (
    <>
      <div className="fixed rounded-full w-64 h-64 border-4 border-amber-500/20 top-20 left-4 floating"></div>
      <div
        className="fixed rounded-full w-96 h-96 border-4 border-amber-500/10 top-1/3 -right-48"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="triple-circle w-48 h-48 border-4 border-amber-500/30 bottom-32 left-10 floating"
        style={{ animationDelay: "4s" }}
      ></div>
      <div className="fixed rounded-full w-32 h-32 border-4 border-amber-500/20 top-2/3 right-20"></div>
    </>
  );
};

export default BackgroundDeco;
