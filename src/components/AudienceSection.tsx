
import React from "react";
import { Coffee, DollarSign, Users } from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
}

interface AudienceSectionProps {
  id: string;
  title: string;
  description: string;
  benefits: BenefitItem[];
  icon: React.ReactNode;
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  id,
  title,
  description,
  benefits,
  icon,
}) => {
  return (
    <section id={id} className="section-padding border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-4 bg-secondary rounded-full mb-6">
              {icon}
            </div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg mb-8">{description}</p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6">Benefits</h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Creating components for specific audiences
export const CafesSection: React.FC = () => (
  <AudienceSection
    id="cafes"
    title="For Cafés"
    description="Transform casual customers into dedicated regulars with our simple but powerful loyalty system."
    benefits={[
      {
        title: "Increase Customer Return Rate",
        description: "Boost customer retention by up to 35% with targeted loyalty rewards.",
      },
      {
        title: "Real-time Analytics",
        description: "Track customer visits, popular items, and campaign performance in one dashboard.",
      },
      {
        title: "Simple Integration",
        description: "Integrate with your existing POS system or use our standalone tablet app.",
      },
      {
        title: "Customizable Campaigns",
        description: "Create and manage rewards that match your brand and customer preferences.",
      },
    ]}
    icon={<Coffee className="w-6 h-6" />}
  />
);

export const InvestorsSection: React.FC = () => (
  <AudienceSection
    id="investors"
    title="For Investors"
    description="Join us in revolutionizing the café loyalty space with a rapidly expanding platform."
    benefits={[
      {
        title: "Proven Growth Model",
        description: "300% year-on-year user growth with scalable infrastructure.",
      },
      {
        title: "Profitable Unit Economics",
        description: "Clear path to profitability with subscription and transaction-based revenue.",
      },
      {
        title: "Expanding Market Reach",
        description: "Currently active in 12 regions with plans to expand to 30+ by next year.",
      },
      {
        title: "Sustainable Business Model",
        description: "Value alignment between cafés and consumers creates a resilient ecosystem.",
      },
    ]}
    icon={<DollarSign className="w-6 h-6" />}
  />
);

export const EndUsersSection: React.FC = () => (
  <AudienceSection
    id="end-users"
    title="For Customers"
    description="Discover and support your favorite cafés while earning rewards that matter to you."
    benefits={[
      {
        title: "Unified Loyalty Program",
        description: "One app for all your favorite cafés – no more carrying multiple punch cards.",
      },
      {
        title: "Personalized Rewards",
        description: "Get offers and rewards tailored to your preferences and visit history.",
      },
      {
        title: "Discover New Places",
        description: "Find new cafés based on your taste profile and location.",
      },
      {
        title: "Contactless Experience",
        description: "Completely digital experience from ordering to rewards redemption.",
      },
    ]}
    icon={<Users className="w-6 h-6" />}
  />
);
