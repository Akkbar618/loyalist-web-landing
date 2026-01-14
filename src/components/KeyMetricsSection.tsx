import React, { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Counter } from "./Counter";
import { Coffee, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const KeyMetricsSection: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    let element: Element | null = null;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    element = document.getElementById('metrics-section');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const metrics = [
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      value: 1250,
      suffix: "+",
      label: t('cafesVisited')
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 42000,
      suffix: "",
      label: t('activeUsers')
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      value: 326,
      suffix: "",
      label: t('campaignsLaunched')
    }
  ];
  
  return (
    <section className="py-16 md:py-24 border-y border-border/30 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          {t('drivingRealResults')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible && metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-border flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-full flex items-center justify-center">
                {metric.icon}
              </div>
              <div className="text-4xl md:text-[56px] font-bold mb-4 text-foreground">
                <Counter 
                  end={metric.value} 
                  duration={2000} 
                  suffix={metric.suffix} 
                />
              </div>
              <div className="text-lg text-muted-foreground tracking-[0.2px]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
