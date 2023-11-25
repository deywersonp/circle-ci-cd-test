import { render, screen } from '@testing-library/react'
import { Home } from '.'

describe('Home page', () => {
  it('should be able to render correctly', () => {
    render(<Home />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })
})