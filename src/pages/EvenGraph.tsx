import Graphique from "../components/Graphique";

const dataBar = [
  { mois: "Jan", valeur: 10 },
  { mois: "Fév", valeur: 6 },
  { mois: "Mar", valeur: 8 },
  { mois: "Avr", valeur: 5 },
  { mois: "Mai", valeur: 7 },
  { mois: "Juin", valeur: 9 },
];

function EvenGraph() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Événements</h2>
      <Graphique type="bar" data={dataBar} titre="Événements par mois" />
    </div>
  );
}
export default EvenGraph
