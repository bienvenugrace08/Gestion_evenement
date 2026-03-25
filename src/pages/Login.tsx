import { Mail, Lock } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login({ loginData, setLoginData, handleLogin, errors, loading, globalError }) {
  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <Input
        id="login-email"
        label="Adresse email"
        type="email"
        placeholder="vous@exemple.com"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        icon={<Mail size={16} />}
        error={errors.email}
        required
      />

      <Input
        id="login-password"
        label="Mot de passe"
        type="password"
        placeholder="••••••••"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        icon={<Lock size={16} />}
        error={errors.password}
        required
      />

      <Button type="submit" variant="primary" fullWidth size="lg" loading={loading}>
        Se connecter
      </Button>

      {globalError && <p className="text-red-500 text-sm">{globalError}</p>}
    </form>
  );
}
