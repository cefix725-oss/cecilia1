import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: { label: string; path?: string }[];
  className?: string;
}

const PageLayout = ({ children, breadcrumbs, className = "" }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 ${className}`}>
        {breadcrumbs && (
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
