import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('отображает начальное значение 0', () => {
    render(<Counter end={100} />)
    
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('анимирует счетчик до конечного значения', async () => {
    render(<Counter end={100} duration={100} />)
    
    // Ждем окончания анимации
    await new Promise(resolve => setTimeout(resolve, 150))
    
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('отображает суффикс', () => {
    render(<Counter end={50} suffix="+" duration={0} />)
    
    expect(screen.getByText('50+')).toBeInTheDocument()
  })

  it('отображает лейбл', () => {
    render(<Counter end={25} label="Test Label" duration={0} />)
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('правильно очищает animationFrame при размонтировании', () => {
    const cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')
    
    const { unmount } = render(<Counter end={100} />)
    unmount()
    
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
    
    cancelAnimationFrameSpy.mockRestore()
  })
}) 