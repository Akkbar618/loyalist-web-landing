
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BackToTopButton from './BackToTopButton'

describe('BackToTopButton', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    vi.clearAllMocks()
  })

  it('присутствует в DOM но скрыта, когда страница в начале', () => {
    render(<BackToTopButton />)

    const button = screen.getByRole('button', { name: /back to top/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('opacity-0')
    expect(button).toHaveClass('pointer-events-none')
  })

  it('отображается при прокрутке вниз', () => {
    render(<BackToTopButton />)

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 600 })
    fireEvent.scroll(window)

    const button = screen.getByRole('button', { name: /back to top/i })
    expect(button).toHaveClass('opacity-100')
    expect(button).not.toHaveClass('opacity-0')
  })

  it('прокручивает наверх при клике', () => {
    // Mock scrollTo
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock

    render(<BackToTopButton />)

    // Make visible first
    Object.defineProperty(window, 'scrollY', { value: 600 })
    fireEvent.scroll(window)

    const button = screen.getByRole('button', { name: /back to top/i })
    fireEvent.click(button)

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
})
