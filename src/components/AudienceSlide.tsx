import React from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

interface AudienceSlideProps {
  title: string;
  description: string;
  benefits: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  icon: React.ReactNode;
  isActive: boolean;
}

export const AudienceSlide: React.FC<AudienceSlideProps> = ({
  title,
  description,
  benefits,
  icon,
  isActive
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn("transition-opacity duration-500", isActive ? "opacity-100" : "opacity-60")}>
      <div className="container mx-auto max-w-5xl h-full flex flex-col justify-center py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-4 bg-secondary rounded-full mb-6">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg mb-8">{description}</p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6">{t('benefits')}</h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex animate-fade-in" style={{
                  animationDelay: `${index * 100}ms`
                }}>
                  <div className="mr-4 mt-1 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 