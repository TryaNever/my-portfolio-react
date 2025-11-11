function App() {
  return (
    <>
      <header className="flex flex-col items-center px-4 md:flex-row md:justify-between lg:px-0">
        <h1 className="text-center mt-6 md:mt-8 lg:mt-12 mb-4 md:mb-5 text-2xl md:text-3xl lg:text-4xl">
          Alexis Pernette
        </h1>
        <div>
          <ul className="flex justify-center gap-4 md:gap-6">
            <li>
              <a
                href="https://github.com/TryaNever"
                className="text-2xl md:text-3xl hover:text-amber-500 transition-colors"
              >
                <i className="ri-github-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexis-pernette-b51727310"
                className="text-2xl md:text-3xl hover:text-amber-500 transition-colors"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="px-4 md:px-8 lg:px-0 max-w-4xl mx-auto">
        <div className="mt-8 md:mt-12 lg:mt-16">
          <h2 className="font-normal text-center text-xl md:text-2xl lg:text-3xl">
            Ravie de te rencontrer !
            <span className="block mt-2 md:mt-3">
              Je suis{" "}
              <strong className="underline underline-offset-8 decoration-amber-500">
                Alexis Pernette
              </strong>
            </span>
            <span className="block mt-2 md:mt-3">Et j'ai 16 ans !</span>
          </h2>
          <p className="text-base md:text-lg text-[#b4b4b4] font-medium mt-8 md:mt-10 lg:mt-12 text-justify leading-relaxed md:leading-loose">
            Basée à Paris, je code depuis mon adolescence et je prends plaisir à
            apprendre de nouvelles technologies chaque jour. Je cherche une
            alternance en développement web pour créer, expérimenter et relever
            de vrais défis.
          </p>
        </div>
        <hr className="mt-10 md:mt-12 lg:mt-16 border-gray-700" />
      </main>
    </>
  );
}

export default App;
