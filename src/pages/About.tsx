import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";
import aboutCandid from "@/assets/about-candid.jpg";
import cecilia from "@/assets/cecilia.jpg";
import cecilia2 from "@/assets/cecilia-2.jpg";
import cecilia3 from "@/assets/cecilia-3.jpg";
import cecilia4 from "@/assets/cecilia-4.jpg";
import practiceOffice from "@/assets/practice-office.jpg";

const focusAreas = [
  "Teaching counseling psychology",
  "Student mentorship",
  "Research supervision",
  "Mental health training",
  "Community counseling",
  "Academic advising",
];

const About = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "About" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading title="About Cecilia" centered={false} />
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  Cecilia Wambui M is an experienced counseling psychologist and lecturer with over 15 years of experience in academia and mental health practice. She has counseled over 1,500 clients, with a consistent practice of seeing at least 2 clients per week (approximately 10 per month) throughout her career. She is dedicated to mentoring students, supervising research, providing therapy, and developing wellness programs for individuals and organizations.
                </p>
                <p>
                  Cecilia W. M is the founder of Springboard Mental Health Counseling & Consultancy Ltd and a licensed counselor. She serves as the lead counselor at the Karen office location, offering professional support for individuals, families, and organizations.
                </p>
                <p>
                  Licensed Family and Marital Counseling Psychologist. Empowering you to be the best you are meant to be.
                </p>
                <p>There is hope.</p>
              </div>

              {/* Mission Quote */}
              <div className="mt-10 bg-card rounded-xl p-8 shadow-card border-l-4 border-primary">
                <Quote className="text-primary mb-3" size={28} />
                <p className="font-display text-lg italic text-foreground leading-relaxed">
                  "My mission is to empower individuals to achieve emotional wellness and personal growth through professional counseling and mentorship."
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[cecilia, cecilia2, cecilia3, cecilia4, aboutCandid, practiceOffice].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Cecilia photo ${idx + 1}`}
                    className="rounded-2xl shadow-card w-full h-full object-cover aspect-[3/2] hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <img
                  src={aboutCandid}
                  alt="Cecilia portrait"
                  className="rounded-2xl shadow-card w-full h-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Focus Areas */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Focus Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services / Contacts */}
              <div className="mt-8 grid lg:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-7 shadow-card border border-border/60">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">Services Offered</h3>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    <li>Relationship issues</li>
                    <li>Domestic Abuse & Recovery</li>
                    <li>Divorce Challenges</li>
                    <li>Trauma</li>
                    <li>Adolescents issues</li>
                    <li>Premarital counseling</li>
                    <li>Loss and grief</li>
                    <li className="pt-2">
                      Personal therapy for psychology university and college students at subsidized rates.
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-7 shadow-card border border-border/60">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">Contacts & Location</h3>
                  <div className="space-y-2 font-body text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Phone (Primary):</span> <a href="tel:+254716833224" className="underline hover:text-primary">+254 716 833 224</a>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Phone (Additional):</span> <a href="tel:+254100343201" className="underline hover:text-primary">+254 100 343 201</a>, <a href="tel:+254107186767" className="underline hover:text-primary">+254 107 186 767</a>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Email:</span> <a href="mailto:springboardmentalhealth2@gmail.com" className="underline hover:text-primary">springboardmentalhealth2@gmail.com</a>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Location:</span> Africa International University (office inside the university)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <SectionHeading title="Professional Philosophy" />
            <p className="font-body text-muted-foreground leading-relaxed">
              Cecilia's counseling approach is rooted in the belief that every individual has the inherent capacity for growth and healing. She integrates Solution-Focused Brief Therapy as her primary model, then Person-Centered Therapy, then Cognitive Behavioral Therapy, and mindfulness-based techniques to create a safe, non-judgmental space where clients can explore their challenges and develop resilience. Her academic work reflects this same philosophy—nurturing students to become competent, ethical mental health professionals.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
