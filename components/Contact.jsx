export default function Contact() {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Contact
      </h2>
      <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-lg border-2 border-gray-800 text-center">
        <p className="text-lg text-[#b4b4b4] font-medium mb-6">
          Je suis actuellement à la recherche d'une alternance en développement
          web. N'hésite pas à me contacter !
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <a
            href="mailto:contact@alexispernette.fr"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-[#151515] rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
          >
            <i className="ri-mail-line"></i>
            <span className="text-base">M'envoyer un email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-pernette-b51727310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-amber-500 hover:bg-amber-500/10 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
          >
            <i className="ri-linkedin-box-fill"></i>
            <span className="text-base">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
