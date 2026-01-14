import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const ScreenshotSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('seeInAction')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('seeInActionDescription')}
            </p>
            <button 
              className="px-[46px] py-[19px] rounded-[50px] cursor-pointer border-0 bg-primary text-primary-foreground shadow-[0_0_8px_rgba(0,0,0,0.05)] tracking-[1.5px] uppercase text-[17px] transition-all duration-500 ease-in-out hover:tracking-[3px] hover:bg-primary/90 hover:text-primary-foreground hover:shadow-[rgb(93_24_220)_0px_7px_29px_0px] active:tracking-[3px] active:bg-primary/90 active:text-primary-foreground active:shadow-none active:translate-y-[10px] active:transition-[100ms]"
              onClick={() => window.location.href = "https://testployalist.web.app/"}
            >
              {t('demo')}
            </button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-sm"></div>
              <div className="relative bg-background rounded-lg overflow-hidden border border-border shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop" 
                  alt={t('dashboardInterface')} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg overflow-hidden border border-border shadow-lg w-1/2 transform rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt={t('mobileAppInterface')} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;
