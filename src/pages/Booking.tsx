import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calendar, Video, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

const consultationTypes = [
  { icon: <MapPin size={24} />, title: "In-Person Session", desc: "Face-to-face counseling at the Karen office.", duration: "50 minutes" },
  { icon: <Video size={24} />, title: "Virtual Session", desc: "Online counseling via secure video platform.", duration: "50 minutes" },
  { icon: <Calendar size={24} />, title: "Initial Consultation", desc: "First-time assessment and goal setting.", duration: "60 minutes" },
];

const preparation = [
  "Consider what you'd like to discuss or work on",
  "Note any symptoms, concerns, or questions",
  "Arrive 10 minutes early for paperwork (in-person)",
  "Ensure a quiet, private space (virtual sessions)",
  "All sessions are strictly confidential",
];

const Booking = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Book a Consultation" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionHeading title="Book a Consultation" subtitle="Take the first step toward emotional wellness. Choose a consultation type and schedule your session." />

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {consultationTypes.map((type) => (
              <div key={type.title} className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                <div className="text-primary mb-4 flex justify-center">{type.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{type.desc}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-primary font-body font-medium">
                  <Clock size={12} /> {type.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Scheduling CTA */}
          <div className="bg-card rounded-2xl p-10 shadow-card text-center mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Schedule Your Session</h3>
            <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
              To book an appointment, please contact Cecilia directly via phone or the contact form.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+254716833224">
                    <Button size="lg" className="font-body bg-primary hover:bg-primary/90 text-white">
                      Call +254 716 833 224 (Primary)
                    </Button>
                  </a>
                  <a href="tel:+254100343201">
                    <Button size="lg" variant="outline" className="font-body">
                      Call +254 100 343 201
                    </Button>
                  </a>
                  <a href="tel:+254107186767">
                    <Button size="lg" variant="outline" className="font-body">
                      Call +254 107 186 767
                    </Button>
                  </a>
                </div>
                <a href="mailto:springboardmentalhealth2@gmail.com">
                  <Button size="lg" variant="outline" className="font-body">
                    Email
                  </Button>
                </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-body">
                  Contact Form <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Preparation */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Preparing for Your Session</h3>
              <ul className="space-y-3">
                {preparation.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Cancellation Policy</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                We understand that schedules can change. Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Late cancellations or no-shows may be subject to a cancellation fee. Please contact the office for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Booking;
