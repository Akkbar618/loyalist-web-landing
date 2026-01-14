import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BackToTopButton from './BackToTopButton'

describe('BackToTopButton', () => {
  const mockScrollTo = vi.fn()
  
  beforeEach(() => {
    // Мокаем window.scrollTo
    window.scrollTo = mockScrollTo
  })
  
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('не отображается, когда страница в начале', () => {
    render(<BackToTopButton />)
    
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('отображается, когда страница прокручена', () => {
    // Мокаем window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 500 })
    
    render(<BackToTopButton />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('прокручивает страницу вверх при клике', () => {
    // Мокаем window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 500 })
    
    render(<BackToTopButton />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
}) 