function CreerEvenement() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold" id="cree">Créer un événement</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Titre" className="border p-2 w-full rounded" />
        <input type="date" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Lieu" className="border p-2 w-full rounded" />
        <textarea placeholder="Description" className="border p-2 w-full rounded"></textarea>
        <button className="bg-[#F97316] text-white font-bold p-2 rounded">Valider</button>
      </form>
    </div>
  );
}
export default CreerEvenement