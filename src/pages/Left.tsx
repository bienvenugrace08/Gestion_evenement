export default function Left() {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #0a0a0a 100%)",
      }}
    >
      {/* Décoration de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1E3A81] rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-[#F97316]  rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(60deg, transparent, transparent 30px, rgba(245,158,11,0.5) 30px, rgba(245,158,11,0.5) 31px)",
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative flex items-center gap-3">
        <div>
          <h1 className="font-extrabold text-2xl text-white">
            <div className="flex items-center space-x-2">
        <span className=" text-[#F97316]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
</span>
<span className="font-bold text-7xl text-[#F97316]">Evana</span>
      </div>
          </h1>
          <p className="text-amber-500/70 text-xl">Sénégal 🇸🇳</p>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Gérez vos événements<br />
        </h2>
        <p className="text-white text-xl mb-8">
          Rejoignez plus de 500 organisateurs d'événements en Afrique de l'Ouest
          qui font confiance à Evana.
        </p>

        {/* Avantages */}
        <div className="space-y-4">
          {[
            { icon: "🎤", text: "Créez des événements en 5 minutes" },
            { icon: "💳", text: "Paiements en FCFA, Orange Money, Wave" },
            { icon: "📊", text: "Analyses et statistiques en temps réel" },
            { icon: "🌍", text: "Touchez l'Afrique de l'Ouest entière" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Citation en bas */}
      <div className="relative border-l-2 border-amber-500 pl-4">
        <p className="text-gray-400 italic">
          "Evana a transformé la façon dont nous organisons nos événements. Simple, efficace et made in Afrique."
        </p>
        <p className="text-amber-500 text-sm font-medium mt-2">— Fatou Sarr, FESMAN Dakar</p>
      </div>
    </div>
  );
}
