import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex gap-2", className)}>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
      >
        RU
      </Button>
    </div>
  );
}
