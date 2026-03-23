import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Clock, Car, Bus, Accessibility } from "lucide-react";
import practiceOffice from "@/assets/practice-office.jpg";
import springboardLogo from "@/assets/Springboard.jpg";

const Practice = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Professional Practice" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Springboard Mental Health Counseling & Consultancy Ltd"
            subtitle="A private practice offering professional mental health services, therapy, counseling, and consultancy to individuals, families, groups, and organizations."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
                <div className="flex items-center mb-8">
                  <img src={springboardLogo} alt="Springboard Mental Health logo" className="w-20 h-20 object-contain" />
                </div>
              <img
                src={practiceOffice}
                alt="Springboard Mental Health office"
                className="rounded-2xl shadow-card w-full object-cover aspect-video mb-8"
              />

              <div className="bg-card rounded-xl p-8 shadow-card space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    To provide accessible, evidence-based mental health services that empower individuals and communities to achieve holistic well-being and resilience.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Approach</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    We combine integrative counseling techniques with a client-centered philosophy, ensuring that each individual receives personalized care tailored to their unique needs and circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Location Details */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" /> Location
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Africa International University (office inside the university)<br />
                  Karen, Nairobi, Kenya
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Cecilia W M - Springboard Mental Health Counseling & Consultancy Ltd - Licensed Counselor. Karen.
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps?q=-1.301763,36.689759&z=16&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Africa International University location"
                />
              </div>

              {/* Getting Here */}
              <div className="bg-card rounded-xl p-8 shadow-card space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Getting Here</h3>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Car size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">By Car:</strong> Ample parking available on premises. Located inside Africa International University in Karen.</p>
                </div>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Bus size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">Public Transport:</strong> Accessible via matatu routes serving the Karen area from Nairobi CBD.</p>
                </div>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Accessibility size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">Accessibility:</strong> Ground-floor office with wheelchair-accessible entrance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Practice;
