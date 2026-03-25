import { Link } from "react-router-dom";

function BarreLaterale() {
  return (
    <div className="bg-[#1E3A81] text-white w-64 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold p-4">Tableau de bord</h2>
        <nav className="flex flex-col space-y-2 px-4">
          <Link to="/"className="hover:bg-[#F97316] p-2 rounded text-xl">Accueil</Link>
          <Link to="/evenements" className="hover:bg-[#F97316] p-2 rounded text-xl">Événements</Link>
          <Link to="/participants" className="hover:bg-[#F97316] p-2 rounded text-xl">Participants</Link>
          <Link to="/tickets" className="hover:bg-[#F97316] p-2 rounded text-xl">Tickets vendus</Link>
          <Link to="/creer" className="hover:bg-[#F97316] p-2 rounded text-xl">Créer un événement</Link>
        </nav>
      </div>
      <button className="bg-[#F97316] text-white font-bold p-3 m-4 rounded hover:bg-amber-600">
        Déconnexion
      </button>
    </div>
  );
}
export default BarreLaterale