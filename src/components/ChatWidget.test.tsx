
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChatWidget from './ChatWidget'

// Mock useToast
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}))

describe('ChatWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('отображает кнопку открытия чата', () => {
    render(<ChatWidget />)

    expect(screen.getByRole('button', { name: /chat support/i })).toBeInTheDocument()
  })

  it('открывает окно чата при клике', () => {
    render(<ChatWidget />)

    const button = screen.getByRole('button', { name: /chat support/i })
    fireEvent.click(button)

    expect(screen.getByText('Loyalist Support')).toBeInTheDocument()
    expect(screen.getByText('How can we help you today?')).toBeInTheDocument()
  })

  it('отображает кнопку отправки сообщения', () => {
    render(<ChatWidget />)

    // Открываем чат
    const button = screen.getByRole('button', { name: /chat support/i })
    fireEvent.click(button)

    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('закрывает чат при отправке сообщения', () => {
    render(<ChatWidget />)

    // Открываем чат
    const toggleButton = screen.getByRole('button', { name: /chat support/i })
    fireEvent.click(toggleButton)

    // Отправляем сообщение
    const sendButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(sendButton)

    // Проверяем, что чат закрылся (заголовка больше нет)
    expect(screen.queryByText('Loyalist Support')).not.toBeInTheDocument()
  })
})
