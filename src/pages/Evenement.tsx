import { Link } from "react-router-dom";
import photo1 from "../assets/image/photo1.jpeg";
import photo2 from "../assets/image/Photo2.jpeg";
import photo3 from "../assets/image/photo3.jpeg";
import photo4 from "../assets/image/photo4.jpeg";
import photo5 from "../assets/image/photo5.jpg";
import photo6 from "../assets/image/photo6.png";


type Event = {
    id: number;
    title: string;
    date: string;
    price: number;
    registered: number;
    capacity: number;
    description: string;
    image: string;
    tags: string[];
    featured: boolean;
};

// Sélectionner les images
const images = [photo1, photo2, photo3, photo4,photo5, photo6];

const events: Event[] = [
    {
        id: 1,
        title: "Conférence Tech Dakar 2025",
        date: "2025-06-15",
        price: 25000,
        registered: 145,
        capacity: 200,
        description: "Découvrez les dernières innovations technologiques d'Afrique de l'Ouest",
        image: images[3],
        tags: ["Tech", "Innovation"],
        featured: true,
    },
    {
        id: 2,
        title: "Workshop Design UI/UX",
        date: "2025-07-10",
        price: 15000,
        registered: 28,
        capacity: 30,
        description: "Maîtrisez les principes du design d'interface",
        image: images[2],
        tags: ["Design", "UI/UX"],
        featured: false,
    },
    {
        id: 3,
        title: "Hackathon Innovation IA",
        date: "2025-08-20",
        price: 0,
        registered: 95,
        capacity: 100,
        description: "Compétition 48h pour créer des solutions d'IA innovantes",
        image: images[1],
        tags: ["IA", "Hackathon"],
        featured: true,
    },
    {
        id: 4,
        title: "Festival en plein air",
        date: "2025-09-05",
        price: 50000,
        registered: 42,
        capacity: 50,
        description: "les artistes comme : Youssou N'DOUR, Baaba Maal, Viviane Chidid. seront sur scène ",
        image: images[0],
        tags: ["Musique"],
        featured: false,
    },
    {
        id: 5,
        title: "Fashion Dakar",
        date: "2025-07-22",
        price: 5000,
        registered: 110,
        capacity: 120,
        description: "Soirée de présentation des startups africaines",
        image: images[4],
        tags: ["Defiler"],
        featured: true,
    },
    {
        id: 6,
        title: "Soiree de gala",
        date: "2025-06-30",
        price: 10000,
        registered: 18,
        capacity: 25,
        description: "Soiree de gala à l'ocasion d'une colecte de fond",
        image: images[5],
        tags: ["ONG"],
        featured: false,
    },
];

export default function Evenements() {
    const getProgressColor = (registered: number, capacity: number) => {
        const fill = (registered / capacity) * 100;
        if (fill >= 90) return "from-red-500 to-red-600";
        if (fill >= 70) return "from-orange-500 to-orange-600";
        return "from-emerald-500 to-emerald-600";
    };

    const getProgressWidth = (registered: number, capacity: number) => {
        const fill = Math.min((registered / capacity) * 100, 100);
        return Math.round(fill);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* NAVBAR */}
          <nav className="sticky top-0 z-50 border-b border-[#1E3A8A]/20 bg-[#1E3A8A] backdrop-blur-md">
  <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
    
    <div className="flex items-center space-x-2">
      <span className="w-auto text-[#F97316]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
      </span>
      <span className="font-bold text-4xl text-[#F97316]">Evana</span>
    </div>

    <div className="flex justify-center space-x-6 text-white">
      <Link to="/" className="hover:text-[#F97316] text-2xl">Accueil</Link>
      <Link to="/evenements" className="hover:text-[#F97316] text-2xl">Événements</Link>
      <Link to="/about" className="hover:text-[#F97316] text-2xl">About</Link>
    </div>

    <div className="hidden md:flex justify-end items-center gap-8">
      <div className="text-center">
        <p className="text-2xl font-black text-orange-600">{events.length}</p>
        <p className="text-xs text-orange-600 uppercase tracking-widest">Événements</p>
      </div>
      <div className="w-px h-8 bg-white/30"></div>
      <div className="text-center ">
        <p className="text-2xl font-black text-orange-600">
          {events.reduce((acc, e) => acc + e.registered, 0)}
        </p>
        <p className="text-xs text-orange-600 uppercase tracking-widest">Participants</p>
      </div>
    </div>
  </div>
</nav>
            {/* HERO SECTION */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="space-y-4 mb-16">
                    <h2 className="text-5xl md:text-6xl text-[#F97316] leading-tight">
                        Decouvrez nos evenements <br />
                        <span className="text-[#1E3A81]">
                            Des experiences marquantes et satisfaisantes de nos clients.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Explorez les meilleures opportunités d'apprentissage, de networking et d'innovation partout en Afrique
                    </p>
                </div>

                {/* EVENTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => {
                        const progress = getProgressWidth(event.registered, event.capacity);
                        
                        return (
                            <div
                                key={event.id}
                                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 transition-all duration-300 hover:border-[#1E3A8A] hover:shadow-lg hover:shadow-[#1E3A8A]/10"
                            >
                                {/* IMAGE CONTAINER */}
                                <div className="relative h-48 overflow-hidden bg-gray-200">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 linear-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>

                                    {/* FEATURED BADGE */}
                                    {event.featured && (
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E3A8A] text-white text-xs font-bold rounded-full shadow-lg">
                                                ⭐ À la une
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 space-y-4">
                                    {/* TITLE & DESC */}
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 mb-2 line-clamp-2 group-hover:text-[#1E3A8A] transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-2">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-2">
                                        {event.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-block px-2.5 py-1 text-xs font-semibold text-[#1E3A8A] bg-[#1E3A8A]/10 rounded-lg border border-[#1E3A8A]/20 transition-colors hover:border-[#1E3A8A]/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CAPACITY PROGRESS */}
                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-slate-700">
                                                Capacité : {event.registered}/{event.capacity}
                                            </span>
                                            <span className={`text-xs font-black linear-gradient-to-r ${getProgressColor(event.registered, event.capacity)} bg-clip-text text-transparent`}>
                                                {progress}%
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full progress-fill linear-gradient-to-r ${getProgressColor(event.registered, event.capacity)} transition-all duration-500`}
                                                style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* FOOTER */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <span className="text-sm text-slate-600">
                                            📅&nbsp;
                                            {new Date(event.date).toLocaleDateString("fr-FR", {
                                                month: "short",
                                                day: "numeric",
                                                year: "2-digit",
                                            })}
                                        </span>
                                        <span className="text-sm font-black text-[#1E3A8A]">
                                            {event.price === 0 ? "Gratuit" : `${event.price.toLocaleString()} CFA`}
                                        </span>
                                    </div>
                                </div>

                                {/* HOVER OVERLAY */}
                                <div className="absolute inset-0 linear-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 bg-gray-50 mt-24 py-8">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm text-slate-600">
                        @ 2026 Evana. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}