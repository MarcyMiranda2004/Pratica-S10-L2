import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Welcome from '../components/Welcome'

describe('Welcome Component', () => {
  it('renders the welcome message', () => {
    render(<Welcome />)

    const searchAlert = screen.getByRole('alert')

    expect(searchAlert).toBeInTheDocument()
  })
})
