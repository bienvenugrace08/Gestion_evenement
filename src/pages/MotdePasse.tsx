import { Mail, CheckCircle } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

type MotdePasseProps = {
  forgotEmail: string;
  setForgotEmail: React.Dispatch<React.SetStateAction<string>>;
  handleForgotPassword: (e: React.FormEvent) => void;
  errors: Record<string, string>;
  loading: boolean;
  successMessage: string;
  setActiveTab: (tab: "login" | "register" | "forgot") => void;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function MotdePasse({
  forgotEmail,
  setForgotEmail,
  handleForgotPassword,
  errors,
  loading,
  successMessage,
  setActiveTab,
  setSuccessMessage,
}: MotdePasseProps) {
  return (
    <div>
      {!successMessage ? (
        <form onSubmit={handleForgotPassword} className="space-y-5">
          <Input
            id="forgot-email"
            label="Adresse email"
            type="email"
            placeholder="vous@exemple.com"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            icon={<Mail size={16} />}
            error={errors.forgotEmail}
            required
          />

          <Button type="submit" variant="primary" fullWidth size="lg" loading={loading}>
            Envoyer le lien de réinitialisation
          </Button>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Email envoyé !</h3>
          <p className="text-gray-500 text-sm">{successMessage}</p>
          <button
            onClick={() => {
              setActiveTab("login");
              setSuccessMessage("");
            }}
            className="mt-6 text-amber-600 font-semibold hover:underline"
          >
            Retour à la connexion
          </button>
        </div>
      )}
    </div>
  );
}
