import React, { useRef, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { config } from "@/lib/config";

import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import BackToTopButton from "@/components/BackToTopButton";
import SkipToContent from "@/components/SkipToContent";

// Lazy load below-the-fold sections for better initial load performance
const AudiencesCarousel = lazy(() => import("@/components/AudiencesCarousel"));
const ScreenshotSection = lazy(() => import("@/components/ScreenshotSection"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const KeyMetricsSection = lazy(() => import("@/components/KeyMetricsSection"));
const ChatWidget = lazy(() => import("@/components/ChatWidget"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback component for lazy-loaded sections
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  </div>
);

const Index: React.FC = () => {
  const { toast } = useToast();

  // Create refs for each section to enable smooth scrolling
  const audiencesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for header height
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleGetStartedClick = () => {
    // Redirect to the signup/login page
    window.location.href = config.webAppUrl;
  };

  const handleSignInClick = () => {
    // Scroll to the 'Who We Help' section
    const element = document.getElementById('audiences');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Loyalist – Café Loyalty System</title>
        <meta name="description" content="Transform your café business with Loyalist's digital loyalty system. Connect with customers, increase retention and boost revenue with personalized rewards." />
        <meta name="keywords" content="café loyalty, coffee shop rewards, café coupons, loyalty program for investors" />
      </Helmet>

      <SkipToContent />
      <ScrollProgressIndicator />
      <Header onNavItemClick={scrollToSection} />

      <main id="main-content" className="overflow-hidden" role="main" tabIndex={-1}>
        <section
          id="hero"
          className="section-fullscreen border-b border-border/30 animate-fade-in"
          aria-label="Welcome to Loyalist"
        >
          <HeroSection
            onGetStartedClick={handleGetStartedClick}
            onLearnMoreClick={handleSignInClick}
          />
        </section>

        <Suspense fallback={<SectionLoader />}>
          <section
            id="audiences"
            ref={audiencesRef}
            className="section-fullscreen border-b border-border/30"
            aria-label="Who we serve"
          >
            <AudiencesCarousel />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section
            id="metrics-section"
            aria-label="Key metrics and achievements"
          >
            <KeyMetricsSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section
            id="screenshots"
            className="section-fullscreen border-b border-border/30"
            aria-label="Application screenshots"
          >
            <ScreenshotSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section
            id="testimonials"
            className="section-fullscreen border-b border-border/30"
            aria-label="Customer testimonials"
          >
            <TestimonialSection />
          </section>
        </Suspense>

        <section id="faq" aria-label="Frequently asked questions"></section>
      </main>

      <BackToTopButton />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;

