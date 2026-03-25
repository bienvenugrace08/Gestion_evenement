import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
    
      <header className="bg-[#1E3A81] text-white px-6 py-4 flex justify-between items-center shadow">
        
      <div className="flex items-center space-x-2">
        <span className="w-auto text-[#F97316]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
</span>
<span className="font-bold text-4xl text-[#F97316]">Evana</span>
      </div>

      <div className="space-x-6">
        <Link to="/" className="hover:text-[#F97316] text-2xl">Accueil</Link>
        <Link to="/evenements" className="hover:text-[#F97316] text-2xl">Événements</Link>
        <Link to="/about" className="hover:text-[#F97316] text-2xl">About</Link>
      </div>

      </header>

      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3A81] text-center mb-6">
          À propos de Evana
        </h1>
        <p className="text-2xl text-gray-700 text-center mb-12">
          Evana est une plateforme de gestion d’événements qui facilite
          l’organisation et la communication de vos projets. Notre objectif est
          de rendre chaque événement simple à organiser et mémorable à vivre.
        </p>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3A81] text-center mb-4">
            Nos services
          </h2>
          <p className="text-center text-2xl text-gray-600">
            Organisation, planification et suivi de vos événements.<br />
            Communication efficace avec vos participants.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#1E3A81] text-center mb-8">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="bg-blue-100 shadow rounded-lg p-6 text-center">
              <img src="src/assets/image/bienvenu.jpg" alt="" className=" rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#1E3A81]">Bienvenu SEHOLO</h3>
              <p className="text-sm text-gray-600">landing page</p>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>

            <div className="bg-blue-100 shadow rounded-lg p-6 text-center">
              <img src="src/assets/image/diallo.png" alt="" className=" rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#1E3A81]">Mouhamadou Moudjtaba Diallo</h3>
              <p className="text-sm text-gray-600">Authentification</p>
            </div>

            <div className="bg-blue-100 shadow rounded-lg p-6 text-center">
              <img src="src/assets/image/sow.jpg" alt="" className=" rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#1E3A81]">Hawa SOW</h3>
              <p className="text-sm text-gray-600">Evenement</p>
            </div>

            <div className="bg-blue-100 shadow rounded-lg p-6 text-center">
              <img src="src/assets/image/awa.jpg" alt="" className=" rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#1E3A81]">Kande Hawa</h3>
              <p className="text-sm text-gray-600">A propos</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 border-t">
        <p className="text-gray-600">@ 2026 Evana. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
