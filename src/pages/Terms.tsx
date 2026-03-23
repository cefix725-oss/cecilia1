import PageLayout from "@/components/PageLayout";

const Terms = () => (
  <PageLayout breadcrumbs={[{ label: "Terms of Service" }]}>
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6 [&_h2]:font-display [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3">
          <p>Last updated: March 2026</p>
          <h2>Website Usage</h2>
          <p>By accessing this website, you agree to these terms. The content is provided for informational purposes only and does not constitute professional advice until a formal therapeutic relationship is established.</p>
          <h2>Services</h2>
          <p>Counseling services are provided by Cecilia Wambui Mboya through Springboard Mental Health Counseling & Consultancy Ltd. Services are subject to availability and professional assessment.</p>
          <h2>Appointments</h2>
          <p>Scheduled appointments require 24-hour notice for cancellation. Late cancellations or missed appointments may incur a fee.</p>
          <h2>Limitation of Liability</h2>
          <p>This website and its content are provided "as is" without warranties. Cecilia Wambui Mboya shall not be liable for any damages arising from the use of this website.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website is the property of Cecilia Wambui Mboya and may not be reproduced without written permission.</p>
          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of Kenya.</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Terms;
