import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'
import { Language } from '@/lib/translations'

// Тестовый компонент для проверки контекста
const TestComponent = () => {
  const { language, setLanguage } = useLanguage()
  
  return (
    <div>
      <div data-testid="current-language">{language}</div>
      <button onClick={() => setLanguage('ru')}>Switch to Russian</button>
      <button onClick={() => setLanguage('en')}>Switch to English</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    // Очищаем localStorage перед каждым тестом
    localStorage.clear()
  })

  it('использует английский язык по умолчанию', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en')
  })

  it('сохраняет выбранный язык в localStorage', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    const russianButton = screen.getByText('Switch to Russian')
    fireEvent.click(russianButton)
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('ru')
    expect(localStorage.getItem('language')).toBe('ru')
  })

  it('восстанавливает язык из localStorage', () => {
    localStorage.setItem('language', 'ru')
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('ru')
  })

  it('выбрасывает ошибку при использовании хука вне провайдера', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useLanguage must be used within a LanguageProvider')
    
    consoleError.mockRestore()
  })
}) 