export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12 border-t">
      <p className="text-gray-600 mb-4">
        @ 2026 Evana. Tous droits réservés.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E3A81] hover:text-[#F97316] text-2xl"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E3A81] hover:text-[#F97316]  text-2xl"
        >
          X
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E3A81] hover:text-[#F97316]  text-2xl"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E3A81] hover:text-[#F97316]  text-2xl"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
