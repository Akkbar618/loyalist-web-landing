import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { LanguageProvider } from '@/contexts/LanguageContext'

describe('Header', () => {
  const mockNavItemClick = vi.fn()

  const renderComponent = () => {
    return render(
      <LanguageProvider>
        <Header onNavItemClick={mockNavItemClick} />
      </LanguageProvider>
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('рендерит логотип и название приложения', () => {
    renderComponent()
    
    expect(screen.getByText('Loyalist')).toBeInTheDocument()
  })

  it('рендерит основные навигационные ссылки', () => {
    renderComponent()
    
    expect(screen.getByText('Partners')).toBeInTheDocument()
    expect(screen.getByText('Achievements')).toBeInTheDocument()
    expect(screen.getByText('Demo')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('рендерит dropdown Info вместо отдельных ссылок', () => {
    renderComponent()
    
    expect(screen.getByText('Info')).toBeInTheDocument()
    
    // Старые ссылки больше не должны быть в навигации
    expect(screen.queryByText('FAQ')).not.toBeInTheDocument()
    expect(screen.queryByText('Investors')).not.toBeInTheDocument()
    expect(screen.queryByText('Download')).not.toBeInTheDocument()
    expect(screen.queryByText('Social Media')).not.toBeInTheDocument()
  })

  it('вызывает обработчик при клике на основную навигационную ссылку', () => {
    renderComponent()
    
    const partnersLink = screen.getByText('Partners')
    fireEvent.click(partnersLink)
    
    expect(mockNavItemClick).toHaveBeenCalledWith('audiences')
  })

  it('открывает мобильное меню при клике на кнопку меню', () => {
    renderComponent()
    
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    
    // Проверяем, что мобильное меню отображается
    const mobileNavLinks = screen.getAllByText('Partners')
    expect(mobileNavLinks).toHaveLength(2) // Один в десктопе, один в мобильном меню
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('закрывает мобильное меню при навигации', () => {
    renderComponent()
    
    // Открываем мобильное меню
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    
    // Кликаем на ссылку навигации
    const mobilePartnersLinks = screen.getAllByText('Partners')
    const mobilePartnersLink = mobilePartnersLinks[1] // Второй это мобильная ссылка
    fireEvent.click(mobilePartnersLink)
    
    expect(mockNavItemClick).toHaveBeenCalledWith('audiences')
  })

  it('отображает кнопку Login в мобильном меню', () => {
    renderComponent()
    
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('применяет стили прокрутки при скролле', () => {
    renderComponent()
    
    // Симулируем скролл
    Object.defineProperty(window, 'scrollY', { value: 100 })
    fireEvent.scroll(window)
    
    // Проверяем, что header получил соответствующие классы
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('py-3')
  })
}) 