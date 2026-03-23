import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import CountUpStat from "@/components/CountUpStat";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Brain, ArrowRight, GraduationCap, Building, Sparkles, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import heroPortrait from "@/assets/cecilia.jpg";
import aboutCandid from "@/assets/cecilia-3.jpg";
import aboutCandid4 from "@/assets/about-candid.jpg";
import springboardLogo from "@/assets/Springboard.jpg";
import cecilia2 from "@/assets/cecilia-2.jpg";

const services = [
  { icon: <Heart size={28} />, title: "Mental Health Counseling", desc: "Professional counseling for various mental health concerns using evidence-based approaches." },
  { icon: <GraduationCap size={28} />, title: "Student Mentorship", desc: "Academic and personal guidance for students at undergraduate and graduate levels." },
  { icon: <Users size={28} />, title: "Family Therapy", desc: "Healing and strengthening family relationships through therapeutic intervention." },
  { icon: <Building size={28} />, title: "Corporate Wellness", desc: "Workplace mental wellness programs and corporate mental health training." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Students Mentored" },
  { value: "500+", label: "Counseling Sessions" },
  { value: "50+", label: "Trainings Conducted" },
];

const Index = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [heroPortrait, aboutCandid, springboardLogo, cecilia2, aboutCandid4];

  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 4500);

    return () => clearInterval(intervalId);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const update = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <PageLayout>
      <PageTransition>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-14 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col items-start gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary">
                      Counseling Psychologist · University Lecturer
                    </span>
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-0 tracking-tight">
                    Cecilia Wambui{" "}
                    <br className="lg:hidden" />
                    <span className="text-primary">M</span>
                  </h1>
                </div>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-2 max-w-lg">
                  Licensed Mental Health Consultant
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Empowering individuals, students, and organizations through psychological wellness, mentorship, and evidence-based counseling.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/about">
                    <Button variant="default" size="lg" className="font-body shadow-md">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="font-body">
                      View Services
                    </Button>
                  </Link>
                  <Link to="/booking">
                    <Button size="lg" className="font-body bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/8 rounded-2xl rotate-2" />
                  <div className="absolute -inset-4 bg-accent/6 rounded-2xl -rotate-1" />
                  <img
                    src={heroPortrait}
                    alt="Cecilia Wambui M — Counseling Psychologist"
                    className="relative rounded-2xl shadow-hero w-full max-w-xl h-[26rem] sm:h-[30rem] object-cover object-center bg-transparent"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {stats.map((stat) => (
                <CountUpStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Photo Snapshot Strip */}
        <section className="py-16 lg:py-20 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading title="Featured Moments" subtitle="Recent highlights from workshops, counseling sessions, and college mentorship." />
            <div className="mt-8">
              <div className="w-full max-w-[1100px] mx-auto">
                <Carousel opts={{ loop: true, align: "center", skipSnaps: false }} setApi={setCarouselApi} className="relative">
                  <CarouselContent>
                    {slides.map((src, index) => {
                      const isActive = index === selectedIndex;
                      return (
                        <CarouselItem key={index}>
                        <div
                          className={cn(
                            "overflow-hidden rounded-2xl shadow-card border border-border w-full h-96 sm:h-[34rem] bg-slate-100",
                            "transition-all duration-500 will-change-transform",
                            isActive ? "ring-1 ring-primary/30" : "opacity-80 scale-[0.98]"
                          )}
                        >
                          <img
                            src={src}
                            alt={`Featured photo ${index + 1}`}
                            className={cn(
                              "w-full h-full object-contain object-center transition-transform duration-500",
                              // Avoid zooming/cropping on inactive slides (overflow is hidden).
                              isActive ? "scale-100" : "scale-100"
                            )}
                          />
                        </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="text-foreground/80 hover:text-foreground" />
                  <CarouselNext className="text-foreground/80 hover:text-foreground" />
                </Carousel>

                <div className="flex items-center justify-center gap-2 mt-6">
                  {slides.map((_, i) => {
                    const active = i === selectedIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => carouselApi?.scrollTo(i)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          active ? "w-6 bg-primary" : "w-2 bg-border/70 hover:bg-border"
                        )}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <AnimatedSection>
              <SectionHeading
                title="Welcome"
                subtitle="With over 15 years of experience in academia and mental health practice, Cecilia is dedicated to mentoring students, supervising research, providing therapy, and developing wellness programs for individuals and organizations."
              />
              <Link to="/about">
                <Button variant="outline" className="font-body">
                  Read Full Biography <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Counseling Highlight */}
        <section className="py-14 lg:py-20 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-5">
                <div className="w-28 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img
                    src={springboardLogo}
                    alt="Springboard Mental Health logo"
                    className="w-16 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Licensed Family and Marital Counseling Psychologist</h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-3">
                Empowering you to be the best you are meant to be.
              </p>
              <p className="font-body text-lg text-primary leading-relaxed">There is hope.</p>
            </AnimatedSection>

            <div className="mt-8 grid lg:grid-cols-3 gap-6 items-stretch">
              <div className="bg-card rounded-xl p-7 shadow-card border border-border/60 transition-shadow hover:shadow-card-hover">
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Services Offered</h4>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>Relationship issues</li>
                  <li>Domestic Abuse & Recovery</li>
                  <li>Divorce Challenges</li>
                  <li>Trauma</li>
                  <li>Adolescents issues</li>
                  <li>Premarital counseling</li>
                  <li>Loss and grief</li>
                  <li className="pt-2">Personal therapy for psychology university and college students at subsidized rates.</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-7 shadow-card border border-border/60 transition-shadow hover:shadow-card-hover">
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Contacts</h4>
                <div className="font-body text-sm text-muted-foreground space-y-2">
                  <div>
                    <span className="font-medium text-foreground">Phone:</span> +254100343201, +254107186767
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Email:</span> springboardmentalhealth2@gmail.com
                  </div>
                </div>
                <div className="mt-5 flex gap-3 flex-wrap">
                  <Link to="/booking">
                    <Button size="sm" className="font-body bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="sm" variant="outline" className="font-body">
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-card rounded-xl p-7 shadow-card border border-border/60 transition-shadow hover:shadow-card-hover">
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Location</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Africa International University (office located inside the university)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <SectionHeading title="Key Services" subtitle="Comprehensive mental health and counseling services tailored to your needs." />
            </AnimatedSection>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200 border border-transparent hover:border-primary/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </StaggerChildren>
            <AnimatedSection delay={0.3} className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" className="font-body">
                  View All Services <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <AnimatedSection className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a consultation today and take the first step toward emotional wellness and personal growth.
            </p>
            <Link to="/booking">
              <Button size="lg" className="font-body bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                Schedule a Consultation
              </Button>
            </Link>
          </AnimatedSection>
        </section>
      </PageTransition>
    </PageLayout>
  );
};

export default Index;
