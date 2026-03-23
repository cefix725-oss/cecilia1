import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone } from "lucide-react";

const NotFound = () => (
  <PageLayout>
    <section className="py-24 lg:py-36">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-lg">
        <div className="font-display text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="font-body text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/">
            <Button className="font-body">
              <Home size={16} className="mr-2" /> Go Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="font-body">
              <Search size={16} className="mr-2" /> Browse Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="font-body">
              <Phone size={16} className="mr-2" /> Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
