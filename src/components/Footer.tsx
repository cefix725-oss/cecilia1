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
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+254100343201"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    +254 100 343 201
                  </a>
                  <a
                    href="tel:+254107186767"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    +254 107 186 767
                  </a>
                  <a
                    href="tel:+254716833224"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    +254 716 833 224
                  </a>
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
                <MapPin size={16} className="shrink-0 text-primary" />
                <a
                  href="https://www.waze.com/en/live-map/directions/ke/nairobi-county/nairobi/cecilia-w-m-springboard-mental-health-counseling-and-consultancy-ltd-licenced-counselor.karen.?place=ChIJlRM9tCMdLxgRXxrsczeV3YQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Waze
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-primary" />
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
