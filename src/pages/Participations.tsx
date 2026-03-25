import Graphique from "../components/Graphique";

const dataPie = [
  { categorie: "VIP", valeur: 180 },
  { categorie: "Standard", valeur: 250 },
  { categorie: "Gratuit", valeur: 700 },
];
function Participants() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Participants et inscrits actuels</h2>
      <Graphique type="pie" data={dataPie} titre="Répartition des participants" />
    </div>
  );
}
export default Participants