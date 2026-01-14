import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavDropdown from './NavDropdown'
import { LanguageProvider } from '@/contexts/LanguageContext'

describe('NavDropdown', () => {
  const mockNavItemClick = vi.fn()
  
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = (isMobile = false) => {
    return render(
      <LanguageProvider>
        <NavDropdown onNavItemClick={mockNavItemClick} isMobile={isMobile} />
      </LanguageProvider>
    )
  }

  describe('Desktop behavior', () => {
    it('отображает триггер с иконкой стрелки', () => {
      renderComponent()
      
      expect(screen.getByText('Info')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
    })

    it('показывает dropdown при наведении', async () => {
      renderComponent()
      
      const trigger = screen.getByRole('button')
      
      // Наводим мышь
      fireEvent.mouseEnter(trigger.parentElement!)
      
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
        expect(screen.getByText('Investors')).toBeInTheDocument()
        expect(screen.getByText('Download')).toBeInTheDocument()
        expect(screen.getByText('Social Media')).toBeInTheDocument()
      })
    })

    it('скрывает dropdown при убирании мыши', async () => {
      renderComponent()
      
      const container = screen.getByRole('button').parentElement!
      
      // Показываем dropdown
      fireEvent.mouseEnter(container)
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
      })
      
      // Убираем мышь
      fireEvent.mouseLeave(container)
      
      // Ждем delay + немного больше
      await waitFor(() => {
        expect(screen.queryByText('FAQ')).not.toBeInTheDocument()
      }, { timeout: 300 })
    })

    it('вызывает onNavItemClick при клике на элемент dropdown', async () => {
      renderComponent()
      
      // Показываем dropdown
      fireEvent.mouseEnter(screen.getByRole('button').parentElement!)
      
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
      })
      
      // Кликаем на элемент
      fireEvent.click(screen.getByText('FAQ'))
      
      expect(mockNavItemClick).toHaveBeenCalledWith('faq')
    })
  })

  describe('Mobile behavior', () => {
    it('показывает dropdown только при клике на мобильном', async () => {
      renderComponent(true)
      
      const trigger = screen.getByRole('button')
      
      // Наведение мыши не должно показывать dropdown на мобильном
      fireEvent.mouseEnter(trigger.parentElement!)
      
      await waitFor(() => {
        expect(screen.queryByText('FAQ')).not.toBeInTheDocument()
      })
      
      // Клик должен показать dropdown
      fireEvent.click(trigger)
      
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
      })
    })

    it('имеет правильные стили для мобильного', () => {
      renderComponent(true)
      
      const trigger = screen.getByRole('button')
      expect(trigger).toHaveClass('text-lg', 'font-medium', 'w-full')
    })

    it('переключает dropdown при повторном клике', async () => {
      renderComponent(true)
      
      const trigger = screen.getByRole('button')
      
      // Первый клик - открыть
      fireEvent.click(trigger)
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
      })
      
      // Второй клик - закрыть
      fireEvent.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText('FAQ')).not.toBeInTheDocument()
      })
    })
  })

  describe('Keyboard navigation', () => {
    it('поддерживает aria атрибуты', () => {
      renderComponent()
      
      const trigger = screen.getByRole('button')
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    })

    it('обновляет aria-expanded при открытии', async () => {
      renderComponent()
      
      const trigger = screen.getByRole('button')
      
      fireEvent.mouseEnter(trigger.parentElement!)
      
      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
      })
    })
  })

  describe('Click outside behavior', () => {
    it('закрывает dropdown при клике вне области', async () => {
      renderComponent()
      
      // Открываем dropdown
      fireEvent.mouseEnter(screen.getByRole('button').parentElement!)
      
      await waitFor(() => {
        expect(screen.getByText('FAQ')).toBeInTheDocument()
      })
      
      // Кликаем вне dropdown
      fireEvent.mouseDown(document.body)
      
      await waitFor(() => {
        expect(screen.queryByText('FAQ')).not.toBeInTheDocument()
      })
    })
  })

  describe('Animation', () => {
    it('поворачивает иконку стрелки при открытии', async () => {
      renderComponent()
      
      const chevron = screen.getByRole('button').querySelector('svg')
      expect(chevron).toHaveClass('rotate-0')
      
      // Открываем dropdown
      fireEvent.mouseEnter(screen.getByRole('button').parentElement!)
      
      await waitFor(() => {
        expect(chevron).toHaveClass('rotate-180')
      })
    })
  })
}) 