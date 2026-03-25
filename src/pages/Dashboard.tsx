import EnTete from "../components/EnTete";
import BarreLaterale from "../components/BarreLaterale";
import EvenGraph from "../pages/EvenGraph";
import Participants from "../pages/Participations";
import Tickets from "../pages/Tickets";
import CreerEvenement from "../pages/CreerEvenement";
import Stat from "../components/Stat";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Barre latérale */}
      <BarreLaterale />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* En-tête */}
        <EnTete />

        {/* Corps du dashboard */}
        <main className="p-6 space-y-10">
            <Stat/>
          <EvenGraph />
          <Participants />
          <Tickets />
          <CreerEvenement />
        </main>
      </div>
    </div>
  );
}
