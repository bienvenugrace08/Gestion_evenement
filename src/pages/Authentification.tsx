import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./Left";
import Tabs from "./Tabs";
import Login from "./Login";
import Inscription from "./Inscription";
import MotdePasse from "./MotdePasse";

type AuthTab = "login" | "register" | "forgot";

type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type RegisterData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: "organizer" | "participant";
  acceptTerms: boolean;
};

export default function AuthPage() {
  const navigate = useNavigate(); // hook de navigation

  const [activeTab, setActiveTab] = useState<AuthTab>("login");

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "participant",
    acceptTerms: false,
  });

  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fonctions fictives pour l’exemple
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
    // après succès
    navigate("/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", registerData);
    // après succès
    navigate("/dashboard");
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Lien de réinitialisation envoyé à " + forgotEmail);
  };

  return (
    <div className="min-h-screen flex">
      <Left />

      <div className="flex-1 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "login" && (
            <Login
              loginData={loginData}
              setLoginData={setLoginData}
              handleLogin={handleLogin}
              errors={errors}
              loading={loading}
              globalError={globalError}
            />
          )}

          {activeTab === "register" && (
            <Inscription
              registerData={registerData}
              setRegisterData={setRegisterData}
              handleRegister={handleRegister}
              errors={errors}
              loading={loading}
            />
          )}

          {activeTab === "forgot" && (
            <MotdePasse
              forgotEmail={forgotEmail}
              setForgotEmail={setForgotEmail}
              handleForgotPassword={handleForgotPassword}
              errors={errors}
              loading={loading}
              successMessage={successMessage}
              setActiveTab={setActiveTab}
              setSuccessMessage={setSuccessMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
