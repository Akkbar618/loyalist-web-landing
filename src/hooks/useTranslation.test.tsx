import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTranslation } from './useTranslation'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

describe('useTranslation', () => {
  const renderHookWithProvider = () => {
    return renderHook(() => {
      const translation = useTranslation()
      const { setLanguage } = useLanguage()
      return { ...translation, setLanguage }
    }, {
      wrapper: ({ children }) => (
        <LanguageProvider>
          {children}
        </LanguageProvider>
      )
    })
  }

  it('возвращает функцию перевода', () => {
    const { result } = renderHookWithProvider()

    expect(typeof result.current.t).toBe('function')
  })

  it('переводит текст на английский по умолчанию', () => {
    const { result } = renderHookWithProvider()

    expect(result.current.t('welcome')).toBe('Welcome to Loyalist')
    expect(result.current.t('getStarted')).toBe('Get Started')
  })

  it('переводит текст на русский после смены языка', () => {
    const { result } = renderHookWithProvider()

    // Меняем язык на русский
    act(() => {
        result.current.setLanguage('ru')
    })

    // In "getStarted" -> "Начать" check, earlier I saw:
    // "getStarted": "Попробовать бесплатно" in translations.ts
    // Wait, let me check translations.ts content again.
    // en: getStarted: "Get Started"
    // ru: getStarted: "Попробовать бесплатно"

    expect(result.current.t('welcome')).toBe('Добро пожаловать в Loyalist')
    expect(result.current.t('getStarted')).toBe('Попробовать бесплатно')
  })

  it('возвращает ключ, если перевод не найден', () => {
    const { result } = renderHookWithProvider()

    // Casting to any to test invalid key behavior if strict typing allows
    // @ts-ignore
    expect(result.current.t('nonExistentKey')).toBe('nonExistentKey')
  })
})
