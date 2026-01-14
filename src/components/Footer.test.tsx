import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

describe('Footer', () => {
  const renderComponent = () => {
    return render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    )
  }

  it('отображает копирайт', () => {
    renderComponent()
    
    expect(screen.getByText('© 2025 Loyalist. All rights reserved.')).toBeInTheDocument()
  })

  it('отображает ссылки на социальные сети', () => {
    renderComponent()
    
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it('отображает ссылки на разделы сайта', () => {
    renderComponent()
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('отображает кнопку скачивания приложения', () => {
    renderComponent()
    
    expect(screen.getByText('Download Our App')).toBeInTheDocument()
  })
}) 