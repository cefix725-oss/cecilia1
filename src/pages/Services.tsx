import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Heart, GraduationCap, Users, Brain, Smile, Activity,
  Shield, Briefcase, BookOpen, Globe, Baby, Gamepad2,
  Lightbulb, HeartHandshake, CloudRain, Flower2, ArrowRight,
} from "lucide-react";

const allServices = [
  { icon: <Heart size={24} />, title: "Mental Health Counseling", desc: "Professional counseling for various mental health concerns.", category: "Individual" },
  { icon: <GraduationCap size={24} />, title: "Student Mentorship", desc: "Academic and personal guidance for students.", category: "Academic" },
  { icon: <Brain size={24} />, title: "Psychological Assessment", desc: "Comprehensive psychological evaluations.", category: "Individual" },
  { icon: <Users size={24} />, title: "Family Therapy", desc: "Healing and strengthening family relationships.", category: "Family" },
  { icon: <HeartHandshake size={24} />, title: "Group Therapy", desc: "Therapeutic support in group settings.", category: "Group" },
  { icon: <Activity size={24} />, title: "Stress Management", desc: "Techniques and strategies for managing stress.", category: "Individual" },
  { icon: <CloudRain size={24} />, title: "Depression Treatment", desc: "Evidence-based approaches for depression.", category: "Individual" },
  { icon: <Flower2 size={24} />, title: "Life Transition Counseling", desc: "Support during major life changes.", category: "Individual" },
  { icon: <BookOpen size={24} />, title: "Training & Workshops", desc: "Mental health education and training.", category: "Corporate" },
  { icon: <Globe size={24} />, title: "Community Mental Health", desc: "Community-based mental health initiatives.", category: "Group" },
  { icon: <Lightbulb size={24} />, title: "Research Supervision", desc: "Guiding student research projects.", category: "Academic" },
  { icon: <Briefcase size={24} />, title: "Corporate Training", desc: "Workplace mental wellness programs.", category: "Corporate" },
  { icon: <Shield size={24} />, title: "Trauma Counseling", desc: "Healing from traumatic experiences.", category: "Individual" },
  { icon: <Smile size={24} />, title: "Grief Counseling", desc: "Support through loss and bereavement.", category: "Individual" },
  { icon: <Activity size={24} />, title: "Anxiety Management", desc: "Tools and techniques for anxiety relief.", category: "Individual" },
  { icon: <Baby size={24} />, title: "Parenting Skills Training", desc: "Supporting parents in child development.", category: "Family" },
  { icon: <Gamepad2 size={24} />, title: "Play Therapy", desc: "Therapeutic play for children.", category: "Family" },
  { icon: <Brain size={24} />, title: "Cognitive Behavioral Therapy", desc: "Structured therapy for thought patterns.", category: "Individual" },
];

const categories = ["All", "Individual", "Family", "Group", "Corporate", "Academic"];

import { useState } from "react";

const Services = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allServices : allServices.filter((s) => s.category === filter);

  return (
    <PageLayout breadcrumbs={[{ label: "Services" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Services"
            subtitle="Comprehensive mental health and counseling services tailored to individuals, families, groups, and organizations."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-body bg-primary/10 text-primary mb-3">
                  {service.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking CTA */}
          <div className="text-center mt-16 bg-card rounded-2xl p-10 shadow-card">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Ready to Get Started?</h3>
            <p className="font-body text-muted-foreground mb-6">Contact Cecilia to discuss which service is right for you.</p>
            <Link to="/booking">
              <Button size="lg" className="font-body bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Consultation <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
