import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('начинает с 0', () => {
    render(<Counter end={100} duration={100} />)
    expect(screen.getByText(/0/)).toBeInTheDocument()
  })

  it('отображает лейбл', () => {
    render(<Counter end={100} label="Test Label" duration={0} />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })
})
