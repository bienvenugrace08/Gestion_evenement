import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1E3A81] text-white px-6 py-4 flex justify-between items-center shadow">
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

      <div>
        <Link
          to="/auth"
         className="bg-[#F97316] text-xl px-4 py-3 rounded hover:bg-orange-600 transition">

         Se connecter
        </Link>

      </div>
    </nav>
  );
}
