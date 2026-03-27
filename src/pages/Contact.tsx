import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import springboardLogo from "@/assets/Springboard.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().max(20).optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  preferredContact: z.string().min(1),
  preferredTime: z.string().optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "", preferredContact: "email", preferredTime: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    // No backend/database: redirect users to email/phone after validation.
    const recipientEmail = "springboardmentalhealth2@gmail.com";
    const subject = `Contact Request: ${form.subject}`;
    const body = [
      `Name: ${form.name}`,
      `From (your email): ${form.email}`,
      `Reply to: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Preferred contact: ${form.preferredContact}`,
      form.preferredTime ? `Preferred time: ${form.preferredTime}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\r\n");

    if (form.preferredContact === "email" || form.preferredContact === "either") {
      // No reliable Gmail deep-linking: use mailto (most consistent in browsers).
      // Include the user email inside the body for clarity; the real "From" is set by the mail client.
      const normalizedBody = body.replace(/\r\n/g, "\n");
      const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(normalizedBody)}`;
      window.location.href = mailto;
      return;
    }

    if (form.preferredContact === "phone") {
      // If the user provided a phone number, we still route the request to the office phone.
      window.location.href = "tel:+254716833224";
      return;
    }

    // Fallback (shouldn't happen due to schema)
    toast({ title: "Message Ready", description: "Please contact the office using the options provided." });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Contact" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Get in Touch" subtitle="Reach out for counseling inquiries, consultations, or speaking engagements." />

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-8 shadow-card space-y-5">
                <div className="flex items-center justify-start">
                  <img src={springboardLogo} alt="Springboard Mental Health logo" className="w-14 h-14 object-contain" />
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">Office Address</p>
                    <p className="text-muted-foreground">
                      Africa International University (office inside the university)<br />
                      Karen, Nairobi, Kenya
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      Cecilia W M - Springboard Mental Health Counseling & Consultancy Ltd - Licensed Counselor. Karen.
                      {" "}
                      <a
                        href="https://share.google/GH3fRc2JpsBzJTjJP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                      >
                        Open map
                      </a>
                      {" "}•{" "}
                      <a
                        href="https://www.waze.com/en/live-map/directions/ke/nairobi-county/nairobi/cecilia-w-m-springboard-mental-health-counseling-and-consultancy-ltd-licenced-counselor.karen.?place=ChIJlRM9tCMdLxgRXxrsczeV3YQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                      >
                        Open in Waze
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">Phone</p>
                    <div className="space-y-1">
                      <a
                        href="tel:+254716833224"
                        className="text-primary hover:text-primary/90 font-semibold transition-colors"
                      >
                        +254 716 833 224 (Primary)
                      </a>
                      <a
                        href="tel:+254100343201"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +254 100 343 201
                      </a>
                      <a
                        href="tel:+254107186767"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +254 107 186 767
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 font-bold mt-0.5" title="WhatsApp">
                    W
                  </span>
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/254107186767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                    >
                      +254 107 186 767
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <a href="mailto:springboardmentalhealth2@gmail.com" className="shrink-0 mt-0.5 hover:text-foreground transition-colors">
                    <Mail size={20} className="text-primary" />
                  </a>
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:springboardmentalhealth2@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      springboardmentalhealth2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/cecilia-wambui-mboya-b16b6265/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">View Profile</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 text-primary shrink-0 mt-0.5 inline-flex items-center justify-center font-bold">M</span>
                  <div className="font-body text-sm">
                    <p className="font-medium text-foreground">Featured Article</p>
                    <a
                      href="https://medium.com/@cclmboya/forgiveness-and-mental-health-3a7648f29500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Forgiveness and Mental Health
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-primary" /> Working Hours
                </h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Monday</span><span className="text-foreground font-medium">09:00 - 17:00</span></li>
                  <li className="flex justify-between"><span>Tuesday</span><span className="text-foreground font-medium">09:00 - 17:00</span></li>
                  <li className="flex justify-between"><span>Wednesday</span><span className="text-foreground font-medium">09:00 - 17:00</span></li>
                  <li className="flex justify-between"><span>Thursday</span><span className="text-foreground font-medium">09:00 - 17:00</span></li>
                  <li className="flex justify-between"><span>Friday</span><span className="text-foreground font-medium">09:00 - 17:00</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="text-foreground font-medium">10:00 - 17:00</span></li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps?q=-1.301763,36.689759&z=16&output=embed"
                  width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office location"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-body text-sm">Full Name *</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1 font-body" />
                    {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-body text-sm">Email Address *</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1 font-body" />
                    {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-body text-sm">Phone Number</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1 font-body" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="font-body text-sm">Subject *</Label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      <option value="counseling">Counseling Inquiry</option>
                      <option value="booking">Consultation Booking</option>
                      <option value="training">Training Request</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.subject && <p className="text-destructive text-xs mt-1 font-body">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-body text-sm">Message *</Label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1 font-body" />
                  {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-sm">Preferred Contact Method</Label>
                    <div className="flex gap-4 mt-2 font-body text-sm">
                      {["email", "phone", "either"].map((m) => (
                        <label key={m} className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="preferredContact" value={m} checked={form.preferredContact === m} onChange={(e) => update("preferredContact", e.target.value)} className="accent-primary" />
                          <span className="capitalize">{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className="font-body text-sm">Preferred Time</Label>
                    <select
                      id="preferredTime"
                      value={form.preferredTime}
                      onChange={(e) => update("preferredTime", e.target.value)}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full font-body bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
