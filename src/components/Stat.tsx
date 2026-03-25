function Stat() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1E3A81] text-center mb-6">
        Bienvenue sur Evana
      </h2>
      <p className="text-gray-600  text-2xl text-center mb-8">
        Suivez vos événements, vos participants et l'évolution de vos activités.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        <div className="bg-linear-to-b from-[#1E3A81] shadow rounded-2xl p-4 text-center">
          <h3 className="text-lg font-semibold text-white">Visiteurs</h3>
          <p className="text-2xl font-bold text-[#1E3A81]">7,265</p>
          <span className="text-green-600 text-sm">+11.01%</span>
        </div>
        <div className="bg-linear-to-b from-[#1E3A81] to-white shadow rounded-2xl p-4 text-center">
          <h3 className="text-lg font-semibold text-white">Avis négatif</h3>
          <p className="text-2xl font-bold text-[#1E3A81]">25</p>
          <span className="text-red-600 text-sm">-0.03%</span>
        </div>
        <div className="bg-linear-to-b from-[#1E3A81] shadow rounded-2xl p-4 text-center">
          <h3 className="text-lg font-semibold text-white">Nouveaux participants</h3>
          <p className="text-2xl font-bold text-[#1E3A81]">256</p>
          <span className="text-green-600 text-sm">+15.03%</span>
        </div>
        <div className="bg-linear-to-b from-[#1E3A81] shadow rounded-2xl p-4 text-center">
          <h3 className="text-lg font-semibold text-white">Avis positif</h3>
          <p className="text-2xl font-bold text-[#1E3A81]">106</p>
          <span className="text-green-600 text-sm">+6.06%</span>
        </div>
      </div>
    </div>
  );
}
export default Stat