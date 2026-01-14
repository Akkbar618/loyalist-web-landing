import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  onNavItemClick: (sectionId: string) => void;
  className?: string;
  isMobile?: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ 
  onNavItemClick, 
  className = "",
  isMobile = false 
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>('left');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropdownItems = [
    { label: t('navFAQ'), id: 'faq' },
    { label: t('navInvestors'), id: 'investors' },
    { label: t('navDownload'), id: 'download' },
    { label: t('navSocial'), id: 'social' }
  ];

  const handleNavItemClick = (sectionId: string) => {
    onNavItemClick(sectionId);
    setIsOpen(false);
  };

  // Функция для определения оптимальной позиции dropdown
  const calculateDropdownPosition = () => {
    if (isMobile || !buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownWidth = 192; // w-48 = 12rem = 192px
    const windowWidth = window.innerWidth;
    const scrollbarWidth = 17; // примерная ширина scrollbar
    const availableWidth = windowWidth - scrollbarWidth;

    // Проверяем, поместится ли dropdown справа от кнопки
    const rightPosition = buttonRect.left;
    const rightSpace = availableWidth - rightPosition;

    // Проверяем, поместится ли dropdown слева от кнопки
    const leftPosition = buttonRect.right - dropdownWidth;
    const leftSpace = leftPosition;

    // Определяем оптимальную позицию
    if (rightSpace >= dropdownWidth) {
      setDropdownPosition('left'); // обычная позиция (left-0)
    } else if (leftSpace >= 0) {
      setDropdownPosition('right'); // смещенная позиция (right-0)
    } else {
      // Если не помещается ни с одной стороны, прижимаем к краю экрана
      setDropdownPosition('left');
    }
  };

  // Click outside to close (только для desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMobile]);

  // Пересчитываем позицию при изменении размера окна
  useEffect(() => {
    if (isMobile) return;

    const handleResize = () => {
      if (isOpen) {
        calculateDropdownPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, isMobile]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    calculateDropdownPosition();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    const timeout = setTimeout(() => {
      setIsOpen(false);
      setHoverTimeout(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      calculateDropdownPosition();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`flex items-center space-x-1 hover:underline focus:outline-none focus:underline ${
          isMobile ? 'text-lg font-medium w-full justify-start' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('navInfo')}
      >
        <span>{t('navInfo')}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div
          className={`${
            isMobile 
              ? 'mt-2 ml-4 space-y-3' 
              : `absolute top-full mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border/20 rounded-md shadow-lg z-50 ${
                  dropdownPosition === 'left' ? 'left-0' : 'right-0'
                }`
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-orientation="vertical"
        >
{!isMobile ? (
            <div className="py-1">
              <a
                href="#faq"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('faq');
                }}
                role="menuitem"
              >
                FAQ
              </a>
              <a
                href="#investors"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('investors');
                }}
                role="menuitem"
              >
                {t('navInvestors')}
              </a>
              <a
                href="#download"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('download');
                }}
                role="menuitem"
              >
                {t('navDownload')}
              </a>
              <a
                href="#social"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('social');
                }}
                role="menuitem"
              >
                {t('navSocial')}
              </a>
            </div>
          ) : (
            <>
              <a
                href="#faq"
                className="block text-base text-muted-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('faq');
                }}
                role="menuitem"
              >
                FAQ
              </a>
              <a
                href="#investors"
                className="block text-base text-muted-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('investors');
                }}
                role="menuitem"
              >
                {t('navInvestors')}
              </a>
              <a
                href="#download"
                className="block text-base text-muted-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('download');
                }}
                role="menuitem"
              >
                {t('navDownload')}
              </a>
              <a
                href="#social"
                className="block text-base text-muted-foreground transition-colors duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick('social');
                }}
                role="menuitem"
              >
                {t('navSocial')}
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavDropdown; 