import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { config } from "@/lib/config";
import NavDropdown from "./NavDropdown";

interface HeaderProps {
  onNavItemClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onNavItemClick
}) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокировка скролла при открытии мобильного меню
  useEffect(() => {
    if (isMenuOpen) {
      // Сохраняем текущую позицию скролла
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      // Восстанавливаем скролл при закрытии меню
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
    }

    // Cleanup при размонтировании компонента
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const handleNavItemClick = (sectionId: string) => {
    onNavItemClick(sectionId);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-background/60 backdrop-blur-sm border-b border-border/10 shadow-sm" : "py-6"}`}>
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="flex items-center">
        <a href="#hero" className="text-xl font-bold tracking-tight" onClick={e => {
          e.preventDefault();
          handleNavItemClick("hero");
        }}>
          {t('appName')}
        </a>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#audiences" className="hover:underline" onClick={e => { e.preventDefault(); handleNavItemClick('audiences') }}>{t('navPartners')}</a>
        <a href="#metrics-section" className="hover:underline" onClick={e => { e.preventDefault(); handleNavItemClick('metrics-section') }}>{t('navAchievements')}</a>
        <a href="#screenshots" className="hover:underline" onClick={e => { e.preventDefault(); handleNavItemClick('screenshots') }}>{t('navDemo')}</a>
        <a href="#testimonials" className="hover:underline" onClick={e => { e.preventDefault(); handleNavItemClick('testimonials') }}>{t('navTestimonials')}</a>
        <NavDropdown onNavItemClick={handleNavItemClick} />
      </nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 p-0 w-10 h-10 flex items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <span className="flex flex-col items-center justify-center w-6 h-6">
            <span className={`block h-0.5 w-6 bg-current rounded transition-transform duration-300 ${isMenuOpen ? 'translate-y-1.5 -rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-opacity duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-transform duration-300 ${isMenuOpen ? '-translate-y-1.5 rotate-45' : ''}`}></span>
          </span>
        </Button>
      </div>
    </div>
    {/* Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={() => setIsMenuOpen(false)}
      aria-hidden="true"
    />
    {/* Mobile Navigation Drawer */}
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 backdrop-blur-md z-40 pt-24 px-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
        <a href="#audiences" className="text-lg font-medium hover:text-primary transition-colors" onClick={e => { e.preventDefault(); handleNavItemClick('audiences') }}>{t('navPartners')}</a>
        <a href="#metrics-section" className="text-lg font-medium hover:text-primary transition-colors" onClick={e => { e.preventDefault(); handleNavItemClick('metrics-section') }}>{t('navAchievements')}</a>
        <a href="#screenshots" className="text-lg font-medium hover:text-primary transition-colors" onClick={e => { e.preventDefault(); handleNavItemClick('screenshots') }}>{t('navDemo')}</a>
        <a href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors" onClick={e => { e.preventDefault(); handleNavItemClick('testimonials') }}>{t('navTestimonials')}</a>
        <NavDropdown onNavItemClick={handleNavItemClick} isMobile={true} />
        <div className="flex items-center justify-center pt-4">
          <Button
            variant="default"
            className="w-full"
            onClick={() => window.location.href = config.webAppUrl}
          >
            {t('login')}
          </Button>
        </div>
      </nav>
    </div>
  </header>;
};

export default Header;
