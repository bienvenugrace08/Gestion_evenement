function EnTete() {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4 shadow">
      <div className="flex items-center space-x-2">
        <span className="text-[#F97316]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
</span>
<span className="font-bold text-4xl text-[#F97316]">Evana</span>
      </div>

      <div className="flex items-center space-x-3">
        <img src="src/assets/1c8fc24a8f57191db4e060bd5074863f.jpg" alt="Profil" className="rounded-full w-16 h-16 object-cover "  />
        <span className="font-medium text-2xl">Elisabeth</span>
        <select className="border text-2xl rounded p-1">
          <option>Profil</option>
          <option>Paramètres</option>
        </select>
      </div>
    </header>
  );
}
export default EnTete