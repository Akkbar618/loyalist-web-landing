
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ScreenshotsSection: React.FC = () => {
  const screenshots = [
    {
      image: "/placeholder.svg",
      title: "Customer Mobile App",
      description: "Browse nearby cafés and track your loyalty rewards.",
    },
    {
      image: "/placeholder.svg",
      title: "Café Dashboard",
      description: "Manage your loyalty programs and view customer analytics.",
    },
    {
      image: "/placeholder.svg",
      title: "Reward Redemption",
      description: "Seamless reward claiming for customers through QR codes.",
    },
    {
      image: "/placeholder.svg",
      title: "Analytics Platform",
      description: "Deep insights into customer behavior and program performance.",
    },
  ];

  return (
    <section id="screenshots" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          See Loyalist in Action
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg bg-background">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1">{screenshot.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
