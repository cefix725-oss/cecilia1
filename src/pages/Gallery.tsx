import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Play, Calendar } from "lucide-react";
import aboutCandid from "@/assets/about-candid.jpg";
import cecilia from "@/assets/cecilia.jpg";
import cecilia2 from "@/assets/cecilia-2.jpg";
import cecilia3 from "@/assets/cecilia-3.jpg";
import cecilia4 from "@/assets/cecilia-4.jpg";
import practiceOffice from "@/assets/practice-office.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ceciliaSermon from "@/assets/cecilia-sermon.mp4";

interface GalleryItem {
  title: string;
  date: string;
  category: string;
  duration: string;
  image?: string;
  video?: string;
}

const galleryItems: GalleryItem[] = [
  { title: "CBT Workshop at Africa International University", date: "March 2024", category: "Workshop", duration: "2h 15m", image: aboutCandid },
  { title: "Mental Health Awareness Keynote", date: "February 2024", category: "Speaking Engagement", duration: "45m", image: heroPortrait },
  { title: "Trauma-Informed Care Training", date: "January 2024", category: "Workshop", duration: "3h", image: cecilia },
  { title: "KTN Interview: Youth Mental Health", date: "December 2023", category: "Interview", duration: "12m", image: cecilia2 },
  { title: "Graduate Counseling Psychology Lecture", date: "November 2023", category: "Lecture", duration: "1h 30m", image: cecilia3 },
  { title: "Community Outreach: Karen Health Center", date: "October 2023", category: "Community Outreach", duration: "4h", image: cecilia4 },
  { title: "Parenting Skills Workshop", date: "September 2023", category: "Workshop", duration: "2h", image: aboutCandid },
  { title: "Corporate Wellness Seminar", date: "August 2023", category: "Speaking Engagement", duration: "1h", image: practiceOffice },
  { title: "Grief Counseling Group Session Overview", date: "July 2023", category: "Lecture", duration: "50m", image: practiceOffice },
  { title: "CITAM Naivasha Sermon", date: "May 2025", category: "Lecture", duration: "48m", video: ceciliaSermon },
];

const categories = ["All", "Workshop", "Lecture", "Interview", "Speaking Engagement", "Community Outreach"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <PageLayout breadcrumbs={[{ label: "Gallery" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Sessions & Speaking Engagements" subtitle="Workshops, lectures, interviews, and community outreach highlights." />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border border-primary/90 shadow-primary"
                    : "bg-background text-foreground hover:bg-muted border border-border"
                }`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <article
                key={index}
                className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300"
                aria-label={`${item.category} card: ${item.title}`}
              >
                <div className="relative w-full h-0 pt-[56.25%]">
                  {item.video ? (
                    <video
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* Category label removed for cleaner image presentation */}
                  {item.video && (
                    <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white">
                      {item.duration}
                    </div>
                  )}

                  {item.video && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-12 w-12 text-white opacity-95" />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Calendar size={12} /> {item.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
