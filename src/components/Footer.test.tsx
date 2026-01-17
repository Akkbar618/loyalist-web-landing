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

    // Updated to match the component
    expect(screen.getByText('© 2025 Loyalist')).toBeInTheDocument()
  })

  it('отображает ссылки на социальные сети', () => {
    renderComponent()

    // Check for social links by accessibility labels
    expect(screen.getByLabelText('Facebook account')).toBeInTheDocument()
    expect(screen.getByLabelText('X (Twitter) account')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram account')).toBeInTheDocument()
    expect(screen.getByLabelText('Telegram channel')).toBeInTheDocument()
  })

  it('отображает секции FAQ и Investors', () => {
    renderComponent()

    expect(screen.getAllByText('FAQ')[0]).toBeInTheDocument()
    expect(screen.getByText('Our Investors')).toBeInTheDocument()
  })

  it('отображает кнопку скачивания приложения', () => {
    renderComponent()

    expect(screen.getByText('Download Our App')).toBeInTheDocument()
  })
})
