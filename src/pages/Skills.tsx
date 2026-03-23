import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Clinical Skills",
    skills: ["Psychological Testing and Assessment", "Cognitive Behavioral Therapy (CBT)", "Family Systems Therapy", "Group Therapy Facilitation", "Play Therapy", "Trauma-Informed Care", "Grief Counseling", "Crisis Intervention"],
  },
  {
    title: "Specialized Areas",
    skills: ["Health Psychology", "Community Health Development", "Parenting Skills Training", "Stress Management", "Depression and Anxiety Treatment", "Life Transition Counseling", "Young Adult Mental Health", "Corporate Wellness"],
  },
  {
    title: "Academic & Research Skills",
    skills: ["Research Methodology", "Academic Mentorship", "Thesis Supervision", "Curriculum Development", "Student Advising", "Lecture Delivery", "Workshop Facilitation"],
  },
  {
    title: "Counseling Approaches",
    skills: [
      "Solution-Focused Brief Therapy",
      "Person-Centered Therapy",
      "Cognitive Behavioral Therapy (CBT)",
      "Psychodynamic Approach",
      "Mindfulness-Based Techniques",
      "Integrative Counseling",
    ],
  },
];

const Skills = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Skills & Expertise" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Skills & Expertise" subtitle="A comprehensive range of clinical, academic, and specialized competencies." />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 border-b border-border pb-3">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 font-body text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Development */}
          <div className="mt-12 bg-card rounded-xl p-8 shadow-card max-w-2xl mx-auto text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Professional Development</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cecilia is committed to continuous professional development, regularly attending workshops, conferences, and training programs to stay current with the latest evidence-based practices in counseling psychology.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;
