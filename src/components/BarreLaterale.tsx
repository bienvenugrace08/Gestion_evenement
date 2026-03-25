import { Link } from "react-router-dom";

function BarreLaterale() {
  return (
    <aside className="bg-[#1E3A81] text-white w-64 min-h-screen flex flex-col justify-between">
      {/* Haut de la sidebar */}
      <div>
        <h2 className="text-2xl font-bold p-4">Tableau de bord</h2>
        <nav className="flex flex-col space-y-2 px-4">
          <Link to="/" className="hover:bg-[#F97316] p-2 rounded text-xl">Accueil</Link>
          <Link to="/evenements" className="hover:bg-[#F97316] p-2 rounded text-xl">Événements</Link>
          <li className="hover:bg-[#F97316] p-2 rounded text-xl">Participants</li>
          <li className="hover:bg-[#F97316] p-2 rounded text-xl">Tickets vendus</li>
          <li className="hover:bg-[#F97316] p-2 rounded text-xl">Créer un événement</li>
        </nav>
      </div>
      {/* Bas de la sidebar */}
      <div className="p-4">
        <Link
          to="/"
          className="block bg-[#F97316] text-center text-xl px-4 py-3 rounded hover:bg-orange-600 transition"
        >
          Déconnexion
        </Link>
      </div>
    </aside>
  );
}

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Barre latérale seule */}
      <BarreLaterale />
    </div>
  );
}
