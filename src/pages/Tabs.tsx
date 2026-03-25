// src/components/auth/Tabs.tsx
type AuthTab = "login" | "register" | "forgot";

type TabsProps = {
  activeTab: AuthTab;
  setActiveTab: (tab: AuthTab) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { key: "login", label: "Connexion" },
    { key: "register", label: "Inscription" },
    { key: "forgot", label: "Mot de passe oublié" },
  ];

  return (
    <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key as AuthTab)}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
            activeTab === tab.key
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
