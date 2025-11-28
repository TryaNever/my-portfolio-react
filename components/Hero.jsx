import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-8 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
      <div className="flex-1">
        <h2 className="font-normal text-center lg:text-left text-xl md:text-2xl lg:text-3xl">
          Ravie de te rencontrer !
          <span className="block mt-2 md:mt-3">
            Je suis
            <strong className="underline underline-offset-8 decoration-amber-500">
              {" "}
              Alexis Pernette
            </strong>
          </span>
        </h2>
        <p className="text-base md:text-lg text-[#b4b4b4] font-medium mt-8 md:mt-12 text-justify leading-relaxed md:leading-loose">
          Basée à Paris, je code depuis mon adolescence et je prends plaisir à
          apprendre de nouvelles technologies chaque jour. Je cherche une
          alternance en développement web pour créer, expérimenter et relever de
          vrais défis.
        </p>
      </div>
      <div className="flex-shrink-0 order-first lg:order-last">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 blur-lg opacity-50"></div>
          <Image
            src="/pp_porfolio.webp"
            alt="Alexis Pernette"
            width={224}
            height={224}
            className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-amber-500 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
