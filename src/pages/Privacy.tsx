import PageLayout from "@/components/PageLayout";

const Privacy = () => (
  <PageLayout breadcrumbs={[{ label: "Privacy Policy" }]}>
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6 [&_h2]:font-display [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3">
          <p>Last updated: March 2026</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, including your name, email address, phone number, and any details shared through our contact form or during consultations.</p>
          <h2>How We Use Your Information</h2>
          <p>Your information is used solely to respond to inquiries, schedule appointments, and provide counseling services. We do not sell, trade, or share your personal data with third parties.</p>
          <h2>Confidentiality</h2>
          <p>All counseling sessions and communications are strictly confidential, in accordance with professional ethics and Kenyan law. Information may only be disclosed with your written consent or when required by law.</p>
          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <h2>Cookies</h2>
          <p>This website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.</p>
          <h2>Contact</h2>
          <p>
            For questions about this privacy policy, contact us at springboardmentalhealth2@gmail.com or call
            +254 100 343 201 / +254 107 186 767.
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Privacy;
