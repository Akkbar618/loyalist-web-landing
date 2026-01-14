import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import { LanguageProvider } from '@/contexts/LanguageContext'

describe('HeroSection', () => {
  const mockGetStartedClick = vi.fn()
  const mockLearnMoreClick = vi.fn()

  const renderComponent = () => {
    return render(
      <LanguageProvider>
        <HeroSection 
          onGetStartedClick={mockGetStartedClick}
          onLearnMoreClick={mockLearnMoreClick}
        />
      </LanguageProvider>
    )
  }

  it('рендерит заголовок и подзаголовок', () => {
    renderComponent()
    
    expect(screen.getByText('Turn Customers into Regulars with Loyalist')).toBeInTheDocument()
    expect(screen.getByText('Increase customer retention and drive revenue through personalized loyalty rewards')).toBeInTheDocument()
  })

  it('рендерит кнопки и вызывает обработчики при клике', () => {
    renderComponent()
    
    const getStartedButton = screen.getByText('Get Started')
    const learnMoreButton = screen.getByText('Learn More')
    
    expect(getStartedButton).toBeInTheDocument()
    expect(learnMoreButton).toBeInTheDocument()
    
    fireEvent.click(getStartedButton)
    expect(mockGetStartedClick).toHaveBeenCalledTimes(1)
    
    fireEvent.click(learnMoreButton)
    expect(mockLearnMoreClick).toHaveBeenCalledTimes(1)
  })
}) 