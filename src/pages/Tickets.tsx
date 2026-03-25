import Graphique from "../components/Graphique";

const dataLine = [
  { mois: "Jan", valeur: 700 },
  { mois: "Fév", valeur: 1000 },
  { mois: "Mar", valeur: 50 },
  { mois: "Avr", valeur: 700 },
  { mois: "Mai", valeur: 250 },
  { mois: "Juin", valeur: 700 },
];

function Tickets() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Tickets vendus</h2>
      <Graphique type="line" data={dataLine} titre="Évolution des ventes de tickets" />
    </div>
  );
}
export default Tickets