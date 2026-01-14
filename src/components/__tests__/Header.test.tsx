import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

describe('Header', () => {
  const mockOnNavItemClick = vi.fn();
  
  // Mock для window.scrollTo
  const mockScrollTo = vi.fn();
  Object.defineProperty(window, 'scrollTo', {
    value: mockScrollTo,
    writable: true
  });

  beforeEach(() => {
    mockOnNavItemClick.mockClear();
    mockScrollTo.mockClear();
    // Сброс стилей body после каждого теста
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  });

  it('blocks page scroll when mobile menu is open', async () => {
    const user = userEvent.setup();
    // Mock для window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 100,
      writable: true
    });

    render(<Header onNavItemClick={mockOnNavItemClick} />);
    
    const menuButton = screen.getByLabelText('Open menu');
    
    // Открываем мобильное меню
    await user.click(menuButton);
    
    // Проверяем, что скролл заблокирован
    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.top).toBe('-100px');
    expect(document.body.style.width).toBe('100%');
    
    // Закрываем мобильное меню
    await user.click(menuButton);
    
    // Проверяем, что скролл разблокирован
    expect(document.body.style.position).toBe('');
    expect(document.body.style.top).toBe('');
    expect(document.body.style.width).toBe('');
    expect(mockScrollTo).toHaveBeenCalledWith(0, 100);
  });

  it('restores scroll position when mobile menu is closed', async () => {
    const user = userEvent.setup();
    // Mock для window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 250,
      writable: true
    });

    render(<Header onNavItemClick={mockOnNavItemClick} />);
    
    const menuButton = screen.getByLabelText('Open menu');
    
    // Открываем и закрываем мобильное меню
    await user.click(menuButton);
    await user.click(menuButton);
    
    // Проверяем, что scrollTo вызван с правильными параметрами
    expect(mockScrollTo).toHaveBeenCalledWith(0, 250);
  });

  it('cleans up scroll lock on unmount', () => {
    const user = userEvent.setup();
    Object.defineProperty(window, 'scrollY', {
      value: 150,
      writable: true
    });

    const { unmount } = render(<Header onNavItemClick={mockOnNavItemClick} />);
    
    // Открываем мобильное меню
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    // Проверяем, что скролл заблокирован
    expect(document.body.style.position).toBe('fixed');
    
    // Размонтируем компонент
    unmount();
    
    // Проверяем, что стили очищены
    expect(document.body.style.position).toBe('');
    expect(document.body.style.top).toBe('');
    expect(document.body.style.width).toBe('');
  });
}); 