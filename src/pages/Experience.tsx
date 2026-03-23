import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface Position {
  title: string;
  institution: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
}

const positions: Position[] = [
  {
    title: "Counseling Psychology Lecturer",
    institution: "Africa International University & Kenya Methodist University",
    period: "2014 – Present",
    location: "Nairobi, Kenya",
    current: true,
    responsibilities: [
      "Teaching counseling psychology courses at undergraduate and graduate levels",
      "Mentoring students in academic and professional development",
      "Supervising student research projects and theses",
      "Providing academic advising and career guidance",
      "Developing and delivering mental health training programs",
      "Curriculum development and review",
      "Assessing student performance and progress",
      "Collaborating with faculty on research initiatives",
    ],
  },
  {
    title: "Counseling Psychologist",
    institution: "Shalom Hospital",
    period: "2011 – 2014",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Conducted individual and group therapy sessions",
      "Performed psychological assessments and evaluations",
      "Developed treatment plans for patients",
      "Provided patient support and crisis intervention",
      "Collaborated with multidisciplinary medical teams",
      "Maintained confidential patient records",
      "Facilitated support groups",
      "Participated in hospital mental health programs",
    ],
  },
];

const additionalRoles = [
  { title: "Private Practice Consultant", period: "2014 – Present", desc: "Independent counseling and consulting services" },
  { title: "Mental Health Trainer", period: "2010 – Present", desc: "Various organizations, NGOs, and institutions" },
  { title: "Community Mental Health Advocate", period: "2008 – Present", desc: "Community outreach and mental health awareness" },
];

const Experience = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Experience" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionHeading title="Professional Experience" subtitle="A career dedicated to mental health, education, and community well-being." />

          {/* Timeline */}
          <div className="space-y-8">
            {positions.map((pos) => (
              <div key={pos.title + pos.institution} className="bg-card rounded-xl p-8 shadow-card relative">
                {pos.current && (
                  <span className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-body bg-primary/10 text-primary font-medium">
                    Current
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{pos.title}</h3>
                    <p className="font-body text-primary font-medium">{pos.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-muted-foreground font-body">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {pos.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {pos.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="ml-14 space-y-2">
                  {pos.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Roles */}
          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Additional Roles</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {additionalRoles.map((role) => (
                <div key={role.title} className="bg-card rounded-xl p-6 shadow-card">
                  <h4 className="font-display text-base font-semibold text-foreground mb-1">{role.title}</h4>
                  <p className="font-body text-xs text-primary font-medium mb-2">{role.period}</p>
                  <p className="font-body text-sm text-muted-foreground">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;
