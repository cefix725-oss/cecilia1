import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Education" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionHeading title="Education & Certifications" subtitle="Academic qualifications and professional development." />

          {/* Degrees */}
          <div className="space-y-6 mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap size={24} className="text-primary" /> Formal Education
            </h3>
            {[
              { degree: "Master of Arts in Counseling Psychology", institution: "Daystar University, Nairobi, Kenya", detail: "Advanced study in counseling theory, psychotherapy, psychological assessment, and research methodology." },
              { degree: "Bachelor of Commerce (BCom)", institution: "University of Nairobi, Nairobi, Kenya", detail: "Foundation in business principles complementing her later career in organizational and corporate counseling." },
            ].map((edu) => (
              <div key={edu.degree} className="bg-card rounded-xl p-8 shadow-card">
                <h4 className="font-display text-lg font-semibold text-foreground">{edu.degree}</h4>
                <p className="font-body text-primary font-medium text-sm mb-2">{edu.institution}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6 mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <Award size={24} className="text-primary" /> Professional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Licensed Counselor, Kenya",
                "Certified Mental Health Consultant",
                "Certified CBT Practitioner",
                "Trauma Counseling Certification",
                "Play Therapy Certification",
              ].map((cert) => (
                <div key={cert} className="bg-card rounded-xl p-5 shadow-card flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Award size={16} className="text-accent" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Continuing Education */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen size={24} className="text-primary" /> Continuing Education & Memberships
            </h3>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Cecilia actively pursues continuing education through workshops, conferences, and training programs to maintain her expertise and deliver the highest standard of care.
              </p>
              <p className="font-body text-sm text-muted-foreground italic">
                Professional memberships and additional certifications to be updated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Education;
