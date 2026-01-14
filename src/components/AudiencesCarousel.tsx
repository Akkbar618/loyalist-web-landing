import React, { useState } from "react";
import { Coffee, DollarSign, Users, TrendingUp, BarChart, Link, Gift, LineChart, Wallet, Globe, Shield, CreditCard, Star, MapPin, Smartphone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { AudienceSlide } from "./AudienceSlide";

const AudiencesCarousel: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const audiences = [{
    title: t('forCafes'),
    description: t('cafesDescription'),
    benefits: [{
      title: t('increaseCustomerReturn'),
      description: "Boost repeat visits by up to 35% with targeted loyalty incentives.",
      icon: <TrendingUp className="w-5 h-5" />
    }, {
      title: t('realTimeAnalytics'),
      description: "Track customer visits, popular items, and campaign performance in one dashboard.",
      icon: <BarChart className="w-5 h-5" />
    }, {
      title: t('simpleIntegration'),
      description: "Easily integrate with your existing POS or use our intuitive standalone tablet app.",
      icon: <Link className="w-5 h-5" />
    }, {
      title: t('customizableCampaigns'),
      description: "Craft rewards perfectly aligned with your brand and customer preferences.",
      icon: <Gift className="w-5 h-5" />
    }],
    icon: <Coffee className="w-6 h-6" />
  }, {
    title: t('forInvestors'),
    description: t('investorsDescription'),
    benefits: [{
      title: t('provenGrowthModel'),
      description: "300% year-on-year user growth with scalable infrastructure.",
      icon: <LineChart className="w-5 h-5" />
    }, {
      title: t('profitableUnitEconomics'),
      description: "Clear path to profitability with recurring subscriptions and transaction-based revenue streams.",
      icon: <Wallet className="w-5 h-5" />
    }, {
      title: t('expandingMarketReach'),
      description: "Active in 12 regions, expanding rapidly to over 30 markets by next year.",
      icon: <Globe className="w-5 h-5" />
    }, {
      title: t('sustainableBusinessModel'),
      description: "A sustainable ecosystem powered by aligned interests of cafés and their customers.",
      icon: <Shield className="w-5 h-5" />
    }],
    icon: <DollarSign className="w-6 h-6" />
  }, {
    title: t('forCustomers'),
    description: t('customersDescription'),
    benefits: [{
      title: t('unifiedLoyaltyProgram'),
      description: "One app for all your favorite cafés – no more carrying multiple punch cards.",
      icon: <CreditCard className="w-5 h-5" />
    }, {
      title: t('personalizedRewards'),
      description: "Enjoy offers and rewards perfectly tailored to your tastes and visit history.",
      icon: <Star className="w-5 h-5" />
    }, {
      title: t('discoverNewPlaces'),
      description: "Find new favorite cafés that match your taste and location.",
      icon: <MapPin className="w-5 h-5" />
    }, {
      title: t('contactlessExperience'),
      description: "Fully digital experience, from ordering your coffee to redeeming your rewards.",
      icon: <Smartphone className="w-5 h-5" />
    }],
    icon: <Users className="w-6 h-6" />
  }];

  // Update the active index when the carousel changes
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="container mx-auto mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 my-[70px] px-0 py-0">{t('whoWeServe')}</h2>
        <div className="flex justify-center mt-6 mb-4 gap-4">
          {audiences.map((audience, i) => (
            <Badge 
              key={i} 
              variant={activeIndex === i ? "default" : "outline"} 
              className={cn(
                "cursor-pointer px-[18px] py-[6px] rounded-[24px] transition-colors",
                activeIndex === i 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "border-primary/50 hover:bg-secondary/50"
              )}
              onClick={() => {
                if (api) {
                  api.scrollTo(i);
                } else {
                  setActiveIndex(i);
                }
              }}
            >
              {audience.title}
            </Badge>
          ))}
        </div>
      </div>
      
      <Carousel 
        className="w-full" 
        opts={{
          loop: true,
          startIndex: activeIndex
        }} 
        setApi={setApi}
      >
        <CarouselContent className="transition-transform duration-500 ease-out">
          {audiences.map((audience, index) => (
            <CarouselItem key={index}>
              <AudienceSlide 
                title={audience.title} 
                description={audience.description} 
                benefits={audience.benefits} 
                icon={audience.icon} 
                isActive={activeIndex === index} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container mx-auto flex justify-center gap-4 mt-6">
        </div>
      </Carousel>
    </div>
  );
};

export default AudiencesCarousel;