import { Instagram, Linkedin, Youtube, Facebook, CheckCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/40 py-8 backdrop-blur-2xl sm:mt-16 sm:py-10 md:mt-20">
      <div className="container mx-auto flex flex-col gap-6 px-4 text-white/70 sm:gap-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold sm:tracking-[0.4em]">
            Akbar Ali
          </p>
          <p className="text-lg text-white sm:text-xl">Dubai Real Estate Consultant</p>
          <p className="mt-1.5 text-xs text-white/60 sm:mt-2 sm:text-sm">
            © 2024 Akbar Ali · Dubai Land Department · RERA Certified
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] sm:gap-4 sm:text-sm sm:tracking-[0.3em]">
          {["About", "Properties", "Services", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2.5 text-white transition hover:border-gold hover:text-gold sm:p-3"
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="container mt-4 flex flex-col items-center gap-2 px-4 text-xs text-white/60 sm:mt-6 sm:flex-row sm:gap-3 sm:px-6 sm:text-sm">
        <CheckCircle className="h-4 w-4 text-gold sm:h-5 sm:w-5" />
        <p className="text-center sm:text-left">RERA License BRN 48902 · Dubai Land Department Trusted Agent</p>
      </div>
    </footer>
  );
}

