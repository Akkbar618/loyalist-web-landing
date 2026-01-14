import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChatWidget from './ChatWidget'

describe('ChatWidget', () => {
  it('отображает кнопку чата', () => {
    render(<ChatWidget />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('открывает чат при клике на кнопку', () => {
    render(<ChatWidget />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    // Проверяем, что появилось окно чата
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('закрывает чат при повторном клике на кнопку', () => {
    render(<ChatWidget />)
    
    const button = screen.getByRole('button')
    
    // Открываем чат
    fireEvent.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    
    // Закрываем чат
    fireEvent.click(button)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('отображает форму отправки сообщения', () => {
    render(<ChatWidget />)
    
    // Открываем чат
    fireEvent.click(screen.getByRole('button'))
    
    // Проверяем наличие формы
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })
}) 