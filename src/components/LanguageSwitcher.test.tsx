import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LanguageProvider } from '@/contexts/LanguageContext'

describe('LanguageSwitcher', () => {
  const renderComponent = () => {
    return render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )
  }

  it('отображает кнопки переключения языка', () => {
    renderComponent()
    
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('RU')).toBeInTheDocument()
  })

  it('переключает язык при клике на кнопку', () => {
    renderComponent()
    
    // Проверяем, что по умолчанию выбран английский
    expect(screen.getByText('EN')).toHaveClass('bg-primary')
    expect(screen.getByText('RU')).not.toHaveClass('bg-primary')
    
    // Кликаем на кнопку русского языка
    fireEvent.click(screen.getByText('RU'))
    
    // Проверяем, что теперь выбран русский
    expect(screen.getByText('RU')).toHaveClass('bg-primary')
    expect(screen.getByText('EN')).not.toHaveClass('bg-primary')
  })

  it('сохраняет выбранный язык в localStorage', () => {
    renderComponent()
    
    // Кликаем на кнопку русского языка
    fireEvent.click(screen.getByText('RU'))
    
    // Проверяем, что язык сохранен в localStorage
    expect(localStorage.getItem('language')).toBe('ru')
  })
}) 