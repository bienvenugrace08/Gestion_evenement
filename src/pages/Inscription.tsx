import { User, Mail, Phone, Lock } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function RegisterForm({ registerData, setRegisterData, handleRegister, errors, loading }) {
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <Input id="register-name" label="Nom complet" type="text" placeholder="Moussa Diallo"
        value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
        icon={<User size={16} />} error={errors.name} required />

      <Input id="register-email" label="Adresse email" type="email" placeholder="vous@exemple.com"
        value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
        icon={<Mail size={16} />} error={errors.email} required />

      <Input id="register-phone" label="Téléphone" type="tel" placeholder="+221 77 xxx xxxx"
        value={registerData.phone} onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
        icon={<Phone size={16} />} error={errors.phone} required />

      <Input id="register-password" label="Mot de passe" type="password" placeholder="••••••••"
        value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
        icon={<Lock size={16} />} error={errors.password} required />

      <Input id="register-confirm-password" label="Confirmer le mot de passe" type="password" placeholder="••••••••"
        value={registerData.confirmPassword} onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
        icon={<Lock size={16} />} error={errors.confirmPassword} required />

      {/* Conditions */}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={registerData.acceptTerms}
          onChange={(e) => setRegisterData({ ...registerData, acceptTerms: e.target.checked })}
          className="w-4 h-4 text-amber-500 border-gray-300 rounded" />
        J’accepte les conditions d’utilisation
      </label>
      {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

      <Button type="submit" variant="primary" fullWidth size="lg" loading={loading}>
        Créer mon compte
      </Button>
    </form>
  );
}
