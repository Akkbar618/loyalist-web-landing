import React from "react";
import { Quote } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const TestimonialSection: React.FC = () => {
  const { t } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const testimonials = [{
    quote: t('testimonial1'),
    name: t('testimonial1Author'),
    role: t('testimonial1Role'),
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial2'),
    name: t('testimonial2Author'),
    role: t('testimonial2Role'),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial3'),
    name: t('testimonial3Author'),
    role: t('testimonial3Role'),
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial4'),
    name: t('testimonial4Author'),
    role: t('testimonial4Role'),
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial5'),
    name: t('testimonial5Author'),
    role: t('testimonial5Role'),
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial6'),
    name: t('testimonial6Author'),
    role: t('testimonial6Role'),
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial7'),
    name: t('testimonial7Author'),
    role: t('testimonial7Role'),
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial8'),
    name: t('testimonial8Author'),
    role: t('testimonial8Role'),
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial9'),
    name: t('testimonial9Author'),
    role: t('testimonial9Role'),
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
  }, {
    quote: t('testimonial10'),
    name: t('testimonial10Author'),
    role: t('testimonial10Role'),
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
  }];

  return (
    <section className="w-full h-full flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('whatPartnersSay')}</h2>
        
        <Carousel
          opts={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                >
                  <div className="bg-secondary/50 rounded-[20px] p-6 h-[420px] flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-transform duration-250 hover:translate-y-[-4px]">
                    <Quote className="w-7 h-7 text-muted-foreground/30 mb-4 flex-shrink-0" />
                    <p className="text-foreground text-[17px] leading-[1.6] mb-6 flex-grow overflow-y-auto">{testimonial.quote}</p>
                    <div className="flex items-center mt-auto pt-4 border-t border-border/50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                      />
                      <div>
                        <div className="font-semibold text-[15px] text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
