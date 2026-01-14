import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

interface HeroSectionProps {
  onGetStartedClick: () => void;
  onLearnMoreClick: () => void;
}

export function HeroSection({ onGetStartedClick, onLearnMoreClick }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onGetStartedClick} className="text-lg px-8">
              {t('getStarted')}
            </Button>
            <Button size="lg" variant="outline" onClick={onLearnMoreClick} className="text-lg px-8">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}