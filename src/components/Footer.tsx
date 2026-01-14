import React from "react";
import { Facebook, Instagram, MessageSquare, Send, Globe } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { config } from "@/lib/config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'ru' as Language, name: 'Русский' }
  ];

  const socialLinks = [{
    name: "Facebook",
    url: config.social.facebook,
    icon: <Facebook className="w-6 h-6" />,
    ariaLabel: "Facebook account"
  }, {
    name: "X",
    url: config.social.twitter,
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>,
    ariaLabel: "X (Twitter) account"
  }, {
    name: "Instagram",
    url: config.social.instagram,
    icon: <Instagram className="w-6 h-6" />,
    ariaLabel: "Instagram account"
  }, {
    name: "Telegram",
    url: config.social.telegram,
    icon: <Send className="w-6 h-6" />,
    ariaLabel: "Telegram channel"
  }];

  const faqs = [{
    question: t('faqHowWorks'),
    answer: t('faqHowWorksAnswer')
  }, {
    question: t('faqSetupFee'),
    answer: t('faqSetupFeeAnswer')
  }, {
    question: t('faqPosIntegration'),
    answer: t('faqPosIntegrationAnswer')
  }];

  const investors = [
    {
      name: "TechVentures Capital",
      logo: "/investors/techventures.png",
      url: "https://techventures.com"
    },
    {
      name: "Horizon Partners",
      logo: "/investors/horizon.png",
      url: "https://horizonpartners.com"
    },
    {
      name: "Café Innovation Fund",
      logo: "/investors/cafe-innovation.png",
      url: "https://cafeinnovation.com"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/10 py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Column: Company Info + Downloads + Social */}
          <div className="md:col-span-3 space-y-8">
            {/* Theme and Language Toggles */}
            <div className="flex items-center justify-start space-x-2 mb-4">
              <ThemeToggle className="h-9 w-9 border border-border/50 rounded-md hover:bg-secondary/70 transition-colors flex items-center justify-center" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 border border-border/50 rounded-md hover:bg-secondary/70 transition-colors">
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="flex items-center gap-2"
                    >
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* App download links */}
            <div id="download">
              <h3 className="text-lg font-semibold mb-4 text-primary/90">{t('downloadApp')}</h3>
              <div className="flex flex-row gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/90 text-white rounded-lg hover:bg-black transition-colors shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-sm font-medium">App Store</span>
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/90 text-white rounded-lg hover:bg-black transition-colors shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.28-.28-.45-.66-.45-1.08V2.894c0-.42.17-.8.45-1.08zM14.208 12l10.183 10.186c.28-.28.45-.66.45-1.08V2.894c0-.42-.17-.8-.45-1.08L14.208 12z" />
                  </svg>
                  <span className="text-sm font-medium">Google Play</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div id="social">
              <h3 className="text-lg font-semibold mb-4 text-primary/90">{t('followUs')}</h3>
              <div className="flex gap-4">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center and Right Columns: FAQ, Investors, and Toggles */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* FAQ Section */}
              <div id="faq">
                <h3 className="text-2xl font-semibold mb-6 text-primary/90">{t('faq')}</h3>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border border-border/30 rounded-lg px-4 hover:bg-secondary/20 transition-colors"
                    >
                      <AccordionTrigger className="text-sm font-medium text-left py-3">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground text-left pb-3">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Investors Section */}
              <div id="investors">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 text-primary/90">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    {t('ourInvestors')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {investors.map((investor, index) => (
                    <a
                      key={index}
                      href={investor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-secondary/40 px-4 py-3 rounded-lg hover:bg-secondary/60 transition-colors"
                    >
                      <span className="text-base font-medium">{investor.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright at the bottom */}
        <div className="mt-12 border-t border-border/30 pt-8 flex justify-between items-center text-sm text-muted-foreground">
          <p className="font-medium">© 2025 Loyalist</p>
          <a
            href="/privacy"
            className="text-primary hover:underline font-medium"
          >
            {t('privacyPolicy')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
