import Navbar from "./Navbar";
import Footer from "./Footer";


export default function LandingPage() {
  const events = [
    {
      titre: "Evenement de cosplay, actu mangas et BD",
      date: "12 Juin 2026",
      lieu: "Dakar",
      image: "src/assets/image/cosplay1.jpg",
      bouton: "S'inscrire",
      couleur: "bg-[#F97316]",
    },
    {
      titre: "Conference sur la cybersecurite",
      date: "8 Septembre 2026",
      lieu: "En ligne",
      organisation:"M. SOUMARE",
      image: "src/assets/image/cybersecurite-trekk-1.png",
      bouton: "Participer",
      couleur: "bg-[#F97316]",
    },
    {
      titre: "Soirée de mariage traditionnelle",
      date: "19 Octobre 2026",
      lieu: "Saint-Louis",
      image: "src/assets/image/fiancaille.jpg",
      bouton: "Voir détails",
      couleur: "bg-[#F97316]",
    },
    {
      titre: "Festival des sapeurs de Brazzaville",
      date: "15 Aout 2026",
      lieu: "Place du souvenir Africain",
      image: "src/assets/image/SAPE-7.jpg",
      bouton: "S'inscrire",
      couleur: "bg-[#F97316]",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <section
          className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white px-6"
          style={{ backgroundImage: "url('src/assets/image/vecteezy_summer-fest-event-party-with-people-blurred-background_24308240.jpg')" }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Organisez et gérez vos événements facilement
            </h1>
            <p className="text-lg md:text-2xl max-w-xl mx-auto">
              De la planification à la réalisation, Evana vous accompagne pour organiser conférences, festivals, mariages et soirées privées. Une plateforme simple, moderne et efficace pour transformer vos idées en moments inoubliables.
            </p>
          </div>
        </section>
        <section className="py-12 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-[#1E3A81] mb-4">
            Evénements à venir
          </h2>
          <p className="text-center text-2xl text-gray-600 mb-10">
            Ne manquez pas nos prochains événements!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative group bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
               <div
                  className="absolute top-4 left-0 w-full h-50 flex items-center justify-center 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <img
                    src={event.image}
                    alt={event.titre}
                    className="w-full h-full object-cover rounded-t-lg"/>
                 </div>

                <div className="p-4 pt-60 text-center">
                  <h3 className="text-lg font-semibold text-[#1E3A81] mb-2">
                    {event.titre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                  <p className="text-sm text-gray-500 mb-4">{event.lieu}</p>
                    {event.organisation && (
                    <p className="text-sm text-gray-700 mb-4">Organisé par {event.organisation}</p>)}

                  <button
                    className={`text-white px-4 py-2 rounded ${event.couleur}`}
                  >
                    {event.bouton}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}