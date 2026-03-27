import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Cecilia Wambui M</h3>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Counseling Psychologist, University Lecturer, and Mental Health Consultant empowering individuals through evidence-based care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Experience", path: "/experience" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm">
              {["Mental Health Counseling", "Student Mentorship", "Family Therapy", "Corporate Training", "Trauma Counseling"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-primary-foreground/70">Africa International University (office inside the university), Karen, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <div className="space-y-1">
                  <div className="text-primary-foreground font-semibold">+254 716 833 224 (Primary)</div>
                  <div className="text-primary-foreground/80">Other contacts:</div>
                  <div className="space-x-2">
                    <a href="tel:+254100343201" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">+254 100 343 201</a>
                    <span className="text-primary-foreground/50">|</span>
                    <a href="tel:+254107186767" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">+254 107 186 767</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a
                  href="mailto:springboardmentalhealth2@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  springboardmentalhealth2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="shrink-0 text-primary" />
                <a href="https://www.linkedin.com/in/cecilia-wambui-mboya-b16b6265/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-600" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.002 2.002c-5.52 0-9.999 4.479-9.999 9.999 0 1.754.45 3.46 1.314 4.96L2 22l4.19-1.1a9.923 9.923 0 0 0 5.813 1.7h.001c5.522 0 9.999-4.477 9.999-9.999 0-5.52-4.477-9.999-9.999-9.999Zm5.452 14.217c-.243.683-1.44 1.307-1.99 1.383-.13.02-.478.033-.952.03a9.04 9.04 0 0 1-4.79-1.58 8.935 8.935 0 0 1-3.3-4.24c-.41-1.07-.3-1.587.244-2.02.262-.21.582-.28.896-.88.31-.596.43-.773.65-.61.21.14.52.56.7.85.18.286.35.35.64.24.25-.09.86-.31 1.05-.33.2-.02.42-.03.63.34.23.41.76 1.42.84 1.54.08.12.12.27.02.44-.11.16-.16.25-.31.4-.15.15-.31.34-.44.45-.13.12-.27.27-.12.53.15.25.68 1.12 1.46 1.82 1.01.93 1.88 1.24 2.14 1.38.27.14.43.12.59-.076.15-.2.61-.71.77-.94.16-.23.35-.2.59-.12.24.08 1.53.72 1.79.85.26.14.44.21.51.33.07.12.07.72-.17 1.39Z" fill="currentColor"/>
                 </svg>
                </span>
                <a
                  href="https://wa.me/254107186767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-100 transition-colors font-semibold"
                >
                  +254 107 186 767 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-primary" />
                <a
                  href="https://www.waze.com/en/live-map/directions/ke/nairobi-county/nairobi/cecilia-w-m-springboard-mental-health-counseling-and-consultancy-ltd-licenced-counselor.karen.?place=ChIJlRM9tCMdLxgRXxrsczeV3YQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Open location in Waze
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">M</span>
                <a
                  href="https://medium.com/@cclmboya/forgiveness-and-mental-health-3a7648f29500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Forgiveness and Mental Health (Medium)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={16} className="shrink-0 text-primary" />
                <a href="https://www.facebook.com/cecilia.mboya" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Youtube size={16} className="shrink-0 text-primary" />
                <a href="https://www.youtube.com/@cclmboya" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs font-body">
            © 2026 Cecilia Wambui M. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-body">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
